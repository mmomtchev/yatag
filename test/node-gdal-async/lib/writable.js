const { Writable } = require('stream')

const debug = process.env.NODE_DEBUG && process.env.NODE_DEBUG.match(/gdal_write|gdal^_/) ?
  console.debug.bind(console, 'RasterWriteStream:') :
  () => undefined

/**
 * create a Writable stream from a raster band
 *
 * @for gdal.RasterBandPixels
 * @method createWriteStream
 * @param {RasterWritableOptions} [options]
 * @param {bool} [options.blockOptimize=true] Write by file blocks when possible (when rasterSize.x == blockSize.x)
 * @param {bool} [options.ignoreShape=false] Do not throw if the shape does not match the source
 * @returns {RasterWriteStream}
 */
function createWriteStream(options) {
  const writable = new RasterWriteStream({ ...options ||{}, band: this.band })
  return writable
}

/**
 * Class implementing raster writing as a stream of pixels
 * Writing is buffered and it is aligned on the underlying
 * compression blocks for maximum efficiency when possible
 *
 * When piping between rasters using identical blocks,
 * the transfer is zero-copy
 *
 * The input stream must be in row-major order
 *
 * @class RasterWriteStream
 * @extends stream.Writable
 * @param {RasterWritableOptions} [options]
 * @param {RasterBand} options.band RasterBand to use
 * @param {bool} [options.blockOptimize=true] Write by file blocks when possible (when rasterSize.x == blockSize.x)
 * @param {bool} [options.ignoreShape=false] Do not throw if the shape does not match the source
 */
class RasterWriteStream extends Writable {
  constructor(options) {
    super({ ...options, objectMode: true })
    this.band = options.band
    this.buffers = []
    this.buffered = 0
    this.writingPos = 0
    this.blockPos = 0

    this.initQ = Promise.all([ this.band.blockSizeAsync, this.band.sizeAsync ])
      .then(([ blockSize, rasterSize ]) => {
        this.blockSize = blockSize
        this.blockLen = blockSize.x * blockSize.y
        this.rasterSize = rasterSize
        if (blockSize.x == rasterSize.x && options.blockOptimize !== false) {
          debug('init done, optimized block write', blockSize, rasterSize)
          this._writeNextBuffer = RasterWriteStream.prototype._writeNextBlock
          return
        }
        debug('init done, line by line write', blockSize, rasterSize)
        this.blockLen = this.rasterSize.x
        this._writeNextBuffer = RasterWriteStream.prototype._writeNextLine
      })
  }
}

RasterWriteStream.prototype._writeNextBlock = function (buffer) {
  const q = this.band.pixels.writeBlockAsync(0, this.blockPos, buffer)
  this.blockPos++
  this.writingPos += this.blockSize.y
  return q
}

RasterWriteStream.prototype._writeNextLine = function (buffer) {
  const q = this.band.pixels.writeAsync(0, this.writingPos, this.rasterSize.x, 1, buffer)
  this.blockPos++
  this.writingPos++
  return q
}

RasterWriteStream.prototype._writeNext = function (cb) {
  if (this.buffered >= this.blockLen) {
    // We have enough for one block
    let buffer
    if (this.buffers[0].length == this.blockLen) {
      debug('writing full block in zero-copy mode', this.buffered, this.blockLen)
      // zero-copy piping when:
      // source.blockSize == target.blockSize && target.blockSize.x = target.rasterSize.x
      buffer = this.buffers[0]
      this.buffers.shift()
    } else {
      debug('writing full block in block consolidation mode', this.buffered, this.blockLen, this.buffers.map((buf) => buf.length))
      // block writing with in-memory copying (no gdal.RasterBand.pixels.writev)
      // source.blockSize != target.blockSize && target.blockSize.x = target.rasterSize.x
      buffer = new this.buffers[0].constructor(this.blockLen)
      let len = 0
      while (len + this.buffers[0].length < this.blockLen) {
        buffer.set(this.buffers[0], len)
        len += this.buffers[0].length
        this.buffers.shift()
      }
      buffer.set(this.buffers[0].subarray(0, this.blockLen - len), len)
      if (this.blockLen - len < this.buffers[0].length) {
        this.buffers[0] = this.buffers[0].subarray(this.blockLen - len)
      } else {
        this.buffers.shift()
      }
    }
    debug('writing', this.blockPos, this.writingPos, buffer.length)
    const q = this._writeNextBuffer(buffer).catch((e) => ({ err: e }))
    this.buffered -= buffer.length
    if (this.writingPos == this.rasterSize.y) {
      debug('raster finished')
      // We just wrote the last block
      this.rasterFinished = true
      if (this.buffers[0] && this.buffers[0].length > 0) {
        cb(new RangeError(`Writing beyond the end of the raster, ${this.buffers[0].length} extra element(s)`))
        return
      }
    }

    // Signal the writer only when the block is written
    q.then((r) => {
      if (r && r.err) {
        debug('reemitting error', r.err)
        cb(r.err)
        return
      }
      debug('signal when writing')
      cb()
    })
    return
  }

  // We are block-buffering for now so tell the writer to continue
  debug('signal when buffering')
  cb()
}

RasterWriteStream.prototype._write = function (chunk, _, callback) {
  debug('got', chunk)

  let err
  if (!chunk.length || !chunk.BYTES_PER_ELEMENT) err = new TypeError('Only TypedArrays are supported')
  if (this.buffers.length > 0 && this.buffers[0].constructor !== chunk.constructor) err = TypeError('Type mixing is not supported')
  if (this.rasterFinished) err = new RangeError('Writing beyond the end of the raster')
  if (err) {
    debug('emit error', err)
    callback(err)
    return
  }

  this.buffers.push(chunk)
  this.buffered += chunk.length

  this.initQ.then(() => this._writeNext(callback))
}

RasterWriteStream.prototype._final = function (cb) {
  this.band.ds.flushAsync()
    .catch((e) => ({ err: e }))
    .then((r) => {
      if (r && r.err) {
        cb(r.err)
        return
      }
      cb()
    })
}

module.exports = {
  createWriteStream,
  RasterWriteStream
}
