const { Readable } = require('stream')

const debug = process.env.NODE_DEBUG && process.env.NODE_DEBUG.match(/gdal_mux|gdal^_/) ?
  console.debug.bind(console, 'RasterMuxStream:') :
  () => undefined


/**
 * Multiplexer stream
 *
 * Reads multiple input streams and outputs a single
 * synchronized stream with multiple data elements
 *
 * All the input streams must have the same length
 *
 * @class RasterMuxStream
 * @extends stream.Readable
 * @param {Record<string,RasterReadStream>} inputs Input streams
 * @param {RasterReadableOptions} [options]
 * @param {bool} [options.blockOptimize=true] Read by file blocks when possible (when rasterSize.x == blockSize.x)
 */
class RasterMuxStream extends Readable {
  constructor(inputs, options) {
    super({ ...options, objectMode: true })
    this.inputs = {}
    this.buffers = {}
    this.buffersTotalData = {}
    this.ids = Object.keys(inputs)
    this.dataHandlers = {}
    this.endHandlers = {}
    this.isRunning = {}
    this.blockOptimize = (options || {}).blockOptimize
    for (const id of this.ids) {
      const inp = inputs[id]
      if (!(inp instanceof Readable)) throw new TypeError('inputs must be a map of Readables')
      if (!inp.readableObjectMode) throw new TypeError('All inputs must be in object mode')

      this.inputs[id] = inp
      this.buffers[id] = []
      this.buffersTotalData[id] = 0
      this.dataHandlers[id] = this.handleIncoming.bind(this, id)
      this.isRunning[id] = false

      this.endHandlers[id] = this.inputEnded.bind(this, id)
      this.inputs[id].on('end', this.endHandlers[id])
    }
  }

  handleIncoming(id, chunk) {
    debug(`received on ${id} chunk ${chunk.length}`)
    this.buffers[id].push(chunk)
    this.buffersTotalData[id] += chunk.length

    const maxReady = Math.min.apply(Math, this.ids.map((id) => this.buffersTotalData[id]))
    if (maxReady == 0) {
      return
    }

    debug(`sending ${maxReady}`)
    const send = {}
    for (const id of this.ids) {
      if (this.buffers[id][0] === null) {
        // one of the inputs ended before the others
        this.destroy(`premature end on ${id}`)
        return
      } else if (this.buffers[id][0].length == maxReady && !this.blockOptimize) {
        // zero-copy mode, this input blocks are same size as the output
        debug(`zero-copy from ${id}`)
        send[id] = this.buffers[id][0]
        this.buffers[id].shift()
      } else {
        // block consolidation mode
        debug(`block consolidation from ${id}: ${this.buffers[id].map((buf) => buf.length)}`)
        send[id] = new this.buffers[id][0].constructor(maxReady)
        let len = 0
        while (len + this.buffers[id][0].length < maxReady) {
          send[id].set(this.buffers[0], len)
          len += this.buffers[id][0].length
          this.buffers[id].shift()
          if (this.buffers[id][0] === null) {
            // one of the inputs ended before the others
            this.destroy(`premature end on ${id}`)
            return
          }
        }
        send.set(this.buffers[id][0].subarray(0, maxReady - len), len)
        if (maxReady - len < this.buffers[id][0].length) {
          this.buffers[id][0] = this.buffers[id][0].subarray(maxReady - len)
        } else {
          this.buffers[id].shift()
        }
      }
      this.buffersTotalData[id] -= maxReady
    }

    // send the consolidated result and eventually start pausing
    const flowing = this.push(send)

    if (this.tryEnd()) return

    if (!flowing) this.throttle()
  }

  throttle() {
    debug(`trying to throttle ${this.ids.map((id) => this.buffersTotalData[id])}`)
    // Find the most advanced input and pause it when it is not already paused
    const most = this.ids.reduce((most, id) => this.buffersTotalData[id] > this.buffersTotalData[most] ? id : most, this.ids[0])
    if (this.isRunning[most]) {
      debug(`throttling ${most}`)
      this.isRunning[most] = false
      this.inputs[most].off('data', this.dataHandlers[most])
    }
  }

  tryEnd() {
    if (this.buffers[this.ids[0]][0] === null) {
      const max = Math.max.apply(Math, this.ids.map((id) => this.buffersTotalData[id]))
      if (max > 0) {
        this.destroy(`premature end on ${this.ids[0]}`)
        return true
      }
      // this is the normal end
      debug('ended')
      this.push(null)
      for (const id of this.ids) {
        if (this.isRunning[id]) {
          this.inputs[id].off('data', this.dataHandlers[id])
        }
        this.inputs[id].off('end', this.endHandlers[id])
      }
      return true
    }

    return false
  }

  inputEnded(id) {
    debug(`${id} ended, ${this.ids.map((id) => this.buffersTotalData[id])}`)
    this.buffers[id].push(null)
    this.tryEnd()
  }

  _read() {
    for (const id of this.ids) {
      if (!this.isRunning[id]) {
        debug(`resuming ${id}`)
        this.isRunning[id] = true
        this.inputs[id].on('data', this.dataHandlers[id])
      }
    }
  }
}

module.exports = {
  RasterMuxStream
}
