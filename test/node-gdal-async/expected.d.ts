import * as stream from 'stream';

export type Color = {
	c1: number;
	c2: number;
	c3: number;
	c4: number;
}

export type ContourOptions = {
	src: RasterBand;
	dst: Layer;
	offset?: number;
	interval?: number;
	fixedLevels?: number[];
	nodata?: number;
	idField?: number;
	elevField?: number;
	progress_cb?: ProgressCb;
}

export type CreateOptions = {
	progress_cb?: ProgressCb;
}

export type FillOptions = {
	src: RasterBand;
	mask?: RasterBand;
	searchDist: number;
	smoothingIterations?: number;
}

export type MDArrayOptions = {
	origin: number[];
	span: number[];
	stride?: number[];
	data_type?: string;
	data?: TypedArray;
	_offset?: number;
}

export type ProgressCb = ( complete: number, msg: string ) => void

export type ProgressOptions = {
	progress_cb: ProgressCb;
}

export type ReadOptions = {
	buffer_width?: number;
	buffer_height?: number;
	type?: string;
	pixel_space?: number;
	line_space?: number;
	resampling?: string;
	progress_cb?: ProgressCb;
	offset?: number;
}

export type ReprojectOptions = {
	src: Dataset;
	dst: Dataset;
	s_srs: SpatialReference;
	t_srs: SpatialReference;
	resampling?: string;
	cutline?: Geometry;
	srcBands?: number[];
	dstBands?: number[];
	srcAlphaBand?: number;
	dstAlphaBand?: number;
	srcNodata?: number;
	dstNodata?: number;
	blend?: number;
	memoryLimit?: number;
	maxError?: number;
	multi?: boolean;
	options?: object;
	progress_cb?: ProgressCb;
}

export type SieveOptions = {
	src: RasterBand;
	dst: RasterBand;
	mask?: RasterBand;
	threshold: number;
	connectedness?: number;
	progress_cb?: ProgressCb;
}

export type TypedArray = Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array

export type UtilOptions = {
	progress_cb?: ProgressCb;
}

export type WarpOptions = {
	src: Dataset;
	s_srs: SpatialReference;
	t_srs: SpatialReference;
	maxError?: number;
}

export type WarpOutput = {
	rasterSize: xyz;
	geoTransform: number[];
}

export type WriteOptions = {
	buffer_width?: number;
	buffer_height?: number;
	pixel_space?: number;
	line_space?: number;
	progress_cb?: ProgressCb;
	offset?: number;
}

export type callback<T> = (Error, T) => void

export type forEachCb<T> = (obj: T, idx: number) => boolean|void

export type mapCb<T,U> = (obj: T, index: number) => U

export type stats = {
	min: number;
	max: number;
	mean: number;
	std_dev: number;
}

export type units = {
	units: string;
	value: number;
}

export interface RasterReadableOptions extends stream.ReadableOptions {
	blockOptimize: boolean;
}

export interface RasterWritableOptions extends stream.WritableOptions {
	blockOptimize: boolean;
}

export interface fieldValue { key: string, value: any }

export interface xyz {
	x: number;
	y: number;
	z?: number;
}


  /**
   * Error level: Debug
   *
   * @final
   * @property gdal.CE_Debug
   * @type {number}
   */
  export const CE_Debug: number

  /**
   * Error level: Failure
   *
   * @final
   * @property gdal.CE_Failure
   * @type {number}
   */
  export const CE_Failure: number

  /**
   * Error level: Fatal
   *
   * @final
   * @property gdal.CE_Fatal
   * @type {number}
   */
  export const CE_Fatal: number

  /**
   * Error level: (no error)
   *
   * @final
   * @property gdal.CE_None
   * @type {number}
   */
  export const CE_None: number

  /**
   * Error level: Warning
   *
   * @final
   * @property gdal.CE_Warning
   * @type {number}
   */
  export const CE_Warning: number

  /**
   * @final
   * @property gdal.CPLE_AppDefined
   * @type {number}
   */
  export const CPLE_AppDefined: number

  /**
   * @final
   * @property gdal.CPLE_AssertionFailed
   * @type {number}
   */
  export const CPLE_AssertionFailed: number

  /**
   * @final
   * @property gdal.CPLE_FileIO
   * @type {number}
   */
  export const CPLE_FileIO: number

  /**
   * @final
   * @property gdal.CPLE_IllegalArg
   * @type {number}
   */
  export const CPLE_IllegalArg: number

  /**
   * @final
   * @property gdal.CPLE_NoWriteAccess
   * @type {number}
   */
  export const CPLE_NoWriteAccess: number

  /**
   * @final
   * @property gdal.CPLE_None
   * @type {number}
   */
  export const CPLE_None: number

  /**
   * @final
   * @property gdal.CPLE_NotSupported
   * @type {number}
   */
  export const CPLE_NotSupported: number

  /**
   * @final
   * @property gdal.CPLE_OpenFailed
   * @type {number}
   */
  export const CPLE_OpenFailed: number

  /**
   * @final
   * @property gdal.CPLE_OutOfMemory
   * @type {number}
   */
  export const CPLE_OutOfMemory: number

  /**
   * @final
   * @property gdal.CPLE_UserInterrupt
   * @type {number}
   */
  export const CPLE_UserInterrupt: number

  /**
   * @final
   * @property gdal.CPLE_objectNull
   * @type {number}
   */
  export const CPLE_objectNull: number

  /**
   * @final
   * @property gdal.DCAP_CREATE
   * @type {string}
   */
  export const DCAP_CREATE: string

  /**
   * @final
   * @property gdal.DCAP_CREATECOPY
   * @type {string}
   */
  export const DCAP_CREATECOPY: string

  /**
   * @final
   * @property gdal.DCAP_VIRTUALIO
   * @type {string}
   */
  export const DCAP_VIRTUALIO: string

  /**
   * @final
   * @property gdal.DIM_HORIZONTAL_X
   * @type {string}
   */
  export const DIM_HORIZONTAL_X: string

  /**
   * @final
   * @property gdal.DIM_HORIZONTAL_Y
   * @type {string}
   */
  export const DIM_HORIZONTAL_Y: string

  /**
   * @final
   * @property gdal.DIM_PARAMETRIC
   * @type {string}
   */
  export const DIM_PARAMETRIC: string

  /**
   * @final
   * @property gdal.DIM_TEMPORAL
   * @type {string}
   */
  export const DIM_TEMPORAL: string

  /**
   * @final
   * @property gdal.DIM_VERTICAL
   * @type {string}
   */
  export const DIM_VERTICAL: string

  /**
   * @final
   * @property gdal.DIR_DOWN
   * @type {string}
   */
  export const DIR_DOWN: string

  /**
   * @final
   * @property gdal.DIR_EAST
   * @type {string}
   */
  export const DIR_EAST: string

  /**
   * @final
   * @property gdal.DIR_FUTURE
   * @type {string}
   */
  export const DIR_FUTURE: string

  /**
   * @final
   * @property gdal.DIR_NORTH
   * @type {string}
   */
  export const DIR_NORTH: string

  /**
   * @final
   * @property gdal.DIR_PAST
   * @type {string}
   */
  export const DIR_PAST: string

  /**
   * @final
   * @property gdal.DIR_SOUTH
   * @type {string}
   */
  export const DIR_SOUTH: string

  /**
   * @final
   * @property gdal.DIR_UP
   * @type {string}
   */
  export const DIR_UP: string

  /**
   * @final
   * @property gdal.DIR_WEST
   * @type {string}
   */
  export const DIR_WEST: string

  /**
   * @final
   * @property gdal.DMD_CREATIONDATATYPES
   * @type {string}
   */
  export const DMD_CREATIONDATATYPES: string

  /**
   * @final
   * @property gdal.DMD_CREATIONOPTIONLIST
   * @type {string}
   */
  export const DMD_CREATIONOPTIONLIST: string

  /**
   * @final
   * @property gdal.DMD_EXTENSION
   * @type {string}
   */
  export const DMD_EXTENSION: string

  /**
   * @final
   * @property gdal.DMD_HELPTOPIC
   * @type {string}
   */
  export const DMD_HELPTOPIC: string

  /**
   * @final
   * @property gdal.DMD_LONGNAME
   * @type {string}
   */
  export const DMD_LONGNAME: string

  /**
   * @final
   * @property gdal.DMD_MIMETYPE
   * @type {string}
   */
  export const DMD_MIMETYPE: string

  /**
   * @final
   * @property gdal.GCI_AlphaBand
   * @type {string}
   */
  export const GCI_AlphaBand: string

  /**
   * @final
   * @property gdal.GCI_BlackBand
   * @type {string}
   */
  export const GCI_BlackBand: string

  /**
   * @final
   * @property gdal.GCI_BlueBand
   * @type {string}
   */
  export const GCI_BlueBand: string

  /**
   * @final
   * @property gdal.GCI_CyanBand
   * @type {string}
   */
  export const GCI_CyanBand: string

  /**
   * @final
   * @property gdal.GCI_GrayIndex
   * @type {string}
   */
  export const GCI_GrayIndex: string

  /**
   * @final
   * @property gdal.GCI_GreenBand
   * @type {string}
   */
  export const GCI_GreenBand: string

  /**
   * @final
   * @property gdal.GCI_HueBand
   * @type {string}
   */
  export const GCI_HueBand: string

  /**
   * @final
   * @property gdal.GCI_LightnessBand
   * @type {string}
   */
  export const GCI_LightnessBand: string

  /**
   * @final
   * @property gdal.GCI_MagentaBand
   * @type {string}
   */
  export const GCI_MagentaBand: string

  /**
   * @final
   * @property gdal.GCI_PaletteIndex
   * @type {string}
   */
  export const GCI_PaletteIndex: string

  /**
   * @final
   * @property gdal.GCI_RedBand
   * @type {string}
   */
  export const GCI_RedBand: string

  /**
   * @final
   * @property gdal.GCI_SaturationBand
   * @type {string}
   */
  export const GCI_SaturationBand: string

  /**
   * @final
   * @property gdal.GCI_Undefined
   * @type {string}
   */
  export const GCI_Undefined: string

  /**
   * @final
   * @property gdal.GCI_YCbCr_CbBand
   * @type {string}
   */
  export const GCI_YCbCr_CbBand: string

  /**
   * @final
   * @property gdal.GCI_YCbCr_CrBand
   * @type {string}
   */
  export const GCI_YCbCr_CrBand: string

  /**
   * @final
   * @property gdal.GCI_YCbCr_YBand
   * @type {string}
   */
  export const GCI_YCbCr_YBand: string

  /**
   * @final
   * @property gdal.GCI_YellowBand
   * @type {string}
   */
  export const GCI_YellowBand: string

  /**
   * Eight bit unsigned integer
   * @final
   * @property gdal.GDT_Byte
   * @type {string}
   */
  export const GDT_Byte: string

  /**
   * Complex Float32
   * @final
   * @property gdal.GDT_CFloat32
   * @type {string}
   */
  export const GDT_CFloat32: string

  /**
   * Complex Float64
   * @final
   * @property gdal.GDT_CFloat64
   * @type {string}
   */
  export const GDT_CFloat64: string

  /**
   * Complex Int16
   * @final
   * @property gdal.GDT_CInt16
   * @type {string}
   */
  export const GDT_CInt16: string

  /**
   * Complex Int32
   * @final
   * @property gdal.GDT_CInt32
   * @type {string}
   */
  export const GDT_CInt32: string

  /**
   * Thirty two bit floating point
   * @final
   * @property gdal.GDT_Float32
   * @type {string}
   */
  export const GDT_Float32: string

  /**
   * Sixty four bit floating point
   * @final
   * @property gdal.GDT_Float64
   * @type {string}
   */
  export const GDT_Float64: string

  /**
   * Sixteen bit signed integer
   * @final
   * @property gdal.GDT_Int16
   * @type {string}
   */
  export const GDT_Int16: string

  /**
   * Thirty two bit signed integer
   * @final
   * @property gdal.GDT_Int32
   * @type {string}
   */
  export const GDT_Int32: string

  /**
   * Sixteen bit unsigned integer
   * @final
   * @property gdal.GDT_UInt16
   * @type {string}
   */
  export const GDT_UInt16: string

  /**
   * Thirty two bit unsigned integer
   * @final
   * @property gdal.GDT_UInt32
   * @type {string}
   */
  export const GDT_UInt32: string

  /**
   * Unknown or unspecified type
   * @final
   * @property gdal.GDT_Unknown
   * @type {string}
   */
  export const GDT_Unknown: string

  /**
   * String extended type for MDArrays (GDAL >= 3.1)
   * @final
   * @property gdal.GEDTC_Compound
   * @type {string}
   */
  export const GEDTC_Compound: string

  /**
   * String extended type for MDArrays (GDAL >= 3.1)
   * @final
   * @property gdal.GEDTC_String
   * @type {string}
   */
  export const GEDTC_String: string

  /**
   * CMYK
   * @final
   * @property gdal.GPI_CMYK
   * @type {string}
   */
  export const GPI_CMYK: string

  /**
   * Grayscale, only c1 defined
   * @final
   * @property gdal.GPI_Gray
   * @type {string}
   */
  export const GPI_Gray: string

  /**
   * HLS, c4 is not defined
   * @final
   * @property gdal.GPI_HLS
   * @type {string}
   */
  export const GPI_HLS: string

  /**
   * RGBA, alpha in c4
   * @final
   * @property gdal.GPI_RGB
   * @type {string}
   */
  export const GPI_RGB: string

  /**
   * @final
   * @property gdal.GRA_Average
   * @type {string}
   */
  export const GRA_Average: string

  /**
   * @final
   * @property gdal.GRA_Bilinear
   * @type {string}
   */
  export const GRA_Bilinear: string

  /**
   * @final
   * @property gdal.GRA_Cubic
   * @type {string}
   */
  export const GRA_Cubic: string

  /**
   * @final
   * @property gdal.GRA_CubicSpline
   * @type {string}
   */
  export const GRA_CubicSpline: string

  /**
   * @final
   * @property gdal.GRA_Lanczos
   * @type {string}
   */
  export const GRA_Lanczos: string

  /**
   * @final
   * @property gdal.GRA_Mode
   * @type {string}
   */
  export const GRA_Mode: string

  /**
   * @final
   * @property gdal.GRA_NearestNeighbor
   * @type {string}
   */
  export const GRA_NearestNeighbor: string

  /**
   * @final
   * @property gdal.ODrCCreateDataSource
   * @type {string}
   */
  export const ODrCCreateDataSource: string

  /**
   * @final
   * @property gdal.ODrCDeleteDataSource
   * @type {string}
   */
  export const ODrCDeleteDataSource: string

  /**
   * @final
   * @property gdal.ODsCCreateGeomFieldAfterCreateLayer
   * @type {string}
   */
  export const ODsCCreateGeomFieldAfterCreateLayer: string

  /**
   * @final
   * @property gdal.ODsCCreateLayer
   * @type {string}
   */
  export const ODsCCreateLayer: string

  /**
   * @final
   * @property gdal.ODsCDeleteLayer
   * @type {string}
   */
  export const ODsCDeleteLayer: string

  /**
   * @final
   * @property gdal.OFTBinary
   * @type {string}
   */
  export const OFTBinary: string

  /**
   * @final
   * @property gdal.OFTDate
   * @type {string}
   */
  export const OFTDate: string

  /**
   * @final
   * @property gdal.OFTDateTime
   * @type {string}
   */
  export const OFTDateTime: string

  /**
   * @final
   * @property gdal.OFTInteger
   * @type {string}
   */
  export const OFTInteger: string

  /**
   * @final
   * @property gdal.OFTInteger64
   * @type {string}
   */
  export const OFTInteger64: string

  /**
   * @final
   * @property gdal.OFTInteger64List
   * @type {string}
   */
  export const OFTInteger64List: string

  /**
   * @final
   * @property gdal.OFTIntegerList
   * @type {string}
   */
  export const OFTIntegerList: string

  /**
   * @final
   * @property gdal.OFTReal
   * @type {string}
   */
  export const OFTReal: string

  /**
   * @final
   * @property gdal.OFTRealList
   * @type {string}
   */
  export const OFTRealList: string

  /**
   * @final
   * @property gdal.OFTString
   * @type {string}
   */
  export const OFTString: string

  /**
   * @final
   * @property gdal.OFTStringList
   * @type {string}
   */
  export const OFTStringList: string

  /**
   * @final
   * @property gdal.OFTTime
   * @type {string}
   */
  export const OFTTime: string

  /**
   * @final
   * @property gdal.OFTWideString
   * @type {string}
   */
  export const OFTWideString: string

  /**
   * @final
   * @property gdal.OFTWideStringList
   * @type {string}
   */
  export const OFTWideStringList: string

  /**
   * @final
   * @property gdal.OJLeft
   * @type {string}
   */
  export const OJLeft: string

  /**
   * @final
   * @property gdal.OJRight
   * @type {string}
   */
  export const OJRight: string

  /**
   * @final
   * @property gdal.OJUndefined
   * @type {string}
   */
  export const OJUndefined: string

  /**
   * @final
   * @property gdal.OLCAlterFieldDefn
   * @type {string}
   */
  export const OLCAlterFieldDefn: string

  /**
   * @final
   * @property gdal.OLCCreateField
   * @type {string}
   */
  export const OLCCreateField: string

  /**
   * @final
   * @property gdal.OLCCreateGeomField
   * @type {string}
   */
  export const OLCCreateGeomField: string

  /**
   * @final
   * @property gdal.OLCDeleteFeature
   * @type {string}
   */
  export const OLCDeleteFeature: string

  /**
   * @final
   * @property gdal.OLCDeleteField
   * @type {string}
   */
  export const OLCDeleteField: string

  /**
   * @final
   * @property gdal.OLCFastFeatureCount
   * @type {string}
   */
  export const OLCFastFeatureCount: string

  /**
   * @final
   * @property gdal.OLCFastGetExtent
   * @type {string}
   */
  export const OLCFastGetExtent: string

  /**
   * @final
   * @property gdal.OLCFastSetNextByIndex
   * @type {string}
   */
  export const OLCFastSetNextByIndex: string

  /**
   * @final
   * @property gdal.OLCFastSpatialFilter
   * @type {string}
   */
  export const OLCFastSpatialFilter: string

  /**
   * @final
   * @property gdal.OLCIgnoreFields
   * @type {string}
   */
  export const OLCIgnoreFields: string

  /**
   * @final
   * @property gdal.OLCRandomRead
   * @type {string}
   */
  export const OLCRandomRead: string

  /**
   * @final
   * @property gdal.OLCRandomWrite
   * @type {string}
   */
  export const OLCRandomWrite: string

  /**
   * @final
   * @property gdal.OLCReorderFields
   * @type {string}
   */
  export const OLCReorderFields: string

  /**
   * @final
   * @property gdal.OLCSequentialWrite
   * @type {string}
   */
  export const OLCSequentialWrite: string

  /**
   * @final
   * @property gdal.OLCStringsAsUTF8
   * @type {string}
   */
  export const OLCStringsAsUTF8: string

  /**
   * @final
   * @property gdal.OLCTransactions
   * @type {string}
   */
  export const OLCTransactions: string

  /**
   * GDAL library - system library (false) or bundled (true)
   *
   * @final
   * @for gdal
   * @property gdal.bundled
   * @type {boolean}
   */
  export const bundled: boolean

  /**
   * The collection of all drivers registered with GDAL
   *
   * @final
   * @for gdal
   * @property gdal.drivers
   * @type {gdal.GDALDrivers}
   */
  export const drivers: GDALDrivers

  /**
   * Should a warning be emitted to stderr when a synchronous operation
   * is blocking the event loop, can be safely disabled unless
   * the user application needs to remain responsive at all times
   * Use `(gdal as any).eventLoopWarning = false` to set the value from TypeScript
   *
   * @for gdal
   * @property gdal.eventLoopWarning
   * @type {boolean}
   */
  export let eventLoopWarning: boolean

  /**
 * @attribute lastError
 * @type {object}
 */
  export let lastError: object

  /**
   * GDAL version (not the binding version)
   *
   * @final
   * @for gdal
   * @property gdal.version
   * @type {string}
   */
  export const version: string

  /**
   * @final
   *
   * The `wkb25DBit` constant can be used to convert between 2D types to 2.5D
   * types
   *
   * @example
   * ```
   * // 2 -> 2.5D
   * wkbPoint25D = gdal.wkbPoint | gdal.wkb25DBit
   *
   * // 2.5D -> 2D (same as wkbFlatten())
   * wkbPoint = gdal.wkbPoint25D & (~gdal.wkb25DBit)```
   *
   * @property gdal.wkb25DBit
   * @type {number}
   */
  export const wkb25DBit: number

  /**
   * @final
   * @property gdal.wkbCircularString
   * @type {number}
   */
  export const wkbCircularString: number

  /**
   * @final
   * @property gdal.wkbCompoundCurve
   * @type {number}
   */
  export const wkbCompoundCurve: number

  /**
   * @final
   * @property gdal.wkbGeometryCollection
   * @type {number}
   */
  export const wkbGeometryCollection: number

  /**
   * @final
   * @property gdal.wkbGeometryCollection25D
   * @type {number}
   */
  export const wkbGeometryCollection25D: number

  /**
   * @final
   * @property gdal.wkbLineString
   * @type {number}
   */
  export const wkbLineString: number

  /**
   * @final
   * @property gdal.wkbLineString25D
   * @type {number}
   */
  export const wkbLineString25D: number

  /**
   * @final
   * @property gdal.wkbLinearRing
   * @type {string}
   */
  export const wkbLinearRing: string

  /**
   * @final
   * @property gdal.wkbLinearRing25D
   * @type {number}
   */
  export const wkbLinearRing25D: number

  /**
   * @final
   * @property gdal.wkbMultiCurve
   * @type {number}
   */
  export const wkbMultiCurve: number

  /**
   * @final
   * @property gdal.wkbMultiLineString
   * @type {number}
   */
  export const wkbMultiLineString: number

  /**
   * @final
   * @property gdal.wkbMultiLineString25D
   * @type {number}
   */
  export const wkbMultiLineString25D: number

  /**
   * @final
   * @property gdal.wkbMultiPoint
   * @type {number}
   */
  export const wkbMultiPoint: number

  /**
   * @final
   * @property gdal.wkbMultiPoint25D
   * @type {number}
   */
  export const wkbMultiPoint25D: number

  /**
   * @final
   * @property gdal.wkbMultiPolygon
   * @type {number}
   */
  export const wkbMultiPolygon: number

  /**
   * @final
   * @property gdal.wkbMultiPolygon25D
   * @type {number}
   */
  export const wkbMultiPolygon25D: number

  /**
   * @final
   * @property gdal.wkbNDR
   * @type {string}
   */
  export const wkbNDR: string

  /**
   * @final
   * @property gdal.wkbNone
   * @type {number}
   */
  export const wkbNone: number

  /**
   * @final
   * @property gdal.wkbPoint
   * @type {number}
   */
  export const wkbPoint: number

  /**
   * @final
   * @property gdal.wkbPoint25D
   * @type {number}
   */
  export const wkbPoint25D: number

  /**
   * @final
   * @property gdal.wkbPolygon
   * @type {number}
   */
  export const wkbPolygon: number

  /**
   * @final
   * @property gdal.wkbPolygon25D
   * @type {number}
   */
  export const wkbPolygon25D: number

  /**
   * @final
   * @property gdal.wkbUnknown
   * @type {number}
   */
  export const wkbUnknown: number

  /**
   * SFSQL 1.2 and ISO SQL/MM Part 3 extended dimension (Z&M) WKB types.
   *
   * @final
   * @property gdal.wkbVariantIso
   * @type {string}
   */
  export const wkbVariantIso: string

  /**
   * Old-style 99-402 extended dimension (Z) WKB types.
   * Synonymous with 'wkbVariantOldOgc' (gdal >= 2.0)
   *
   * @final
   * @property gdal.wkbVariantOgc
   * @type {string}
   */
  export const wkbVariantOgc: string

  /**
   * Old-style 99-402 extended dimension (Z) WKB types.
   * Synonymous with 'wkbVariantOgc' (gdal < 2.0)
   *
   * @final
   * @property gdal.wkbVariantOldOgc
   * @type {string}
   */
  export const wkbVariantOldOgc: string

  /**
   * @final
   * @property gdal.wkbXDR
   * @type {string}
   */
  export const wkbXDR: string

  /**
 * Compute checksum for image region.
 *
 * @throws Error
 * @method checksumImage
 * @static
 * @for gdal
 * @param {gdal.RasterBand} src
 * @param {number} [x=0]
 * @param {number} [y=0]
 * @param {number} [w=src.width]
 * @param {number} [h=src.height]
 * @return {number}
 */
  export function checksumImage(src: RasterBand, x?: number, y?: number, w?: number, h?: number): number

  /**
 * Compute checksum for image region.
 *
 * @throws Error
 * @method checksumImageAsync
 * @static
 * @for gdal
 * @param {gdal.RasterBand} src
 * @param {number} [x=0]
 * @param {number} [y=0]
 * @param {number} [w=src.width]
 * @param {number} [h=src.height]
 * @param {callback<number>} [callback=undefined] {{{cb}}}
 * @return {number}
 * @return {Promise<number>}
 */
  export function checksumImageAsync(src: RasterBand, x?: number, y?: number, w?: number, h?: number, callback?: callback<number>): Promise<number>

  /**
 * Create vector contours from raster DEM.
 *
 * This algorithm will generate contour vectors for the input raster band on the
 * requested set of contour levels. The vector contours are written to the
 * passed in vector layer. Also, a NODATA value may be specified to identify
 * pixels that should not be considered in contour line generation.
 *
 * @throws Error
 * @method contourGenerate
 * @static
 * @for gdal
 * @param {ContourOptions} options
 * @param {gdal.RasterBand} options.src
 * @param {gdal.Layer} options.dst
 * @param {number} [options.offset=0] The "offset" relative to which contour intervals are applied. This is normally zero, but could be different. To generate 10m contours at 5, 15, 25, ... the offset would be 5.
 * @param {number} [options.interval=100] The elevation interval between contours generated.
 * @param {number[]} [options.fixedLevels] A list of fixed contour levels at which contours should be generated. Overrides interval/base options if set.
 * @param {number} [options.nodata] The value to use as a "nodata" value. That is, a pixel value which should be ignored in generating contours as if the value of the pixel were not known.
 * @param {number} [options.idField] A field index to indicate where a unique id should be written for each feature (contour) written.
 * @param {number} [options.elevField] A field index to indicate where the elevation value of the contour should be written.
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
*/
  export function contourGenerate(options: ContourOptions): void

  /**
 * Create vector contours from raster DEM.
 * {{{async}}}
 *
 * This algorithm will generate contour vectors for the input raster band on the
 * requested set of contour levels. The vector contours are written to the
 * passed in vector layer. Also, a NODATA value may be specified to identify
 * pixels that should not be considered in contour line generation.
 *
 * @throws Error
 * @method contourGenerateAsync
 * @static
 * @for gdal
 * @param {ContourOptions} options
 * @param {gdal.RasterBand} options.src
 * @param {gdal.Layer} options.dst
 * @param {number} [options.offset=0] The "offset" relative to which contour intervals are applied. This is normally zero, but could be different. To generate 10m contours at 5, 15, 25, ... the offset would be 5.
 * @param {number} [options.interval=100] The elevation interval between contours generated.
 * @param {number[]} [options.fixedLevels] A list of fixed contour levels at which contours should be generated. Overrides interval/base options if set.
 * @param {number} [options.nodata] The value to use as a "nodata" value. That is, a pixel value which should be ignored in generating contours as if the value of the pixel were not known.
 * @param {number} [options.idField] A field index to indicate where a unique id should be written for each feature (contour) written.
 * @param {number} [options.elevField] A field index to indicate where the elevation value of the contour should be written.
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  export function contourGenerateAsync(options: ContourOptions, callback?: callback<void>): Promise<void>

  /**
 * Convert decimal degrees to degrees, minutes, and seconds string
 *
 * @for gdal
 * @static
 * @method decToDMS
 * @param {number} angle
 * @param {string} axis `"lat"` or `"long"`
 * @param {number} [precision=2]
 * @return {string} A string nndnn'nn.nn'"L where n is a number and L is either
 * N or E
 */
  export function decToDMS(angle: number, axis: string, precision?: number): string

  /**
 * Fill raster regions by interpolation from edges.
 *
 * @throws Error
 * @method fillNodata
 * @static
 * @for gdal
 * @param {FillOptions} options
 * @param {gdal.RasterBand} options.src This band to be updated in-place.
 * @param {gdal.RasterBand} [options.mask] Mask band
 * @param {number} options.searchDist The maximum distance (in pixels) that the algorithm will search out for values to interpolate.
 * @param {number} [options.smoothingIterations=0] The number of 3x3 average filter smoothing iterations to run after the interpolation to dampen artifacts.
 */
  export function fillNodata(options: FillOptions): void

  /**
 * Fill raster regions by interpolation from edges.
 * {{{async}}}
 *
 * @throws Error
 * @method fillNodataAsync
 * @static
 * @for gdal
 * @param {FillOptions} options
 * @param {gdal.RasterBand} options.src This band to be updated in-place.
 * @param {gdal.RasterBand} [options.mask] Mask band
 * @param {number} options.searchDist The maximum distance (in pixels) that the algorithm will search out for values to interpolate.
 * @param {number} [options.smoothingIterations=0] The number of 3x3 average filter smoothing iterations to run after the interpolation to dampen artifacts.
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  export function fillNodataAsync(options: FillOptions, callback?: callback<void>): Promise<void>

  /**
 * Library version of gdalinfo.
 *
 * @example
 * const ds = gdal.open('input.tif')
 * const output = gdal.info('/vsimem/temp.tif')
 *
 * @throws Error
 * @method info
 * @for gdal
 * @static
 * @param {gdal.Dataset} dataset
 * @param {string[]} [args] array of CLI options for gdalinfo
 * @return {string}
 */
  export function info(dataset: Dataset, args?: string[]): string

  /**
 * Library version of gdalinfo.
 * {{{async}}}
 *
 * @example
 * const ds = gdal.open('input.tif')
 * const output = gdal.info('/vsimem/temp.tif')
 * @throws Error
 *
 * @method infoAsync
 * @for gdal
 * @static
 * @param {gdal.Dataset} dataset
 * @param {string[]} [args] array of CLI options for gdalinfo
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<string>}
 */
  export function infoAsync(dataset: Dataset, args?: string[], callback?: callback<void>): Promise<string>

  /**
 * Creates or opens a dataset. Dataset should be explicitly closed with `dataset.close()` method if opened in `"w"` mode to flush any changes. Otherwise, datasets are closed when (and if) node decides to garbage collect them.
 *
 * @example
 * ```
 * var dataset = gdal.open('./data.shp');```
 *
 * @example
 * ```
 * var dataset = gdal.open(fs.readFileSync('./data.shp'));```
 *
 * @for gdal
 * @throws Error
 * @method open
 * @static
 * @param {string|Buffer} path Path to dataset or in-memory Buffer to open
 * @param {string} [mode="r"] The mode to use to open the file: `"r"`, `"r+"`, or `"w"`
 * @param {string|string[]} [drivers] Driver name, or list of driver names to attempt to use.
 *
 * @param {number} [x_size] Used when creating a raster dataset with the `"w"` mode.
 * @param {number} [y_size] Used when creating a raster dataset with the `"w"` mode.
 * @param {number} [band_count] Used when creating a raster dataset with the `"w"` mode.
 * @param {string} [data_type] Used when creating a raster dataset with the `"w"` mode.
 * @param {string[]|object} [creation_options] Used when creating a dataset with the `"w"` mode.
 *
 * @return {Dataset}
 */
  export function open(path: string|Buffer, mode?: string, drivers?: string|string[], x_size?: number, y_size?: number, band_count?: number, data_type?: string, creation_options?: string[]|object): Dataset

  /**
 * TypeScript shorthand version with callback and no optional arguments
 *
 * @for gdal
 * @method openAsync
 * @static
 * @param {string|Buffer} path Path to dataset or in-memory Buffer to open
 * @param {callback<void>} callback {{{cb}}}
 * @return {void}
 */
  export function openAsync(path: string|Buffer, callback: callback<void>): void

  /**
 * Asynchronously creates or opens a dataset. Dataset should be explicitly closed with `dataset.close()` method if opened in `"w"` mode to flush any changes. Otherwise, datasets are closed when (and if) node decides to garbage collect them.
 * If the last parameter is a callback, then this callback is called on completion and undefined is returned. Otherwise the function returns a Promise resolved with the result.
 *
 * @example
 * ```
 * var dataset = await gdal.openAsync('./data.shp');```
 *
 * @example
 * ```
 * var dataset = await gdal.openAsync(await fd.readFile('./data.shp'));```
 *
 * @example
 * ```
 * gdal.openAsync('./data.shp', (err, ds) => {...});```
 *
 * @for gdal
 * @method openAsync
 * @static
 * @param {string|Buffer} path Path to dataset or in-memory Buffer to open
 * @param {string} [mode="r"] The mode to use to open the file: `"r"`, `"r+"`, or `"w"`
 * @param {string|string[]} [drivers] Driver name, or list of driver names to attempt to use.
 *
 * @param {number} [x_size] Used when creating a raster dataset with the `"w"` mode.
 * @param {number} [y_size] Used when creating a raster dataset with the `"w"` mode.
 * @param {number} [band_count] Used when creating a raster dataset with the `"w"` mode.
 * @param {string} [data_type] Used when creating a raster dataset with the `"w"` mode.
 * @param {string[]|object} [creation_options] Used when creating a dataset with the `"w"` mode.
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<Dataset>}
 *
 */
  export function openAsync(path: string|Buffer, mode?: string, drivers?: string|string[], x_size?: number, y_size?: number, band_count?: number, data_type?: string, creation_options?: string[]|object, callback?: callback<void>): Promise<Dataset>

  /**
 * Creates vector polygons for all connected regions of pixels in the raster
 * sharing a common pixel value. Each polygon is created with an attribute
 * indicating the pixel value of that polygon. A raster mask may also be
 * provided to determine which pixels are eligible for processing.
 *
 * @throws Error
 * @method polygonize
 * @static
 * @for gdal
 * @param {PolygonizeOptions} options
 * @param {gdal.RasterBand} options.src
 * @param {gdal.Layer} options.dst
 * @param {gdal.RasterBand} [options.mask]
 * @param {number} options.pixValField The attribute field index indicating the feature attribute into which the pixel value of the polygon should be written.
 * @param {number} [options.connectedness=4] Either 4 indicating that diagonal pixels are not considered directly adjacent for polygon membership purposes or 8 indicating they are.
 * @param {boolean} [options.useFloats=false] Use floating point buffers instead of int buffers.
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 */
  export function polygonize(options: PolygonizeOptions): void

  /**
 * Creates vector polygons for all connected regions of pixels in the raster
 * sharing a common pixel value. Each polygon is created with an attribute
 * indicating the pixel value of that polygon. A raster mask may also be
 * provided to determine which pixels are eligible for processing.
 *
 * @throws Error
 * @method polygonizeAsync
 * @static
 * @for gdal
 * @param {PolygonizeOptions} options
 * @param {gdal.RasterBand} options.src
 * @param {gdal.Layer} options.dst
 * @param {gdal.RasterBand} [options.mask]
 * @param {number} options.pixValField The attribute field index indicating the feature attribute into which the pixel value of the polygon should be written.
 * @param {number} [options.connectedness=4] Either 4 indicating that diagonal pixels are not considered directly adjacent for polygon membership purposes or 8 indicating they are.
 * @param {boolean} [options.useFloats=false] Use floating point buffers instead of int buffers.
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  export function polygonizeAsync(options: PolygonizeOptions, callback?: callback<void>): Promise<void>

  /**
   * Disables all output.
   *
   * @for gdal
   * @static
   * @method quiet
   */
  export function quiet(): void

  /**
 * Reprojects a dataset.
 *
 * @throws Error
 * @method reprojectImage
 * @static
 * @for gdal
 * @param {ReprojectOptions} options
 * @param {gdal.Dataset} options.src
 * @param {gdal.Dataset} options.dst
 * @param {gdal.SpatialReference} options.s_srs
 * @param {gdal.SpatialReference} options.t_srs
 * @param {string} [options.resampling] Resampling algorithm ({{#crossLink "Constants (GRA)"}}available options{{/crossLink}})
 * @param {gdal.Geometry} [options.cutline] Must be in src dataset pixel coordinates. Use CoordinateTransformation to convert between georeferenced coordinates and pixel coordinates
 * @param {number[]} [options.srcBands]
 * @param {number[]} [options.dstBands]
 * @param {number} [options.srcAlphaBand]
 * @param {number} [options.dstAlphaBand]
 * @param {number} [options.srcNodata]
 * @param {number} [options.dstNodata]
 * @param {number} [options.memoryLimit]
 * @param {number} [options.maxError]
 * @param {boolean} [options.multi]
 * @param {string[]|object} [options.options] Warp options (see: [reference](https://gdal.org/doxygen/structGDALWarpOptions.html))
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 */
  export function reprojectImage(options: ReprojectOptions): void

  /**
 * Reprojects a dataset.
 * {{{async}}}
 *
 * @throws Error
 * @method reprojectImageAsync
 * @static
 * @for gdal
 * @param {ReprojectOptions} options
 * @param {gdal.Dataset} options.src
 * @param {gdal.Dataset} options.dst
 * @param {gdal.SpatialReference} options.s_srs
 * @param {gdal.SpatialReference} options.t_srs
 * @param {string} [options.resampling] Resampling algorithm ({{#crossLink "Constants (GRA)"}}available options{{/crossLink}})
 * @param {gdal.Geometry} [options.cutline] Must be in src dataset pixel coordinates. Use CoordinateTransformation to convert between georeferenced coordinates and pixel coordinates
 * @param {number[]} [options.srcBands]
 * @param {number[]} [options.dstBands]
 * @param {number} [options.srcAlphaBand]
 * @param {number} [options.dstAlphaBand]
 * @param {number} [options.srcNodata]
 * @param {number} [options.dstNodata]
 * @param {number} [options.memoryLimit]
 * @param {number} [options.maxError]
 * @param {boolean} [options.multi]
 * @param {string[]|object} [options.options] Warp options (see:[reference](https://gdal.org/doxygen/structGDALWarpOptions.html)
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  export function reprojectImageAsync(options: ReprojectOptions, callback?: callback<void>): Promise<void>

  /**
 * Set paths where proj will search it data.
 *
 * @for gdal
 * @static
 * @method setPROJSearchPaths
 * @param {string} Path `c:\ProjData`
 */
  export function setPROJSearchPaths(Path: string): void

  /**
 * Removes small raster polygons.
 *
 * @throws Error
 * @method sieveFilter
 * @static
 * @for gdal
 * @param {SieveOptions} options
 * @param {gdal.RasterBand} options.src
 * @param {gdal.RasterBand} options.dst Output raster band. It may be the same as src band to update the source in place.
 * @param {gdal.RasterBand} [options.mask] All pixels in the mask band with a value other than zero will be considered suitable for inclusion in polygons.
 * @param {number} options.threshold Raster polygons with sizes smaller than this will be merged into their largest neighbour.
 * @param {number} [options.connectedness=4] Either 4 indicating that diagonal pixels are not considered directly adjacent for polygon membership purposes or 8 indicating they are.
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 */
  export function sieveFilter(options: SieveOptions): void

  /**
 * Removes small raster polygons.
 * {{{async}}}
 *
 * @throws Error
 * @method sieveFilterAsync
 * @static
 * @for gdal
 * @param {SieveOptions} options
 * @param {gdal.RasterBand} options.src
 * @param {gdal.RasterBand} options.dst Output raster band. It may be the same as src band to update the source in place.
 * @param {gdal.RasterBand} [options.mask] All pixels in the mask band with a value other than zero will be considered suitable for inclusion in polygons.
 * @param {number} options.threshold Raster polygons with sizes smaller than this will be merged into their largest neighbour.
 * @param {number} [options.connectedness=4] Either 4 indicating that diagonal pixels are not considered directly adjacent for polygon membership purposes or 8 indicating they are.
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  export function sieveFilterAsync(options: SieveOptions, callback?: callback<void>): Promise<void>

  /**
 * Used to determine the bounds and resolution of the output virtual file which
 * should be large enough to include all the input image.
 *
 * @throws Error
 * @method suggestedWarpOutput
 * @static
 * @for gdal
 * @param {WarpOptions} options Warp options
 * @param {gdal.Dataset} options.src
 * @param {gdal.SpatialReference} options.s_srs
 * @param {gdal.SpatialReference} options.t_srs
 * @param {number} [options.maxError=0]
 * @return {WarpOutput} An object containing `"rasterSize"` and `"geoTransform"`
 * properties.
 */
  export function suggestedWarpOutput(options: WarpOptions): WarpOutput

  /**
 * Used to determine the bounds and resolution of the output virtual file which
 * should be large enough to include all the input image.
 * {{{async}}}
 *
 * @throws Error
 * @method suggestedWarpOutputAsync
 * @static
 * @for gdal
 * @param {WarpOptions} options Warp options
 * @param {gdal.Dataset} options.src
 * @param {gdal.SpatialReference} options.s_srs
 * @param {gdal.SpatialReference} options.t_srs
 * @param {number} [options.maxError=0]
 * @param {callback<WarpOutput>} [callback=undefined] {{{cb}}}
 * @return {Promise<WarpOutput>}
 */
  export function suggestedWarpOutputAsync(options: WarpOptions, callback?: callback<WarpOutput>): Promise<WarpOutput>

  /**
 * Library version of gdal_translate.
 *
 * @example
 * const ds = gdal.open('input.tif')
 * const out = gdal.translate('/vsimem/temp.tif', ds, [ '-b', '1' ])
 *
 * @throws Error
 * @method translate
 * @for gdal
 * @static
 * @param {string} destination destination filename
 * @param {gdal.Dataset} source source dataset
 * @param {string[]} [args] array of CLI options for gdal_translate
 * @param {UtilOptions} [options] additional options
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 * @return {gdal.Dataset}
 */
  export function translate(destination: string, source: Dataset, args?: string[], options?: UtilOptions): Dataset

  /**
 * Library version of gdal_translate.
 * {{{async}}}
 *
 * @example
 * const ds = gdal.open('input.tif')
 * const out = gdal.translate('/vsimem/temp.tif', ds, [ '-b', '1' ])
 * @throws Error
 *
 * @method translateAsync
 * @for gdal
 * @static
 * @param {string} destination destination filename
 * @param {gdal.Dataset} source source dataset
 * @param {string[]} [args] array of CLI options for gdal_translate
 * @param {UtilOptions} [options] additional options
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Dataset>}
 */
  export function translateAsync(destination: string, source: Dataset, args?: string[], options?: UtilOptions, callback?: callback<void>): Promise<Dataset>

  /**
 * Library version of ogr2ogr.
 *
 * @example
 * const ds = gdal.open('input.geojson')
 * const out = gdal.vectorTranslate('/vsimem/temp.gpkg', [ '-of', 'GPKG' ], ds)
 *
 * @throws Error
 * @method vectorTranslate
 * @for gdal
 * @static
 * @param {string|gdal.Dataset} destination destination
 * @param {gdal.Dataset} source source dataset
 * @param {string[]} [args] array of CLI options for ogr2ogr
 * @param {UtilOptions} [options] additional options
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 * @return {gdal.Dataset}
 */
  export function vectorTranslate(destination: string|Dataset, source: Dataset, args?: string[], options?: UtilOptions): Dataset

  /**
 * Library version of ogr2ogr.
 * {{{async}}}
 *
 * @example
 * const ds = gdal.open('input.geojson')
 * const out = gdal.vectorTranslate('/vsimem/temp.gpkg', [ '-of', 'GPKG' ], ds)
 * @throws Error
 *
 * @method vectorTranslateAsync
 * @for gdal
 * @static
 * @param {string|gdal.Dataset} destination destination
 * @param {gdal.Dataset} source source dataset
 * @param {string[]} [args] array of CLI options for ogr2ogr
 * @param {UtilOptions} [options] additional options
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Dataset>}
 */
  export function vectorTranslateAsync(destination: string|Dataset, source: Dataset, args?: string[], options?: UtilOptions, callback?: callback<void>): Promise<Dataset>

  /**
   * Displays extra debugging information from GDAL.
   *
   * @for gdal
   * @static
   * @method verbose
   */
  export function verbose(): void

  /**
 * Library version of gdalwarp.
 *
 * @example
 * const ds = gdal.open('input.tif')
 * const output = gdal.warp('/vsimem/temp.tif')
 *
 * @throws Error
 * @method warp
 * @for gdal
 * @static
 * @param {string} [dst_path] destination path, null for an in-memory operation
 * @param {gdal.Dataset} [dst_ds] destination dataset, null for a new dataset
 * @param {gdal.Dataset[]} src_ds array of source datasets
 * @param {string[]} [args] array of CLI options for gdalwarp
 * @param {UtilOptions} [options] additional options
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 * @return {gdal.Dataset}
 */
  export function warp(dst_path?: string, dst_ds?: Dataset, src_ds: Dataset[], args?: string[], options?: UtilOptions): Dataset

  /**
 * Library version of gdalinfo.
 * {{{async}}}
 *
 * @example
 * const ds = gdal.open('input.tif')
 * const output = gdal.warp('/vsimem/temp.tif')
 * @throws Error
 *
 * @method warpAsync
 * @for gdal
 * @static
 * @param {string} [dst_path] destination path, null for an in-memory operation
 * @param {gdal.Dataset} [dst_ds] destination dataset, null for a new dataset
 * @param {gdal.Dataset[]} src_ds array of source datasets
 * @param {string[]} [args] array of CLI options for gdalwarp
 * @param {UtilOptions} [options] additional options
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Dataset>}
 */
  export function warpAsync(dst_path?: string, dst_ds?: Dataset, src_ds: Dataset[], args?: string[], options?: UtilOptions, callback?: callback<void>): Promise<Dataset>
export class ArrayAttributes implements Iterable<Attribute>, AsyncIterable<Attribute> {
/**
 * An encapsulation of a {{#crossLink "gdal.Group"}}Array{{/crossLink}}'s
 * descendant attributes.
 *
 * @class gdal.ArrayAttributes
 */
  constructor()

  /**
 * @readOnly
 * @attribute names
 * @type {string[]}
 */
  readonly names: string[]

  /**
 * Parent dataset
 *
 * @readOnly
 * @attribute ds
 * @type {gdal.Dataset}
 */
  readonly ds: Dataset
  [Symbol.iterator](): Iterator<Attribute>
  [Symbol.asyncIterator](): AsyncIterator<Attribute>

  /**
 * Returns the attribute with the given name/index.
 *
 * @method get
 * @param {string|number} attribute
 * @return {gdal.Attribute}
 */
  get(attribute: string|number): Attribute

  /**
 * Returns the attribute with the given name/index.
 * {{{async}}}
 *
 * @method getAsync
 *
 * @param {string|number} attribute
 * @param {callback<gdal.Attribute>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Attribute>}
 */
  getAsync(attribute: string|number, callback?: callback<Attribute>): Promise<Attribute>

  /**
 * Returns the number of attributes in the collection.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Returns the number of attributes in the collection.
 * {{{async}}}
 *
 * @method countAsync
 *
 * @param {callback<number>} [callback=undefined] {{{cb}}}
 * @return {Promise<number>}
 */
  countAsync(callback?: callback<number>): Promise<number>

  /**
 * Iterates through all attributes using a callback function.
 *
 * @example
 * ```
 * array.attributes.forEach(function(array, i) { ... });```
 *
 * @for gdal.ArrayAttributes
 * @method forEach
 * @param {forEachCb<gdal.Attribute>} callback The callback to be called with each {{#crossLink "Attribute"}}Attribute{{/crossLink}}
 */
  forEach(callback: forEachCb<Attribute>): void

  /**
 * Iterates through attributes using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = array.attributes.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.ArrayAttributes
 * @method map<U>
 * @param {mapCb<gdal.Attribute,U>} callback The callback to be called with each {{#crossLink "Attribute"}}Attribute{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<Attribute,U>): U[]
}

export class ArrayDimensions implements Iterable<Dimension>, AsyncIterable<Dimension> {
/**
 * An encapsulation of a {{#crossLink "gdal.Group"}}Group{{/crossLink}}'s
 * descendant dimensions.
 *
 * ```
 * const dimensions = group.dimensions;```
 *
 * @class gdal.ArrayDimensions
 */
  constructor()

  /**
 * @readOnly
 * @attribute names
 * @type {string[]}
 */
  readonly names: string[]

  /**
 * Parent group
 *
 * @readOnly
 * @attribute ds
 * @type {gdal.Group}
 */
  readonly ds: Group
  [Symbol.iterator](): Iterator<Dimension>
  [Symbol.asyncIterator](): AsyncIterator<Dimension>

  /**
 * Returns the array with the given name/index.
 *
 * @method get
 * @param {string|number} array
 * @return {gdal.Dimension}
 */
  get(array: string|number): Dimension

  /**
 * Returns the array with the given name/index.
 * {{{async}}}
 *
 * @method getAsync
 *
 * @param {string|number} array
 * @param {callback<gdal.Dimension>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Dimension>}
 */
  getAsync(array: string|number, callback?: callback<Dimension>): Promise<Dimension>

  /**
 * Returns the number of dimensions in the collection.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Returns the number of dimensions in the collection.
 * {{{async}}}
 *
 * @method countAsync
 *
 * @param {callback<number>} [callback=undefined] {{{cb}}}
 * @return {Promise<number>}
 */
  countAsync(callback?: callback<number>): Promise<number>

  /**
 * Iterates through all dimensions using a callback function.
 *
 * @example
 * ```
 * array.dimensions.forEach(function(array, i) { ... });```
 *
 * @for gdal.ArrayDimensions
 * @method forEach
 * @param {forEachCb<gdal.Dimension>} callback The callback to be called with each {{#crossLink "Dimension"}}Dimension{{/crossLink}}
 */
  forEach(callback: forEachCb<Dimension>): void

  /**
 * Iterates through dimensions using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = array.dimensions.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.ArrayDimensions
 * @method map<U>
 * @param {mapCb<gdal.Dimension,U>} callback The callback to be called with each {{#crossLink "Dimension"}}Dimension{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<Dimension,U>): U[]
}

export class Attribute {
/**
 * A representation of a group with access methods.
 *
 * @class gdal.Attribute
 */
  constructor()

  /**
 * Complex GDAL data types introduced in 3.1 are not yet supported
 * @readOnly
 * @attribute value
 * @throws Error
 * @type {string|number}
 */
  readonly value: string|number

  /**
 * @readOnly
 * @attribute dataType
 * @type {string}
 */
  readonly dataType: string
}

export class CircularString extends SimpleCurve {
/**
 * Concrete representation of an arc.
 *
 * @example
 * ```
 * var CircularString = new gdal.CircularString();
 * CircularString.points.add(new gdal.Point(0,0));
 * CircularString.points.add(new gdal.Point(0,10));```
 *
 * @constructor
 * @class gdal.CircularString
 * @extends gdal.SimpleCurve
 */
  constructor()
}

export class ColorTable implements Iterable<Color> {
/**
 * An encapsulation of a {{#crossLink "gdal.RasterBand"}}RasterBand{{/crossLink}}'s
 * color table.
 *
 * ```
 * var colorTable = band.colorTable;
 *
 * band.colorTable = new gdal.ColorTable(gdal.GPI_RGB);
 * ```
 *
 * @class gdal.ColorTable
 * @param {string} interpretation palette interpretation
 */
  constructor(interpretation: string)

  /**
 * Color interpretation of the palette
 *
 * @readOnly
 * @attribute interpretation
 * @type {string}
 */
  readonly interpretation: string

  /**
 * Parent band
 *
 * @readOnly
 * @attribute band
 * @type {gdal.RasterBand|undefined}
 */
  readonly band: RasterBand|undefined
  [Symbol.iterator](): Iterator<Color>

  /**
 * Clones the instance.
 * The newly created ColorTable is not owned by any RasterBand.
 *
 * @method clone
 * @return {gdal.ColorTable}
 */
  clone(): ColorTable

  /**
 * Compares two ColorTable objects for equality
 *
 * @method isSame
 * @param {gdal.ColorTable} other
 * @throws Error
 * @return {boolean}
 */
  isSame(other: ColorTable): boolean

  /**
 * Returns the color with the given ID.
 *
 * @method get
 * @param {number} index
 * @throws Error
 * @return {Color}
 */
  get(index: number): Color

  /**
 * Sets the color entry with the given ID.
 *
 * @method set
 * @throws Error
 * @param {number} index
 * @param {Color} color
 * @return {void}
 */
  set(index: number, color: Color): void

  /**
 * Creates a color ramp from one color entry to another.
 *
 * @method ramp
 * @throws Error
 * @param {number} start_index
 * @param {Color} start_color
 * @param {number} end_index
 * @param {Color} end_color
 * @return {number} total number of color entries
 */
  ramp(start_index: number, start_color: Color, end_index: number, end_color: Color): number

  /**
 * Returns the number of color entries.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Iterates through all color entries using a callback function.
 *
 * @example
 * ```
 * band.colorTable.forEach(function(array, i) { ... });```
 *
 * @for gdal.ColorTable
 * @method forEach
 * @param {forEachCb<gdal.Color>} callback The callback to be called with each {{#crossLink "Color"}}Color{{/crossLink}}
 */
  forEach(callback: forEachCb<Color>): void

  /**
 * Iterates through color entries using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = band.colorTable.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.ColorTable
 * @method map<U>
 * @param {mapCb<gdal.Color,U>} callback The callback to be called with each {{#crossLink "Color"}}Color{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<Color,U>): U[]
}

export class CompoundCurve extends Geometry {
/**
 * Concrete representation of a compound contionuos curve.
 *
 * @example
 * ```
 * var CompoundCurve = new gdal.CompoundCurve();
 * CompoundCurve.points.add(new gdal.Point(0,0));
 * CompoundCurve.points.add(new gdal.Point(0,10));```
 *
 * @constructor
 * @class gdal.CompoundCurve
 * @extends gdal.Geometry
 */
  constructor()

  /**
 * Points that make up the compound curve.
 *
 * @attribute curves
 * @type {gdal.CompoundCurveCurves}
 */
  curves: CompoundCurveCurves
}

export class CompoundCurveCurves implements Iterable<SimpleCurve>, AsyncIterable<SimpleCurve> {
/**
 * A collection of connected curves, used by {{#crossLink
 * "gdal.CompoundCurve"}}gdal.CompoundCurve{{/crossLink}}.
 *
 * @class gdal.CompoundCurveCurves
 */
  constructor()
  [Symbol.iterator](): Iterator<SimpleCurve>
  [Symbol.asyncIterator](): AsyncIterator<SimpleCurve>

  /**
 * Returns the number of curves that exist in the collection.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Returns the curve at the specified index.
 *
 * @example
 * ```
 * var curve0 = compound.curves.get(0);
 * var curve1 = compound.curves.get(1);```
 *
 * @method get
 * @param {number} index
 * @throws Error
 * @return {gdal.CompoundCurve|gdal.SimpleCurve}
 */
  get(index: number): CompoundCurve|SimpleCurve

  /**
 * Adds a curve to the collection.
 *
 * @example
 * ```
 * var ring1 = new gdal.CircularString();
 * ring1.points.add(0,0);
 * ring1.points.add(1,0);
 * ring1.points.add(1,1);
 * ring1.points.add(0,1);
 * ring1.points.add(0,0);
 *
 * // one at a time:
 * compound.curves.add(ring1);
 *
 * // many at once:
 * compound.curves.add([ring1, ...]);```
 *
 * @method add
 * @param {gdal.SimpleCurve|gdal.SimpleCurve[]} curves
 */
  add(curves: SimpleCurve|SimpleCurve[]): void

  /**
 * Iterates through all curves using a callback function.
 *
 * @example
 * ```
 * compoundCurves.curves.forEach(function(array, i) { ... });```
 *
 * @for gdal.CompoundCurveCurves
 * @method forEach
 * @param {forEachCb<gdal.SimpleCurve>} callback The callback to be called with each {{#crossLink "SimpleCurve"}}SimpleCurve{{/crossLink}}
 */
  forEach(callback: forEachCb<SimpleCurve>): void

  /**
 * Iterates through curves using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = compoundCurves.curves.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.CompoundCurveCurves
 * @method map<U>
 * @param {mapCb<gdal.SimpleCurve,U>} callback The callback to be called with each {{#crossLink "SimpleCurve"}}SimpleCurve{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<SimpleCurve,U>): U[]

  /**
 * Outputs all curves as a regular javascript array.
 *
 * @for gdal.CompoundCurveCurves
 * @method toArray
 * @return {gdal.SimpleCurve[]} List of {{#crossLink "SimpleCurve"}}SimpleCurve{{/crossLink}} instances.
 */
  toArray(): SimpleCurve[]
}

export class CoordinateTransformation {
/**
 * Object for transforming between coordinate systems.
 *
 * @throws Error
 * @constructor
 * @class gdal.CoordinateTransformation
 * @param {gdal.SpatialReference} source
 * @param {gdal.SpatialReference|gdal.Dataset} target If a raster Dataset, the
 * conversion will represent a conversion to pixel coordinates.
 */
  constructor(source: SpatialReference, target: SpatialReference|Dataset)

  /**
 * Transform point from source to destination space.
 *
 * @example
 * ```
 * pt = transform.transformPoint(0, 0, 0);
 *
 * @method transformPoint
 * @param {number} x
 * @param {number} y
 * @param {number} [z]
 * @return {xyz} A regular object containing `x`, `y`, `z` properties.
 */
  transformPoint(x: number, y: number, z?: number): xyz

  /**
 * Transform point from source to destination space.
 *
 * @example
 * ```
 * pt = transform.transformPoint({x: 0, y: 0, z: 0});```
 *
 * @method transformPoint
 * @param {xyz} point
 * @return {xyz} A regular object containing `x`, `y`, `z` properties.
 */
  transformPoint(point: xyz): xyz
}

export class Dataset {
/**
 * A set of associated raster bands and/or vector layers, usually from one file.
 *
 * ```
 * // raster dataset:
 * dataset = gdal.open('file.tif');
 * bands = dataset.bands;
 *
 * // vector dataset:
 * dataset = gdal.open('file.shp');
 * layers = dataset.layers;```
 *
 * @class gdal.Dataset
 */
  constructor()

  /**
 * @readOnly
 * @attribute description
 * @type {string}
 */
  readonly description: string

  /**
 * Raster dimensions. An object containing `x` and `y` properties.
 *
 * @readOnly
 * @attribute rasterSize
 * @type {xyz}
 */
  readonly rasterSize: xyz

  /**
 * Raster dimensions. An object containing `x` and `y` properties.
 * {{async_getter}}
 *
 * @readOnly
 * @attribute rasterSizeAsync
 * @type {Promise<xyz>}
 */
  readonly rasterSizeAsync: Promise<xyz>

  /**
 * Spatial reference associated with raster dataset
 *
 * @throws Error
 * @attribute srs
 * @type {gdal.SpatialReference}
 */
  srs: SpatialReference

  /**
 * Spatial reference associated with raster dataset
 * {{async_getter}}
 *
 * @throws Error
 * @attribute srsAsync
 * @readOnly
 * @type {Promise<gdal.SpatialReference>}
 */
  readonly srsAsync: Promise<SpatialReference>

  /**
 * An affine transform which maps pixel/line coordinates into georeferenced
 * space using the following relationship:
 *
 * @example
 * ```
 * var GT = dataset.geoTransform;
 * var Xgeo = GT[0] + Xpixel*GT[1] + Yline*GT[2];
 * var Ygeo = GT[3] + Xpixel*GT[4] + Yline*GT[5];```
 *
 * @attribute geoTransform
 * @type {number[]}
 */
  geoTransform: number[]

  /**
 * An affine transform which maps pixel/line coordinates into georeferenced
 * space using the following relationship:
 *
 * @example
 * ```
 * var GT = dataset.geoTransform;
 * var Xgeo = GT[0] + Xpixel*GT[1] + Yline*GT[2];
 * var Ygeo = GT[3] + Xpixel*GT[4] + Yline*GT[5];```
 *
 * {{async_getter}}
 * @readOnly
 * @attribute geoTransformAsync
 * @type {Promise<number[]>}
 */
  readonly geoTransformAsync: Promise<number[]>

  /**
 * @readOnly
 * @attribute driver
 * @type {gdal.Driver}
 */
  readonly driver: Driver

  /**
 * @readOnly
 * @attribute bands
 * @type {gdal.DatasetBands}
 */
  readonly bands: DatasetBands

  /**
 * @readOnly
 * @attribute layers
 * @type {gdal.DatasetLayers}
 */
  readonly layers: DatasetLayers

  /**
 * @readOnly
 * @attribute root
 * @type {gdal.Group}
 */
  readonly root: Group

  /**
 * Fetch metadata.
 *
 * @method getMetadata
 * @param {string} [domain]
 * @return {any}
 */
  getMetadata(domain?: string): any

  /**
 * Fetch metadata.
 * {{{async}}}
 *
 * @method getMetadataAsync
 * @param {string} [domain]
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<any>}
 */
  getMetadataAsync(domain?: string, callback?: callback<void>): Promise<any>

  /**
 * Set metadata. Can return a warning (false) for formats not supporting persistent metadata.
 *
 * @method setMetadata
 * @param {object|string[]} metadata
 * @param {string} [domain]
 * @return {boolean}
 */
  setMetadata(metadata: object|string[], domain?: string): boolean

  /**
 * Set metadata. Can return a warning (false) for formats not supporting persistent metadata.
 * {{{async}}}
 *
 * @method setMetadataAsync
 * @param {object|string[]} metadata
 * @param {string} [domain]
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<boolean>}
 */
  setMetadataAsync(metadata: object|string[], domain?: string, callback?: callback<void>): Promise<boolean>

  /**
 * Determines if the dataset supports the indicated operation.
 *
 * @method testCapability
 * @param {string} capability (see {{#crossLink "Constants (ODsC)"}}capability
 * list{{/crossLink}})
 * @return {boolean}
 */
  testCapability(capability: string): boolean

  /**
 * Get output projection for GCPs.
 *
 * @method getGCPProjection
 * @return {string}
 */
  getGCPProjection(): string

  /**
 * Closes the dataset to further operations. It releases all memory and ressources held
 * by the dataset.
 * This is normally an instantenous atomic operation that won't block the event loop
 * except if there is an operation running on this dataset in asynchronous context - in this case
 * this call will block until that operation finishes.
 *
 * If this could potentially be the case and blocking the event loop is not possible (server code),
 * then the best option is to simply dereference it (ds = null) and leave
 * the garbage collector to expire it.
 *
 * Implementing an asynchronous delete is difficult since all V8 object creation/deletion
 * must take place on the main thread.
 *
 * flush[Async]() ensures that, when writing, all data has been written.
 *
 * @method close
 */
  close(): void

  /**
 * Flushes all changes to disk.
 *
 * @throws Error
 * @method flush
 */
  flush(): void

  /**
 * Flushes all changes to disk.
 * {{{async}}}
 *
 * @method flushAsync
 * @throws Error
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  flushAsync(callback?: callback<void>): Promise<void>

  /**
 * Execute an SQL statement against the data store.
 *
 * @throws Error
 * @method executeSQL
 * @param {string} statement SQL statement to execute.
 * @param {gdal.Geometry} [spatial_filter=null] Geometry which represents a
 * spatial filter.
 * @param {string} [dialect=null] Allows control of the statement dialect. If
 * set to `null`, the OGR SQL engine will be used, except for RDBMS drivers that
 * will use their dedicated SQL engine, unless `"OGRSQL"` is explicitely passed
 * as the dialect. Starting with OGR 1.10, the `"SQLITE"` dialect can also be
 * used.
 * @return {gdal.Layer}
 */
  executeSQL(statement: string, spatial_filter?: Geometry, dialect?: string): Layer

  /**
 * Execute an SQL statement against the data store.
 * {{{async}}}
 *
 * @throws Error
 * @method executeSQLAsync
 * @param {string} statement SQL statement to execute.
 * @param {gdal.Geometry} [spatial_filter=null] Geometry which represents a
 * spatial filter.
 * @param {string} [dialect=null] Allows control of the statement dialect. If
 * set to `null`, the OGR SQL engine will be used, except for RDBMS drivers that
 * will use their dedicated SQL engine, unless `"OGRSQL"` is explicitely passed
 * as the dialect. Starting with OGR 1.10, the `"SQLITE"` dialect can also be
 * used.
 * @param {callback<gdal.Layer>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Layer>}
 */
  executeSQLAsync(statement: string, spatial_filter?: Geometry, dialect?: string, callback?: callback<Layer>): Promise<Layer>

  /**
 * Fetch files forming dataset.
 *
 * Returns a list of files believed to be part of this dataset. If it returns an
 * empty list of files it means there is believed to be no local file system
 * files associated with the dataset (for instance a virtual dataset).
 *
 * Returns an empty array for vector datasets if GDAL version is below 2.0
 *
 * @method getFileList
 * @return {string[]}
 */
  getFileList(): string[]

  /**
 * Fetches GCPs.
 *
 * @method getGCPs
 * @return {any[]}
 */
  getGCPs(): any[]

  /**
 * Sets GCPs.
 *
 * @throws Error
 * @method setGCPs
 * @param {object[]} gcps
 * @param {string} [projection]
 */
  setGCPs(gcps: object[], projection?: string): void

  /**
 * Builds dataset overviews.
 *
 * @throws Error
 * @method buildOverviews
 * @param {string} resampling `"NEAREST"`, `"GAUSS"`, `"CUBIC"`, `"AVERAGE"`,
 * `"MODE"`, `"AVERAGE_MAGPHASE"` or `"NONE"`
 * @param {number[]} overviews
 * @param {number[]} [bands] Note: Generation of overviews in external TIFF currently only supported when operating on all bands.
 * @param {ProgressOptions} [options] options
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 */
  buildOverviews(resampling: string, overviews: number[], bands?: number[], options?: ProgressOptions): void

  /**
 * Builds dataset overviews.
 * {{{async}}}
 *
 * @throws Error
 * @method buildOverviewsAsync
 * @param {string} resampling `"NEAREST"`, `"GAUSS"`, `"CUBIC"`, `"AVERAGE"`,
 * `"MODE"`, `"AVERAGE_MAGPHASE"` or `"NONE"`
 * @param {number[]} overviews
 * @param {number[]} [bands] Note: Generation of overviews in external TIFF currently only supported when operating on all bands.
 * @param {ProgressOptions} [options] options
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  buildOverviewsAsync(resampling: string, overviews: number[], bands?: number[], options?: ProgressOptions, callback?: callback<void>): Promise<void>
}

export class DatasetBands implements Iterable<RasterBand>, AsyncIterable<RasterBand> {
/**
 * An encapsulation of a {{#crossLink "gdal.Dataset"}}Dataset{{/crossLink}}'s
 * raster bands.
 *
 * ```
 * var bands = dataset.bands;```
 *
 * @class gdal.DatasetBands
 */
  constructor()

  /**
 * Parent dataset
 *
 * @readOnly
 * @attribute ds
 * @type {gdal.Dataset}
 */
  readonly ds: Dataset
  [Symbol.iterator](): Iterator<RasterBand>
  [Symbol.asyncIterator](): AsyncIterator<RasterBand>

  /**
 * Returns the band with the given ID.
 *
 * @method get
 * @param {number} id
 * @throws Error
 * @return {gdal.RasterBand}
 */
  get(id: number): RasterBand

  /**
 * Returns the band with the given ID.
 * {{{async}}}
 *
 * @method getAsync
 *
 * @param {number} id
 * @param {callback<gdal.RasterBand>} [callback=undefined] {{{cb}}}
 * @throws Error
 * @return {Promise<gdal.RasterBand>}
 */
  getAsync(id: number, callback?: callback<RasterBand>): Promise<RasterBand>

  /**
 * Adds a new band.
 *
 * @method create
 * @throws Error
 * @param {string} dataType Type of band ({{#crossLink "Constants (GDT)"}}see GDT constants{{/crossLink}}).
 * @param {object|string[]} [options] Creation options
 * @return {gdal.RasterBand}
 */
  create(dataType: string, options?: object|string[]): RasterBand

  /**
 * Adds a new band.
 * {{{async}}}
 *
 * @method createAsync
 * @throws Error
 * @param {string} dataType Type of band ({{#crossLink "Constants (GDT)"}}see GDT constants{{/crossLink}}).
 * @param {object|string[]} [options] Creation options
 * @param {callback<gdal.RasterBand>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.RasterBand>}
 */
  createAsync(dataType: string, options?: object|string[], callback?: callback<RasterBand>): Promise<RasterBand>

  /**
 * Returns the number of bands.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 *
 * Returns the number of bands.
 * {{{async}}}
 *
 * @method countAsync
 *
 * @param {callback<number>} [callback=undefined] {{{cb}}}
 * @return {Promise<number>}
 */
  countAsync(callback?: callback<number>): Promise<number>

  /**
 * Iterates through raster bands using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = dataset.bands.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.DatasetBands
 * @method map<U>
 * @param {mapCb<gdal.RasterBand,U>} callback The callback to be called with each {{#crossLink "RasterBand"}}RasterBand{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<RasterBand,U>): U[]

  /**
 * Returns a {{#crossLink "Envelope"}}gdal.Envelope{{/crossLink}} object for the raster bands
 *
 * @example
 * ```
 * const extent = dataset.getEnvelope()
 * ````
 *
 * @for gdal.DatasetBands
 * @method getEnvelope
 * @return {Envelope}
 */
  getEnvelope(): Envelope

  /**
 * Iterates through all bands using a callback function.
 * Note: GDAL band indexes start at 1, not 0.
 *
 * @example
 * ```
 * dataset.bands.forEach(function(band, i) { ... });```
 *
 * @for gdal.DatasetBands
 * @method forEach
 * @param {forEachCb<gdal.RasterBand>} callback The callback to be called with each {{#crossLink "RasterBand"}}RasterBand{{/crossLink}}
 */
  forEach(callback: forEachCb<RasterBand>): void
}

export class DatasetLayers implements Iterable<Layer>, AsyncIterable<Layer> {
/**
 * An encapsulation of a {{#crossLink "gdal.Dataset"}}Dataset{{/crossLink}}'s
 * vector layers.
 *
 * ```
 * var layers = dataset.layers;```
 *
 * @class gdal.DatasetLayers
 */
  constructor()

  /**
 * Parent dataset
 *
 * @readOnly
 * @attribute ds
 * @type {gdal.Dataset}
 */
  readonly ds: Dataset
  [Symbol.iterator](): Iterator<Layer>
  [Symbol.asyncIterator](): AsyncIterator<Layer>

  /**
 * Returns the layer with the given name or identifier.
 *
 * @method get
 * @param {string|number} key Layer name or ID.
 * @throws Error
 * @return {gdal.Layer}
 */
  get(key: string|number): Layer

  /**
 * Returns the layer with the given name or identifier.
 * {{{async}}}
 *
 * @method getAsync
 * @param {string|number} key Layer name or ID.
 * @param {callback<gdal.Layer>} [callback=undefined] {{{cb}}}
 * @throws Error
 * @return {Promise<gdal.Layer>}
 */
  getAsync(key: string|number, callback?: callback<Layer>): Promise<Layer>

  /**
 * Adds a new layer.
 *
 * @example
 * ```
 * dataset.layers.create('layername', null, gdal.Point);
 * ```
 *
 * @method create
 * @throws Error
 * @param {string} name Layer name
 * @param {gdal.SpatialReference|null} srs Layer projection
 * @param {number|Function} geomType Geometry type or constructor ({{#crossLink
 * "Constants (wkbGeometryType)"}}see geometry types{{/crossLink}})
 * @param {string[]|object} [creation_options] driver-specific layer creation
 * options
 * @return {gdal.Layer}
 */
  create(name: string, srs: SpatialReference|null, geomType: number|Function, creation_options?: string[]|object): Layer

  /**
 * Adds a new layer.
 * {{{async}}}
 *
 * @example
 * ```
 * await dataset.layers.createAsync('layername', null, gdal.Point);
 * dataset.layers.createAsync('layername', null, gdal.Point, (e, r) => console.log(e, r));
 * ```
 *
 * @method createAsync
 * @throws Error
 * @param {string} name Layer name
 * @param {gdal.SpatialReference|null} srs Layer projection
 * @param {number|Function} geomType Geometry type or constructor ({{#crossLink
 * "Constants (wkbGeometryType)"}}see geometry types{{/crossLink}})
 * @param {string[]|object} [creation_options] driver-specific layer creation
 * options
 * @param {callback<gdal.Layer>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Layer>}
 */
  createAsync(name: string, srs: SpatialReference|null, geomType: number|Function, creation_options?: string[]|object, callback?: callback<Layer>): Promise<Layer>

  /**
 * Returns the number of layers.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Returns the number of layers.
 * {{{async}}}
 *
 * @method countAsync
 * @param {callback<number>} [callback=undefined] {{{cb}}}
 * @return {Promise<number>}
 */
  countAsync(callback?: callback<number>): Promise<number>

  /**
 * Copies a layer.
 *
 * @method copy
 * @param {string} src_lyr_name
 * @param {string} dst_lyr_name
 * @param {object|string[]} [options=null] layer creation options
 * @return {gdal.Layer}
 */
  copy(src_lyr_name: string, dst_lyr_name: string, options?: object|string[]): Layer

  /**
 * Copies a layer.
 * {{{async}}}
 *
 * @method copyAsync
 * @param {string} src_lyr_name
 * @param {string} dst_lyr_name
 * @param {object|string[]} [options=null] layer creation options
 * @param {callback<gdal.Layer>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Layer>}
 */
  copyAsync(src_lyr_name: string, dst_lyr_name: string, options?: object|string[], callback?: callback<Layer>): Promise<Layer>

  /**
 * Removes a layer.
 *
 * @method remove
 * @throws Error
 * @param {number} index
 */
  remove(index: number): void

  /**
 * Removes a layer.
 * {{{async}}}
 *
 * @method removeAsync
 * @throws Error
 * @param {number} index
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  removeAsync(index: number, callback?: callback<void>): Promise<void>

  /**
 * Iterates through all layers using a callback function.
 *
 * @example
 * ```
 * dataset.layers.forEach(function(array, i) { ... });```
 *
 * @for gdal.DatasetLayers
 * @method forEach
 * @param {forEachCb<gdal.Layer>} callback The callback to be called with each {{#crossLink "Layer"}}Layer{{/crossLink}}
 */
  forEach(callback: forEachCb<Layer>): void

  /**
 * Iterates through layers using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = dataset.layers.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.DatasetLayers
 * @method map<U>
 * @param {mapCb<gdal.Layer,U>} callback The callback to be called with each {{#crossLink "Layer"}}Layer{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<Layer,U>): U[]
}

export class Dimension {
/**
 * A representation of a group with access methods.
 *
 * @class gdal.Dimension
 */
  constructor()

  /**
 * @readOnly
 * @attribute size
 * @type {number}
 */
  readonly size: number

  /**
 * @readOnly
 * @attribute description
 * @type {string}
 */
  readonly description: string

  /**
 * @readOnly
 * @attribute direction
 * @type {string}
 */
  readonly direction: string

  /**
 * @readOnly
 * @attribute type
 * @type {string}
 */
  readonly type: string
}

export class Driver {
/**
 * Format specific driver.
 *
 * An instance of this class is created for each supported format, and
 * manages information about the format.
 *
 * This roughly corresponds to a file format, though some drivers may
 * be gateways to many formats through a secondary multi-library.
 *
 * @class gdal.Driver
 */
  constructor()

  /**
 * @readOnly
 * @attribute description
 * @type {string}
 */
  readonly description: string

  /**
 * @throws Error
 * @method deleteDataset
 * @param {string} filename
 */
  deleteDataset(filename: string): void

  /**
 * Create a new dataset with this driver.
 *
 * @throws Error
 * @method create
 * @param {string} filename
 * @param {number} [x_size=0] raster width in pixels (ignored for vector
 * datasets)
 * @param {number} [y_size=0] raster height in pixels (ignored for vector
 * datasets)
 * @param {number} [band_count=0]
 * @param {number} [data_type=gdal.GDT_Byte] pixel data type (ignored for
 * vector datasets) (see {{#crossLink "Constants (GDT)"}}data
 * types{{/crossLink}})
 * @param {string[]|object} [creation_options] An array or object containing
 * driver-specific dataset creation options
 * @throws
 * @return {gdal.Dataset}
 */
  create(filename: string, x_size?: number, y_size?: number, band_count?: number, data_type?: number, creation_options?: string[]|object): Dataset

  /**
 * Asynchronously create a new dataset with this driver.
 *
 * @throws Error
 * @method createAsync
 * @param {string} filename
 * @param {number} [x_size=0] raster width in pixels (ignored for vector
 * datasets)
 * @param {number} [y_size=0] raster height in pixels (ignored for vector
 * datasets)
 * @param {number} [band_count=0]
 * @param {number} [data_type=gdal.GDT_Byte] pixel data type (ignored for
 * vector datasets) (see {{#crossLink "Constants (GDT)"}}data
 * types{{/crossLink}})
 * @param {string[]|object} [creation_options] An array or object containing
 * driver-specific dataset creation options
 * @param {callback<gdal.Dataset>} [callback=undefined] {{{cb}}}
 * @throws
 * @return {Promise<gdal.Dataset>}
 */
  createAsync(filename: string, x_size?: number, y_size?: number, band_count?: number, data_type?: number, creation_options?: string[]|object, callback?: callback<Dataset>): Promise<Dataset>

  /**
 * Create a copy of a dataset.
 *
 * @throws Error
 * @method createCopy
 * @param {string} filename
 * @param {gdal.Dataset} src
 * @param {string[]|object} [options=null] An array or object containing driver-specific dataset creation options
 * @param {boolean} [strict=false] strict mode
 * @param {CreateOptions} [jsoptions] additional options
 * @param {ProgressCb} [jsoptions.progress_cb] {{{progress_cb}}}
 * @return {gdal.Dataset}
 */
  createCopy(filename: string, src: Dataset, options?: string[]|object, strict?: boolean, jsoptions?: CreateOptions): Dataset

  /**
 * Asynchronously create a copy of a dataset.
 *
 * @throws Error
 * @method createCopyAsync
 * @param {string} filename
 * @param {gdal.Dataset} src
 * @param {string[]|object} [options=null] An array or object containing driver-specific dataset creation options
 * @param {boolean} [strict=false] strict mode
 * @param {CreateOptions} [jsoptions] additional options
 * @param {ProgressCb} [jsoptions.progress_cb] {{{progress_cb}}}
 * @param {callback<gdal.Dataset>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Dataset>}
 */
  createCopyAsync(filename: string, src: Dataset, options?: string[]|object, strict?: boolean, jsoptions?: CreateOptions, callback?: callback<Dataset>): Promise<Dataset>

  /**
 * Copy the files of a dataset.
 *
 * @throws Error
 * @method copyFiles
 * @param {string} name_old New name for the dataset.
 * @param {string} name_new Old name of the dataset.
 */
  copyFiles(name_old: string, name_new: string): void

  /**
 * Renames the dataset.
 *
 * @throws Error
 * @method rename
 * @param {string} new_name New name for the dataset.
 * @param {string} old_name Old name of the dataset.
 */
  rename(new_name: string, old_name: string): void

  /**
 * Returns metadata about the driver.
 *
 * @throws Error
 * @method getMetadata
 * @param {string} [domain]
 * @return {any}
 */
  getMetadata(domain?: string): any

  /**
 * Opens a dataset.
 *
 * @throws Error
 * @method open
 * @param {string} path
 * @param {string} [mode="r"] The mode to use to open the file: `"r"` or
 * `"r+"`
 * @return {gdal.Dataset}
 */
  open(path: string, mode?: string): Dataset

  /**
 * Opens a dataset.
 *
 * @throws Error
 * @method openAsync
 * @param {string} path
 * @param {string} [mode="r"] The mode to use to open the file: `"r"` or
 * `"r+"`
 * @param {callback<gdal.Dataset>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Dataset>}
 */
  openAsync(path: string, mode?: string, callback?: callback<Dataset>): Promise<Dataset>
}

export class Envelope {
/**
   * A 2D bounding box. For 3D envelopes, see {{#crossLink "gdal.Envelope3D"}}gdal.Envelope3D{{/crossLink}}.
   *
   * (Pure-javascript implementation of [OGREnvelope](https://gdal.org/doxygen/classOGREnvelope.html))
   *
   * @constructor
   * @class gdal.Envelope
   * @param {object} [bounds] An object containing `minX`, `maxX`, `minY`, and `maxY` values.
   */
  constructor(bounds?: object)

  /**
   * @property minX
   * @type {number}
   */
  minX: number

  /**
   * @property maxX
   * @type {number}
   */
  maxX: number

  /**
   * @property minY
   * @type {number}
   */
  minY: number

  /**
   * @property maxY
   * @type {number}
   */
  maxY: number

  /**
   * Determines if the envelope has not been set yet.
   *
   * @method isEmpty
   * @return {boolean}
   */
  isEmpty(): boolean

  /**
   * Unions the provided envelope with the current envelope.
   *
   * @method merge
   * @param {Envelope} envelope
   * @return {void}
   */
  merge(envelope: Envelope): void

  /**
   * Unions the provided envelope with the x/y coordinates provided.
   *
   * @method merge
   * @param {number} x
   * @param {number} y
   * @return {void}
   */
  merge(x: number, y: number): void

  /**
   * Determines if the provided envelope touches it.
   *
   * @method intersects
   * @param {Envelope} envelope
   * @return {boolean}
   */
  intersects(envelope: Envelope): boolean

  /**
   * Updates the envelope to the intersection of the two envelopes.
   *
   * @method intersect
   * @param {Envelope} envelope
   * @return {void}
   */
  intersect(envelope: Envelope): void

  /**
   * Determines if the provided envelope is wholly-contained by the current envelope.
   *
   * @method contains
   * @param {Envelope} envelope
   * @return {boolean}
   */
  contains(envelope: Envelope): boolean

  /**
   * Converts the envelope to a polygon.
   *
   * @method toPolygon
   * @return {Polygon}
   */
  toPolygon(): Polygon
}

export class Envelope3D {
/**
   * A 3D bounding box. For 2D envelopes, see {{#crossLink "gdal.Envelope"}}gdal.Envelope{{/crossLink}}.
   *
   * (Pure-javascript implementation of [OGREnvelope3D](http://www.gdal.org/classOGREnvelope3D.html))
   *
   * @constructor
   * @class gdal.Envelope3D
   * @param {object} [bounds] An object containing `minX`, `maxX`, `minY`, `maxY`, `minZ`, and `maxZ` values.
   */
  constructor(bounds?: object)

  /**
   * @property minX
   * @type {number}
   */
  minX: number

  /**
   * @property maxX
   * @type {number}
   */
  maxX: number

  /**
   * @property minY
   * @type {number}
   */
  minY: number

  /**
   * @property maxY
   * @type {number}
   */
  maxY: number

  /**
   * @property minZ
   * @type {number}
   */
  minZ: number

  /**
   * @property maxZ
   * @type {number}
   */
  maxZ: number

  /**
   * Determines if the envelope has not been set yet.
   *
   * @method isEmpty
   * @return {boolean}
   */
  isEmpty(): boolean

  /**
   * Unions the provided envelope with the current envelope.
   *
   * @method merge
   * @param {Envelope3D} envelope
   * @return {void}
   */
  merge(envelope: Envelope3D): void

  /**
   * Unions the provided envelope with the x/y/z coordinates provided.
   *
   * @method merge
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @return {void}
   */
  merge(x: number, y: number, z: number): void

  /**
   * Determines if the provided envelope touches it.
   *
   * @method intersects
   * @param {Envelope3D} envelope
   * @return {boolean}
   */
  intersects(envelope: Envelope3D): boolean

  /**
   * Updates the envelope to the intersection of the two envelopes.
   *
   * @method intersect
   * @param {Envelope3D} envelope
   * @return {void}
   */
  intersect(envelope: Envelope3D): void

  /**
   * Determines if the provided envelope is wholly-contained by the current envelope.
   *
   * @method contains
   * @param {Envelope3D} envelope
   * @return {boolean}
   */
  contains(envelope: Envelope3D): boolean
}

export class Feature {
/**
 * A simple feature, including geometry and attributes. Its fields and geometry
 * type is defined by the given definition.
 *
 * ```
 * //create layer and specify geometry type
 * var layer = dataset.layers.create('mylayer', null, gdal.Point);
 *
 * //setup fields for the given layer
 * layer.fields.add(new gdal.FieldDefn('elevation', gdal.OFTInteger));
 * layer.fields.add(new gdal.FieldDefn('name', gdal.OFTString));
 *
 * //create feature using layer definition and then add it to the layer
 * var feature = new gdal.Feature(layer);
 * feature.fields.set('elevation', 13775);
 * feature.fields.set('name', 'Grand Teton');
 * feature.setGeometry(new gdal.Point(43.741208, -110.802414));
 * layer.features.add(feature);```
 *
 * @constructor
 * @class gdal.Feature
 * @param {gdal.Layer|gdal.FeatureDefn} definition
 */
  constructor(definition: Layer|FeatureDefn)

  /**
 * @readOnly
 * @attribute fields
 * @type {gdal.FeatureFields}
 */
  readonly fields: FeatureFields

  /**
 * @attribute fid
 * @type {number}
 */
  fid: number

  /**
 * @readOnly
 * @attribute defn
 * @type {gdal.FeatureDefn}
 */
  readonly defn: FeatureDefn

  /**
 * Returns the geometry of the feature.
 *
 * @method getGeometry
 * @return {gdal.Geometry}
 */
  getGeometry(): Geometry

  /**
 * Sets the feature's geometry.
 *
 * @throws Error
 * @method setGeometry
 * @param {gdal.Geometry} geometry
 */
  setGeometry(geometry: Geometry): void

  /**
 * Determines if the features are the same.
 *
 * @method equals
 * @param {gdal.Feature} feature
 * @return {boolean} `true` if the features are the same, `false` if different
 */
  equals(feature: Feature): boolean

  /**
 * Clones the feature.
 *
 * @method clone
 * @return {gdal.Feature}
 */
  clone(): Feature

  /**
 * Releases the feature from memory.
 *
 * @method destroy
 */
  destroy(): void

  /**
 * Set one feature from another. Overwrites the contents of this feature
 * from the geometry and attributes of another.
 *
 * @example
 * ```
 * var feature1 = new gdal.Feature(defn);
 * var feature2 = new gdal.Feature(defn);
 * feature1.setGeometry(new gdal.Point(5, 10));
 * feature1.fields.set([5, 'test', 3.14]);
 * feature2.setFrom(feature1);```
 *
 * @throws Error
 * @method setFrom
 * @param {gdal.Feature} feature
 * @param {number[]} [index_map] Array mapping each field from the source feature
 * to the given index in the destination feature. -1 ignores the source field.
 * The field types must still match otherwise the behavior is undefined.
 * @param {boolean} [forgiving=true] `true` if the operation should continue
 * despite lacking output fields matching some of the source fields.
 */
  setFrom(feature: Feature, index_map?: number[], forgiving?: boolean): void
}

export class FeatureDefn {
/**
 * Definition of a feature class or feature layer.
 *
 * @constructor
 * @class gdal.FeatureDefn
 */
  constructor()

  /**
 * @readOnly
 * @attribute name
 * @type {string}
 */
  readonly name: string

  /**
 * WKB geometry type ({{#crossLink "Constants (wkbGeometryType)"}}see
 * table{{/crossLink}})
 *
 * @attribute geomType
 * @type {number}
 */
  geomType: number

  /**
 * @attribute geomIgnored
 * @type {boolean}
 */
  geomIgnored: boolean

  /**
 * @attribute styleIgnored
 * @type {boolean}
 */
  styleIgnored: boolean

  /**
 * @readOnly
 * @attribute fields
 * @type {gdal.FeatureDefnFields}
 */
  readonly fields: FeatureDefnFields

  /**
 * Clones the feature definition.
 *
 * @method clone
 * @return {gdal.FeatureDefn}
 */
  clone(): FeatureDefn
}

export class FeatureDefnFields implements Iterable<FieldDefn>, AsyncIterable<FieldDefn> {
/**
 * An encapsulation of a {{#crossLink
 * "gdal.FeatureDefn"}}FeatureDefn{{/crossLink}}'s fields.
 *
 * @class gdal.FeatureDefnFields
 */
  constructor()

  /**
 * Parent feature definition.
 *
 * @readOnly
 * @attribute featureDefn
 * @type {gdal.FeatureDefn}
 */
  readonly featureDefn: FeatureDefn
  [Symbol.iterator](): Iterator<FieldDefn>
  [Symbol.asyncIterator](): AsyncIterator<FieldDefn>

  /**
 * Returns the number of fields.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Returns the index of field definition.
 *
 * @method indexOf
 * @param {string} name
 * @return {number} Index or `-1` if not found.
 */
  indexOf(name: string): number

  /**
 * Returns a field definition.
 *
 * @method get
 * @param {string|number} key Field name or index
 * @throws Error
 * @return {gdal.FieldDefn}
 */
  get(key: string|number): FieldDefn

  /**
 * Returns a list of field names.
 *
 * @method getNames
 * @return {string[]} List of field names.
 */
  getNames(): string[]

  /**
 * Removes a field definition.
 *
 * @method remove
 * @throws Error
 * @param {string|number} key Field name or index
 */
  remove(key: string|number): void

  /**
 * Adds field definition(s).
 *
 * @method add
 * @throws Error
 * @param {gdal.FieldDefn|gdal.FieldDefn[]} fields
 */
  add(fields: FieldDefn|FieldDefn[]): void

  /**
 * Reorders the fields.
 *
 * @example
 * ```
 * // reverse fields:
 * featureDef.fields.reorder([2, 1, 0]);```
 *
 * @method reorder
 * @throws Error
 * @param {number[]} map An array representing the new field order.
 */
  reorder(map: number[]): void

  /**
 * Iterates through all field definitions using a callback function.
 *
 * @example
 * ```
 * featureDefn.forEach(function(array, i) { ... });```
 *
 * @for gdal.FeatureDefnFields
 * @method forEach
 * @param {forEachCb<gdal.FieldDefn>} callback The callback to be called with each {{#crossLink "FieldDefn"}}FieldDefn{{/crossLink}}
 */
  forEach(callback: forEachCb<FieldDefn>): void

  /**
 * Iterates through field definitions using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = featureDefn.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.FeatureDefnFields
 * @method map<U>
 * @param {mapCb<gdal.FieldDefn,U>} callback The callback to be called with each {{#crossLink "FieldDefn"}}FieldDefn{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<FieldDefn,U>): U[]
}

export class FeatureFields {
/**
 * An encapsulation of all field data that makes up a {{#crossLink
 * "gdal.Feature"}}Feature{{/crossLink}}.
 *
 * @class gdal.FeatureFields
 */
  constructor()

  /**
 * Parent feature
 *
 * @readOnly
 * @attribute feature
 * @type {gdal.Feature}
 */
  readonly feature: Feature

  /**
 * Sets feature field(s).
 *
 * @example
 * ```
 * // most-efficient, least flexible. requires you to know the ordering of the
 * fields: feature.fields.set(['Something']); feature.fields.set(0,
 * 'Something');
 *
 * // most flexible.
 * feature.fields.set({name: 'Something'});
 * feature.fields.set('name', 'Something');
 * ```
 *
 * @method set
 * @throws Error
 * @param {string|number} key Field name or index
 * @param {any} value
 */
  set(key: string|number, value: any): void

  /**
 * @method set
 * @throws Error
 * @param {object} fields
 */
  set(fields: object): void

  /**
 * Resets all fields.
 *
 * @example
 * ```
 * feature.fields.reset();```
 *
 * @method reset
 * @throws Error
 * @param {object} [values]
 * @return {void}
 */
  reset(values?: object): void

  /**
 * Returns the number of fields.
 *
 * @example
 * ```
 * feature.fields.count();```
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Returns the index of a field, given its name.
 *
 * @example
 * ```
 * var index = feature.fields.indexOf('field');```
 *
 * @method indexOf
 * @param {string} name
 * @return {number} Index or, `-1` if it cannot be found.
 */
  indexOf(name: string): number

  /**
 * Outputs the field data as a pure JS object.
 *
 * @throws Error
 * @method toObject
 * @return {any}
 */
  toObject(): any

  /**
 * Outputs the field values as a pure JS array.
 *
 * @throws Error
 * @method toArray
 * @return {any[]}
 */
  toArray(): any[]

  /**
 * Returns a field's value.
 *
 * @example
 * ```
 * value = feature.fields.get(0);
 * value = feature.fields.get('field');```
 *
 * @method get
 * @param {string|number} key Feature name or index.
 * @throws Error
 * @return {any}
 */
  get(key: string|number): any

  /**
 * Returns a list of field name.
 *
 * @method getNames
 * @throws Error
 * @return {string[]} List of field names.
 */
  getNames(): string[]

  /**
 * Iterates through field definitions using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = layer.features.get(0).fields.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.FeatureFields
 * @method map<U>
 * @param {mapCb<gdal.fieldValue,U>} callback The callback to be called with each {{#crossLink "fieldValue"}}fieldValue{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<fieldValue,U>): U[]

  /**
 * Iterates through all fields using a callback function.
 *
 * @example
 * ```
 * layer.features.get(0).fields.forEach(function(value, key) { ... });```
 *
 * @for gdal.FeatureFields
 * @method forEach
 * @param {forEachCb<fieldValue>} callback The callback to be called with each feature `value` and `key`.
 */
  forEach(callback: forEachCb<fieldValue>): void

  /**
 * Outputs the fields as a serialized JSON string.
 *
 * @for gdal.FeatureFields
 * @method toJSON
 * @return {string} Serialized JSON
 */
  toJSON(): string
}

export class FieldDefn {
/**
 * @constructor
 * @class gdal.FieldDefn
 * @param {string} name Field name
 * @param {string} type Data type (see {{#crossLink "Constants (OFT)"}}OFT
 * constants{{/crossLink}})
 */
  constructor(name: string, type: string)

  /**
 * @attribute name
 * @type {string}
 */
  name: string

  /**
 * Data type (see {{#crossLink "Constants (OFT)"}}OFT constants{{/crossLink}})
 *
 * @attribute type
 * @type {string}
 */
  type: string

  /**
 * @attribute ignored
 * @type {boolean}
 */
  ignored: boolean

  /**
 * Field justification (see {{#crossLink "Constants (OJ)"}}OJ
 * constants{{/crossLink}})
 *
 * @attribute justification
 * @type {string}
 */
  justification: string

  /**
 * @attribute width
 * @type {number}
 */
  width: number

  /**
 * @attribute precision
 * @type {number}
 */
  precision: number
}

export class GDALDrivers implements Iterable<Driver> {
/**
 * An collection of all {{#crossLink "gdal.Driver"}}drivers{{/crossLink}}
 * registered with GDAL.
 *
 * @class gdal.GDALDrivers
 */
  constructor()
  [Symbol.iterator](): Iterator<Driver>

  /**
 * Returns a driver with the specified name.
 *
 * Note: Prior to GDAL2.x there is a separate driver for vector VRTs and raster
 * VRTs. Use `"VRT:vector"` to fetch the vector VRT driver and `"VRT:raster"` to
 * fetch the raster VRT driver.
 *
 * @method get
 * @param {number|string} index 0-based index or driver name
 * @throws Error
 * @return {gdal.Driver}
 */
  get(index: number|string): Driver

  /**
 * Returns an array with the names of all the drivers registered with GDAL.
 *
 * @method getNames
 * @return {string[]}
 */
  getNames(): string[]

  /**
 * Returns the number of drivers registered with GDAL.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Iterates through all drivers using a callback function.
 *
 * @example
 * ```
 * gdal.drivers.forEach(function(array, i) { ... });```
 *
 * @for gdal.GDALDrivers
 * @method forEach
 * @param {forEachCb<gdal.Driver>} callback The callback to be called with each {{#crossLink "Driver"}}Driver{{/crossLink}}
 */
  forEach(callback: forEachCb<Driver>): void

  /**
 * Iterates through drivers using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = gdal.drivers.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.GDALDrivers
 * @method map<U>
 * @param {mapCb<gdal.Driver,U>} callback The callback to be called with each {{#crossLink "Driver"}}Driver{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<Driver,U>): U[]
}

export class Geometry {
/**
 * Abstract base class for all geometry classes.
 *
 * @class gdal.Geometry
 */
  constructor()

  /**
 * @attribute srs
 * @type {gdal.SpatialReference}
 */
  srs: SpatialReference

  /**
 * @readOnly
 * @attribute name
 * @type {string}
 */
  readonly name: string

  /**
 * See {{#crossLink "Constants
 * (wkbGeometryType)"}}wkbGeometryTypes{{/crossLink}}.
 * @readOnly
 * @attribute wkbType
 * @type {number}
 */
  readonly wkbType: number

  /**
 * @readOnly
 * @attribute wkbSize
 * @type {number}
 */
  readonly wkbSize: number

  /**
 * @readOnly
 * @attribute dimension
 * @type {number}
 */
  readonly dimension: number

  /**
 * @attribute coordinateDimension
 * @type {number}
 */
  coordinateDimension: number

  /**
* @for gdal.Geometry
* @property wkbType
* @final
* @static
* @type {number}
*/
  static readonly wkbType: number

  /**
 * Closes any un-closed rings.
 *
 * @method closeRings
 */
  closeRings(): void

  /**
 * Closes any un-closed rings.
 * {{{async}}}
 *
 * @method closeRingsAsync
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  closeRingsAsync(callback?: callback<void>): Promise<void>

  /**
 * Clears the geometry.
 *
 * @method empty
 */
  empty(): void

  /**
 * Clears the geometry.
 * {{{async}}}
 *
 * @method emptyAsync
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  emptyAsync(callback?: callback<void>): Promise<void>

  /**
 * Swaps x, y coordinates.
 *
 * @method swapXY
 */
  swapXY(): void

  /**
 * Swaps x, y coordinates.
 * {{{async}}}
 *
 * @method swapXYAsync
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  swapXYAsync(callback?: callback<void>): Promise<void>

  /**
 * Determines if the geometry is empty.
 *
 * @method isEmpty
 * @return {boolean}
 */
  isEmpty(): boolean

  /**
 * Determines if the geometry is empty.
 * {{{async}}}
 *
 * @method isEmptyAsync
 * @param {callback<boolean>} [callback=undefined] {{{cb}}}
 * @return {Promise<boolean>}
 */
  isEmptyAsync(callback?: callback<boolean>): Promise<boolean>

  /**
 * Determines if the geometry is valid.
 *
 * @method isValid
 * @return {boolean}
 */
  isValid(): boolean

  /**
 * Determines if the geometry is valid.
 * {{{async}}}
 *
 * @method isValidAsync
 * @param {callback<boolean>} [callback=undefined] {{{cb}}}
 * @return {Promise<boolean>}
 */
  isValidAsync(callback?: callback<boolean>): Promise<boolean>

  /**
 * Determines if the geometry is simple.
 *
 * @method isSimple
 * @return {boolean}
 */
  isSimple(): boolean

  /**
 * Determines if the geometry is simple.
 * {{{async}}}
 *
 * @method isSimpleAsync
 * @param {callback<boolean>} [callback=undefined] {{{cb}}}
 * @return {Promise<boolean>}
 */
  isSimpleAsync(callback?: callback<boolean>): Promise<boolean>

  /**
 * Determines if the geometry is a ring.
 *
 * @method isRing
 * @return {boolean}
 */
  isRing(): boolean

  /**
 * Determines if the geometry is a ring.
 * {{{async}}}
 *
 * @method isRingAsync
 * @param {callback<boolean>} [callback=undefined] {{{cb}}}
 * @return {Promise<boolean>}
 */
  isRingAsync(callback?: callback<boolean>): Promise<boolean>

  /**
 * Determines if the two geometries intersect.
 *
 * @method intersects
 * @param {gdal.Geometry} geometry
 * @return {boolean}
 */
  intersects(geometry: Geometry): boolean

  /**
 * Determines if the two geometries intersect.
 * {{{async}}}
 *
 * @method intersectsAsync
 * @param {gdal.Geometry} geometry
 * @param {callback<boolean>} [callback=undefined] {{{cb}}}
 * @return {Promise<boolean>}
 */
  intersectsAsync(geometry: Geometry, callback?: callback<boolean>): Promise<boolean>

  /**
 * Determines if the two geometries equal each other.
 *
 * @method equals
 * @param {gdal.Geometry} geometry
 * @return {boolean}
 */
  equals(geometry: Geometry): boolean

  /**
 * Determines if the two geometries equal each other.
 * {{{async}}}
 *
 * @method equalsAsync
 * @param {gdal.Geometry} geometry
 * @param {callback<boolean>} [callback=undefined] {{{cb}}}
 * @return {Promise<boolean>}
 */
  equalsAsync(geometry: Geometry, callback?: callback<boolean>): Promise<boolean>

  /**
 * Determines if the two geometries are disjoint.
 *
 * @method disjoint
 * @param {gdal.Geometry} geometry
 * @return {boolean}
 */
  disjoint(geometry: Geometry): boolean

  /**
 * Determines if the two geometries are disjoint.
 * {{{async}}}
 *
 * @method disjointAsync
 * @param {gdal.Geometry} geometry
 * @param {callback<boolean>} [callback=undefined] {{{cb}}}
 * @return {Promise<boolean>}
 */
  disjointAsync(geometry: Geometry, callback?: callback<boolean>): Promise<boolean>

  /**
 * Determines if the two geometries touch.
 *
 * @method touches
 * @param {gdal.Geometry} geometry
 * @return {boolean}
 */
  touches(geometry: Geometry): boolean

  /**
 * Determines if the two geometries touch.
 * {{{async}}}
 *
 * @method touchesAsync
 * @param {gdal.Geometry} geometry
 * @param {callback<boolean>} [callback=undefined] {{{cb}}}
 * @return {Promise<boolean>}
 */
  touchesAsync(geometry: Geometry, callback?: callback<boolean>): Promise<boolean>

  /**
 * Determines if the two geometries cross.
 *
 * @method crosses
 * @param {gdal.Geometry} geometry
 * @return {boolean}
 */
  crosses(geometry: Geometry): boolean

  /**
 * Determines if the two geometries cross.
 * {{{async}}}
 *
 * @method crossesAsync
 * @param {gdal.Geometry} geometry
 * @param {callback<boolean>} [callback=undefined] {{{cb}}}
 * @return {Promise<boolean>}
 */
  crossesAsync(geometry: Geometry, callback?: callback<boolean>): Promise<boolean>

  /**
 * Determines if the current geometry is within the provided geometry.
 *
 * @method within
 * @param {gdal.Geometry} geometry
 * @return {boolean}
 */
  within(geometry: Geometry): boolean

  /**
 * Determines if the current geometry is within the provided geometry.
 * {{{async}}}
 *
 * @method withinAsync
 * @param {gdal.Geometry} geometry
 * @param {callback<boolean>} [callback=undefined] {{{cb}}}
 * @return {Promise<boolean>}
 */
  withinAsync(geometry: Geometry, callback?: callback<boolean>): Promise<boolean>

  /**
 * Determines if the current geometry contains the provided geometry.
 *
 * @method contains
 * @param {gdal.Geometry} geometry
 * @return {boolean}
 */
  contains(geometry: Geometry): boolean

  /**
 * Determines if the current geometry contains the provided geometry.
 * {{{async}}}
 *
 * @method containsAsync
 * @param {gdal.Geometry} geometry
 * @param {callback<boolean>} [callback=undefined] {{{cb}}}
 * @return {Promise<boolean>}
 */
  containsAsync(geometry: Geometry, callback?: callback<boolean>): Promise<boolean>

  /**
 * Determines if the current geometry overlaps the provided geometry.
 *
 * @method overlaps
 * @param {gdal.Geometry} geometry
 * @return {boolean}
 */
  overlaps(geometry: Geometry): boolean

  /**
 * Determines if the current geometry overlaps the provided geometry.
 * {{{async}}}
 *
 * @method overlapsAsync
 * @param {gdal.Geometry} geometry
 * @param {callback<boolean>} [callback=undefined] {{{cb}}}
 * @return {Promise<boolean>}
 */
  overlapsAsync(geometry: Geometry, callback?: callback<boolean>): Promise<boolean>

  /**
 * Computes the distance between the two geometries.
 *
 * @method distance
 * @param {gdal.Geometry} geometry
 * @return {number}
 */
  distance(geometry: Geometry): number

  /**
 * Computes the distance between the two geometries.
 * {{{async}}}
 *
 * @method distanceAsync
 * @param {gdal.Geometry} geometry
 * @param {callback<number>} [callback=undefined] {{{cb}}}
 * @return {Promise<number>}
 */
  distanceAsync(geometry: Geometry, callback?: callback<number>): Promise<number>

  /**
 * Modify the geometry such it has no segment longer then the given distance.
 *
 * @method segmentize
 * @param {number} segment_length
 * @return {void}
 */
  segmentize(segment_length: number): void

  /**
 * Apply arbitrary coordinate transformation to the geometry.
 *
 * This method will transform the coordinates of a geometry from their current
 * spatial reference system to a new target spatial reference system. Normally
 * this means reprojecting the vectors, but it could include datum shifts,
 * and changes of units.
 *
 * Note that this method does not require that the geometry already have a
 * spatial reference system. It will be assumed that they can be treated as
 * having the source spatial reference system of the {{#crossLink
 * "gdal.CoordinateTransformation"}}CoordinateTransformation{{/crossLink}}
 * object, and the actual SRS of the geometry will be ignored.
 *
 * @throws Error
 * @method transform
 * @param {gdal.CoordinateTransformation} transformation
 */
  transform(transformation: CoordinateTransformation): void

  /**
 * Apply arbitrary coordinate transformation to the geometry.
 * {{{async}}}
 *
 * @throws Error
 * @method transformAsync
 * @param {gdal.CoordinateTransformation} transformation
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  transformAsync(transformation: CoordinateTransformation, callback?: callback<void>): Promise<void>

  /**
 * Transforms the geometry to match the provided {{#crossLink
 * "gdal.SpatialReference"}}SpatialReference{{/crossLink}}.
 *
 * @throws Error
 * @method transformTo
 * @param {gdal.SpatialReference} srs
 */
  transformTo(srs: SpatialReference): void

  /**
 * Transforms the geometry to match the provided {{#crossLink
 * "gdal.SpatialReference"}}SpatialReference{{/crossLink}}.
 * {{{async}}}
 *
 * @throws Error
 * @method transformToAsync
 * @param {gdal.SpatialReference} srs
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  transformToAsync(srs: SpatialReference, callback?: callback<void>): Promise<void>

  /**
 * Clones the instance.
 *
 * @method clone
 * @return {gdal.Geometry}
 */
  clone(): Geometry

  /**
 * Compute convex hull.
 *
 * @method convexHull
 * @throws Error
 * @return {gdal.Geometry}
 */
  convexHull(): Geometry

  /**
 * Compute convex hull.
 * {{{async}}}
 *
 * @method convexHullAsync
 * @throws Error
 * @param {callback<gdal.Geometry>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Geometry>}
 */
  convexHullAsync(callback?: callback<Geometry>): Promise<Geometry>

  /**
 * Compute boundary.
 *
 * @method boundary
 * @throws Error
 * @return {gdal.Geometry}
 */
  boundary(): Geometry

  /**
 * Compute boundary.
 * {{{async}}}
 *
 * @method boundaryAsync
 * @throws Error
 * @param {callback<gdal.Geometry>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Geometry>}
 */
  boundaryAsync(callback?: callback<Geometry>): Promise<Geometry>

  /**
 * Compute intersection with another geometry.
 *
 * @method intersection
 * @param {gdal.Geometry} geometry
 * @throws Error
 * @return {gdal.Geometry}
 */
  intersection(geometry: Geometry): Geometry

  /**
 * Compute intersection with another geometry.
 * {{{async}}}
 *
 * @method intersectionAsync
 * @param {gdal.Geometry} geometry
 * @param {callback<gdal.Geometry>} [callback=undefined] {{{cb}}}
 * @throws Error
 * @return {Promise<gdal.Geometry>}
 */
  intersectionAsync(geometry: Geometry, callback?: callback<Geometry>): Promise<Geometry>

  /**
 * Compute the union of this geometry with another.
 *
 * @method union
 * @param {gdal.Geometry} geometry
 * @throws Error
 * @return {gdal.Geometry}
 */
  union(geometry: Geometry): Geometry

  /**
 * Compute the union of this geometry with another.
 * {{{async}}}
 *
 * @method unionAsync
 * @param {gdal.Geometry} geometry
 * @param {callback<gdal.Geometry>} [callback=undefined] {{{cb}}}
 * @throws Error
 * @return {Promise<gdal.Geometry>}
 */
  unionAsync(geometry: Geometry, callback?: callback<Geometry>): Promise<Geometry>

  /**
 * Compute the difference of this geometry with another.
 *
 * @method difference
 * @param {gdal.Geometry} geometry
 * @throws Error
 * @return {gdal.Geometry}
 */
  difference(geometry: Geometry): Geometry

  /**
 * Compute the difference of this geometry with another.
 * {{{async}}}
 *
 * @method differenceAsync
 * @param {gdal.Geometry} geometry
 * @param {callback<gdal.Geometry>} [callback=undefined] {{{cb}}}
 * @throws Error
 * @return {Promise<gdal.Geometry>}
 */
  differenceAsync(geometry: Geometry, callback?: callback<Geometry>): Promise<Geometry>

  /**
 * Computes the symmetric difference of this geometry and the second geometry.
 *
 * @method symDifference
 * @param {gdal.Geometry} geometry
 * @throws Error
 * @return {gdal.Geometry}
 */
  symDifference(geometry: Geometry): Geometry

  /**
 * Computes the symmetric difference of this geometry and the second geometry.
 * {{{async}}}
 *
 * @method symDifferenceAsync
 * @param {gdal.Geometry} geometry
 * @param {callback<gdal.Geometry>} [callback=undefined] {{{cb}}}
 * @throws Error
 * @return {Promise<gdal.Geometry>}
 */
  symDifferenceAsync(geometry: Geometry, callback?: callback<Geometry>): Promise<Geometry>

  /**
 * Reduces the geometry complexity.
 *
 * @method simplify
 * @param {number} tolerance
 * @throws Error
 * @return {gdal.Geometry}
 */
  simplify(tolerance: number): Geometry

  /**
 * Reduces the geometry complexity.
 * {{{async}}}
 *
 * @method simplifyAsync
 * @param {number} tolerance
 * @param {callback<gdal.Geometry>} [callback=undefined] {{{cb}}}
 * @throws Error
 * @return {Promise<gdal.Geometry>}
 */
  simplifyAsync(tolerance: number, callback?: callback<Geometry>): Promise<Geometry>

  /**
 * Reduces the geometry complexity while preserving the topology.
 *
 * @method simplifyPreserveTopology
 * @param {number} tolerance
 * @throws Error
 * @return {gdal.Geometry}
 */
  simplifyPreserveTopology(tolerance: number): Geometry

  /**
 * Reduces the geometry complexity while preserving the topology.
 * {{{async}}}
 *
 * @method simplifyPreserveTopologyAsync
 * @param {number} tolerance
 * @param {callback<gdal.Geometry>} [callback=undefined] {{{cb}}}
 * @throws Error
 * @return {Promise<gdal.Geometry>}
 */
  simplifyPreserveTopologyAsync(tolerance: number, callback?: callback<Geometry>): Promise<Geometry>

  /**
 * Buffers the geometry by the given distance.
 *
 * @method buffer
 * @param {number} distance
 * @param {number} segments
 * @throws Error
 * @return {gdal.Geometry}
 */
  buffer(distance: number, segments: number): Geometry

  /**
 * Buffers the geometry by the given distance.
 * {{{async}}}
 *
 * @method bufferAsync
 * @param {number} distance
 * @param {number} segments
 * @param {callback<gdal.Geometry>} [callback=undefined] {{{cb}}}
 * @throws Error
 * @return {Promise<gdal.Geometry>}
 */
  bufferAsync(distance: number, segments: number, callback?: callback<Geometry>): Promise<Geometry>

  /**
 * Attempts to make an invalid geometry valid without losing vertices.
 * Requires GDAL 3.0
 *
 * @method makeValid
 * @throws Error
 * @return {gdal.Geometry}
 */
  makeValid(): Geometry

  /**
 * Attempts to make an invalid geometry valid without losing vertices.
 * Requires GDAL 3.0
 * {{{async}}}
 *
 * @method makeValidAsync
 * @param {callback<gdal.Geometry>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Geometry>}
 */
  makeValidAsync(callback?: callback<Geometry>): Promise<Geometry>

  /**
 * Convert a geometry into well known text format.
 *
 * @method toWKT
 * @throws Error
 * @return {string}
 */
  toWKT(): string

  /**
 * Convert a geometry into well known text format.
 * {{{async}}}
 *
 * @method toWKTAsync
 * @param {callback<string>} [callback=undefined] {{{cb}}}
 * @throws Error
 * @return {Promise<string>}
 */
  toWKTAsync(callback?: callback<string>): Promise<string>

  /**
 * Convert a geometry into well known binary format.
 *
 * @method toWKB
 * @param {string} [byte_order="MSB"] ({{#crossLink "Constants
 * (wkbByteOrder)"}}see options{{/crossLink}})
 * @param {string} [variant="OGC"] ({{#crossLink "Constants (wkbVariant)"}}see
 * options{{/crossLink}})
 * @throws Error
 * @return {Buffer}
 */
  toWKB(byte_order?: string, variant?: string): Buffer

  /**
 * Convert a geometry into well known binary format.
 * {{{async}}}
 *
 * @method toWKBAsync
 * @param {string} [byte_order="MSB"] ({{#crossLink "Constants
 * (wkbByteOrder)"}}see options{{/crossLink}})
 * @param {string} [variant="OGC"] ({{#crossLink "Constants (wkbVariant)"}}see
 * options{{/crossLink}})
 * @param {callback<Buffer>} [callback=undefined] {{{cb}}}
 * @throws Error
 * @return {Promise<Buffer>}
 */
  toWKBAsync(byte_order?: string, variant?: string, callback?: callback<Buffer>): Promise<Buffer>

  /**
 * Convert a geometry into KML format.
 *
 * @method toKML
 * @throws Error
 * @return {string}
 */
  toKML(): string

  /**
 * Convert a geometry into KML format.
 * {{{async}}}
 *
 * @method toKMLAsync
 * @param {callback<string>} [callback=undefined] {{{cb}}}
 * @throws Error
 * @return {Promise<string>}
 */
  toKMLAsync(callback?: callback<string>): Promise<string>

  /**
 * Convert a geometry into GML format.
 *
 * @method toGML
 * @throws Error
 * @return {string}
 */
  toGML(): string

  /**
 * Convert a geometry into GML format.
 * {{{async}}}
 *
 * @method toGMLAsync
 * @param {callback<string>} [callback=undefined] {{{cb}}}
 * @throws Error
 * @return {Promise<string>}
 */
  toGMLAsync(callback?: callback<string>): Promise<string>

  /**
 * Convert a geometry into JSON format.
 *
 * @method toJSON
 * @throws Error
 * @return {string}
 */
  toJSON(): string

  /**
 * Convert a geometry into JSON format.
 * {{{async}}}
 *
 * @method toJSONAsync
 * @param {callback<string>} [callback=undefined] {{{cb}}}
 * @throws Error
 * @return {Promise<string>}
 */
  toJSONAsync(callback?: callback<string>): Promise<string>

  /**
 * Compute the centroid of the geometry.
 *
 * @method centroid
 * @throws Error
 * @return {gdal.Point}
 */
  centroid(): Point

  /**
 * Compute the centroid of the geometry.
 * {{{async}}}
 *
 * @method centroidAsync
 * @param {callback<gdal.Geometry>} [callback=undefined] {{{cb}}}
 * @throws Error
 * @return {Promise<gdal.Geometry>}
 */
  centroidAsync(callback?: callback<Geometry>): Promise<Geometry>

  /**
 * Computes the bounding box (envelope).
 *
 * @method getEnvelope
 * @return {gdal.Envelope} Bounding envelope
 */
  getEnvelope(): Envelope

  /**
 * Computes the bounding box (envelope).
 * {{{async}}}
 *
 * @method getEnvelopeAsync
 * @param {callback<gdal.Envelope>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Envelope>}
 */
  getEnvelopeAsync(callback?: callback<Envelope>): Promise<Envelope>

  /**
 * Computes the 3D bounding box (envelope).
 *
 * @method getEnvelope3D
 * @return {gdal.Envelope3D} Bounding envelope
 */
  getEnvelope3D(): Envelope3D

  /**
 * Computes the 3D bounding box (envelope).
 * {{{async}}}
 *
 * @method getEnvelope3DAsync
 * @param {callback<gdal.Geometry>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Geometry>}
 */
  getEnvelope3DAsync(callback?: callback<Geometry>): Promise<Geometry>

  /**
 * Convert geometry to strictly 2D
 *
 * @method flattenTo2D
 * @return {void}
 */
  flattenTo2D(): void

  /**
 * Convert geometry to strictly 2D
 * {{{async}}}
 *
 * @method flattenTo2DAsync
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  flattenTo2DAsync(callback?: callback<void>): Promise<void>

  /**
 * Creates a Geometry from a WKT string.
 *
 * @static
 * @method fromWKT
 * @throws Error
 * @param {string} wkt
 * @param {gdal.SpatialReference} [srs]
 * @return {gdal.Geometry}
 */
  static fromWKT(wkt: string, srs?: SpatialReference): Geometry

  /**
 * Creates a Geometry from a WKT string.
 * {{{async}}}
 *
 * @static
 * @method fromWKTAsync
 * @throws Error
 * @param {string} wkt
 * @param {gdal.SpatialReference} [srs]
 * @param {callback<gdal.Geometry>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Geometry>}
 */
  static fromWKTAsync(wkt: string, srs?: SpatialReference, callback?: callback<Geometry>): Promise<Geometry>

  /**
 * Creates a Geometry from a WKB buffer.
 *
 * @static
 * @method fromWKB
 * @throws Error
 * @param {Buffer} wkb
 * @param {gdal.SpatialReference} [srs]
 * @return {gdal.Geometry}
 */
  static fromWKB(wkb: Buffer, srs?: SpatialReference): Geometry

  /**
 * Creates a Geometry from a WKB buffer.
 * {{{async}}}
 *
 * @static
 * @method fromWKBAsync
 * @throws Error
 * @param {Buffer} wkb
 * @param {gdal.SpatialReference} [srs]
 * @param {callback<gdal.Geometry>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Geometry>}
 */
  static fromWKBAsync(wkb: Buffer, srs?: SpatialReference, callback?: callback<Geometry>): Promise<Geometry>

  /**
 * Creates a Geometry from a GeoJSON object fragment.
 * The async version depends on V8 for object serialization and this part is not parallelizable.
 * V8 objects cannot be accessed outside of the main thread. This function should not be used
 * for importing objects of more than few tens of Kbytes when low latency is needed. If you need
 * to import very large GeoJSON geometries in server code, use the much faster and completely
 * parallel fromGeoJonBuffer(Async)
 *
 * @static
 * @method fromGeoJson
 * @throws Error
 * @param {object} geojson
 * @return {gdal.Geometry}
 */
  static fromGeoJson(geojson: object): Geometry

  /**
 * Creates a Geometry from a GeoJSON object fragment.
 * The async version depends on V8 for object serialization and this part is not parallelizable.
 * V8 objects cannot be accessed outside of the main thread. This function should not be used
 * for importing objects of more than few tens of Kbytes when low latency is needed. If you need
 * to import very large GeoJSON geometries in server code, use the much faster and completely
 * parallel fromGeoJonBuffer(Async)
 * {{{async}}}
 *
 * @static
 * @method fromGeoJsonAsync
 * @throws Error
 * @param {object} geojson
 * @param {callback<gdal.Geometry>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Geometry>}
 */
  static fromGeoJsonAsync(geojson: object, callback?: callback<Geometry>): Promise<Geometry>

  /**
 * Creates a Geometry from a buffer containing a GeoJSON fragment in UT8 format.
 *
 * @static
 * @method fromGeoJsonBuffer
 * @throws Error
 * @param {Buffer} geojson
 * @return {gdal.Geometry}
 */
  static fromGeoJsonBuffer(geojson: Buffer): Geometry

  /**
 * Creates a Geometry from a buffer containing a GeoJSON fragment in UT8 format.
 * {{{async}}}
 *
 * @static
 * @method fromGeoJsonBufferAsync
 * @throws Error
 * @param {Buffer} geojson
 * @param {callback<gdal.Geometry>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Geometry>}
 */
  static fromGeoJsonBufferAsync(geojson: Buffer, callback?: callback<Geometry>): Promise<Geometry>

  /**
 * Creates an empty Geometry from a WKB type.
 *
 * @static
 * @method create
 * @param {number} type WKB geometry type ({{#crossLink "Constants
 * (wkbGeometryType)"}}available options{{/crossLink}})
 * @return {gdal.Geometry}
 */
  static create(type: number): Geometry

  /**
 * Returns the Geometry subclass that matches the
 * given WKB geometry type.
 *
 * @static
 * @method getConstructor
 * @param {number} type WKB geometry type ({{#crossLink "Constants
 * (wkbGeometryType)"}}available options{{/crossLink}})
 * @return {Function}
 */
  static getConstructor(type: number): Function

  /**
 * Returns the Geometry subclass name that matches the
 * given WKB geometry type.
 *
 * @static
 * @method getName
 * @param {number} type WKB geometry type ({{#crossLink "Constants
 * (wkbGeometryType)"}}available options{{/crossLink}})
 * @return {string}
 */
  static getName(type: number): string

  /**
 * Converts the geometry to a GeoJSON object representation.
 *
 * @for gdal.Geometry
 * @method toObject
 * @return {object} GeoJSON
 */
  toObject(): object
}

export class GeometryCollection extends Geometry {
/**
 * A collection of 1 or more geometry objects.
 *
 * @constructor
 * @class gdal.GeometryCollection
 * @extends gdal.Geometry
 */
  constructor()

  /**
 * All geometries represented by this collection.
 *
 * @attribute children
 * @type {gdal.GeometryCollectionChildren}
 */
  children: GeometryCollectionChildren

  /**
 * Computes the combined area of the geometries.
 *
 * @method getArea
 * @return {number}
 */
  getArea(): number

  /**
 * Compute the length of a multicurve.
 *
 * @method getLength
 * @return {number}
 */
  getLength(): number
}

export class GeometryCollectionChildren implements Iterable<Geometry> {
/**
 * A collection of Geometries, used by {{#crossLink
 * "gdal.GeometryCollection"}}gdal.GeometryCollection{{/crossLink}}.
 *
 * @class gdal.GeometryCollectionChildren
 */
  constructor()
  [Symbol.iterator](): Iterator<Geometry>

  /**
 * Returns the number of items.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Returns the geometry at the specified index.
 *
 * @method get
 * @param {number} index 0-based index
 * @throws Error
 * @return {gdal.Geometry}
 */
  get(index: number): Geometry

  /**
 * Removes the geometry at the specified index.
 *
 * @method remove
 * @param {number} index 0-based index, -1 for all geometries
 */
  remove(index: number): void

  /**
 * Adds geometry(s) to the collection.
 *
 * @example
 * ```
 * // one at a time:
 * geometryCollection.children.add(new Point(0,0,0));
 *
 * // add many at once:
 * geometryCollection.children.add([
 *     new Point(1,0,0),
 *     new Point(1,0,0)
 * ]);```
 *
 * @method add
 * @param {gdal.Geometry|gdal.Geometry[]} geometry
 */
  add(geometry: Geometry|Geometry[]): void

  /**
 * Iterates through all child geometries using a callback function.
 *
 * @example
 * ```
 * geometryCollection.children.forEach(function(array, i) { ... });```
 *
 * @for gdal.GeometryCollectionChildren
 * @method forEach
 * @param {forEachCb<gdal.Geometry>} callback The callback to be called with each {{#crossLink "Geometry"}}Geometry{{/crossLink}}
 */
  forEach(callback: forEachCb<Geometry>): void

  /**
 * Iterates through child geometries using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = geometryCollection.children.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.GeometryCollectionChildren
 * @method map<U>
 * @param {mapCb<gdal.Geometry,U>} callback The callback to be called with each {{#crossLink "Geometry"}}Geometry{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<Geometry,U>): U[]
}

export class Group {
/**
 * A representation of a group with access methods.
 *
 * @class gdal.Group
 */
  constructor()

  /**
 * @readOnly
 * @attribute description
 * @type {string}
 */
  readonly description: string

  /**
 * @readOnly
 * @attribute groups
 * @type {gdal.GroupGroups}
 */
  readonly groups: GroupGroups

  /**
 * @readOnly
 * @attribute arrays
 * @type {gdal.GroupArrays}
 */
  readonly arrays: GroupArrays

  /**
 * @readOnly
 * @attribute dimensions
 * @type {gdal.GroupDimensions}
 */
  readonly dimensions: GroupDimensions

  /**
 * @readOnly
 * @attribute attributes
 * @type {gdal.GroupAttributes}
 */
  readonly attributes: GroupAttributes
}

export class GroupArrays implements Iterable<MDArray>, AsyncIterable<MDArray> {
/**
 * An encapsulation of a {{#crossLink "gdal.Group"}}Group{{/crossLink}}'s
 * descendant arrays.
 *
 * @class gdal.GroupArrays
 */
  constructor()

  /**
 * @readOnly
 * @attribute names
 * @type {string[]}
 */
  readonly names: string[]

  /**
 * Parent dataset
 *
 * @readOnly
 * @attribute ds
 * @type {gdal.Dataset}
 */
  readonly ds: Dataset
  [Symbol.iterator](): Iterator<MDArray>
  [Symbol.asyncIterator](): AsyncIterator<MDArray>

  /**
 * Returns the array with the given name/index.
 *
 * @method get
 * @param {string|number} array
 * @return {gdal.MDArray}
 */
  get(array: string|number): MDArray

  /**
 * Returns the array with the given name/index.
 * {{{async}}}
 *
 * @method getAsync
 *
 * @param {string|number} array
 * @param {callback<gdal.MDArray>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.MDArray>}
 */
  getAsync(array: string|number, callback?: callback<MDArray>): Promise<MDArray>

  /**
 * Returns the number of arrays in the collection.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Returns the number of arrays in the collection.
 * {{{async}}}
 *
 * @method countAsync
 *
 * @param {callback<number>} [callback=undefined] {{{cb}}}
 * @return {Promise<number>}
 */
  countAsync(callback?: callback<number>): Promise<number>

  /**
 * Iterates through all arrays using a callback function.
 *
 * @example
 * ```
 * group.arrays.forEach(function(array, i) { ... });```
 *
 * @for gdal.GroupArrays
 * @method forEach
 * @param {forEachCb<gdal.MDArray>} callback The callback to be called with each {{#crossLink "MDArray"}}MDArray{{/crossLink}}
 */
  forEach(callback: forEachCb<MDArray>): void

  /**
 * Iterates through arrays using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = group.arrays.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.GroupArrays
 * @method map<U>
 * @param {mapCb<gdal.MDArray,U>} callback The callback to be called with each {{#crossLink "MDArray"}}MDArray{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<MDArray,U>): U[]
}

export class GroupAttributes implements Iterable<Attribute>, AsyncIterable<Attribute> {
/**
 * An encapsulation of a {{#crossLink "gdal.Group"}}Group{{/crossLink}}'s
 * descendant attributes.
 *
 * @class gdal.GroupAttributes
 */
  constructor()

  /**
 * @readOnly
 * @attribute names
 * @type {string[]}
 */
  readonly names: string[]

  /**
 * Parent dataset
 *
 * @readOnly
 * @attribute ds
 * @type {gdal.Dataset}
 */
  readonly ds: Dataset
  [Symbol.iterator](): Iterator<Attribute>
  [Symbol.asyncIterator](): AsyncIterator<Attribute>

  /**
 * Returns the attribute with the given name/index.
 *
 * @method get
 * @param {string|number} attribute
 * @return {gdal.Attribute}
 */
  get(attribute: string|number): Attribute

  /**
 * Returns the attribute with the given name/index.
 * {{{async}}}
 *
 * @method getAsync
 *
 * @param {string|number} attribute
 * @param {callback<gdal.Attribute>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Attribute>}
 */
  getAsync(attribute: string|number, callback?: callback<Attribute>): Promise<Attribute>

  /**
 * Returns the number of attributes in the collection.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Returns the number of attributes in the collection.
 * {{{async}}}
 *
 * @method countAsync
 *
 * @param {callback<number>} [callback=undefined] {{{cb}}}
 * @return {Promise<number>}
 */
  countAsync(callback?: callback<number>): Promise<number>

  /**
 * Iterates through all attributes using a callback function.
 *
 * @example
 * ```
 * group.attributes.forEach(function(array, i) { ... });```
 *
 * @for gdal.GroupAttributes
 * @method forEach
 * @param {forEachCb<gdal.Attribute>} callback The callback to be called with each {{#crossLink "Attribute"}}Attribute{{/crossLink}}
 */
  forEach(callback: forEachCb<Attribute>): void

  /**
 * Iterates through attributes using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = group.attributes.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.GroupAttributes
 * @method map<U>
 * @param {mapCb<gdal.Attribute,U>} callback The callback to be called with each {{#crossLink "Attribute"}}Attribute{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<Attribute,U>): U[]
}

export class GroupDimensions implements Iterable<Dimension>, AsyncIterable<Dimension> {
/**
 * An encapsulation of a {{#crossLink "gdal.Group"}}Group{{/crossLink}}'s
 * descendant dimensions.
 *
 * ```
 * const dimensions = group.dimensions;```
 *
 * @class gdal.GroupDimensions
 */
  constructor()

  /**
 * @readOnly
 * @attribute names
 * @type {string[]}
 */
  readonly names: string[]

  /**
 * Parent dataset
 *
 * @readOnly
 * @attribute ds
 * @type {gdal.Dataset}
 */
  readonly ds: Dataset
  [Symbol.iterator](): Iterator<Dimension>
  [Symbol.asyncIterator](): AsyncIterator<Dimension>

  /**
 * Returns the array with the given name/index.
 *
 * @method get
 * @param {string|number} array
 * @return {gdal.Dimension}
 */
  get(array: string|number): Dimension

  /**
 * Returns the array with the given name/index.
 * {{{async}}}
 *
 * @method getAsync
 *
 * @param {string|number} array
 * @param {callback<gdal.Dimension>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Dimension>}
 */
  getAsync(array: string|number, callback?: callback<Dimension>): Promise<Dimension>

  /**
 * Returns the number of dimensions in the collection.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Returns the number of dimensions in the collection.
 * {{{async}}}
 *
 * @method countAsync
 *
 * @param {callback<number>} [callback=undefined] {{{cb}}}
 * @return {Promise<number>}
 */
  countAsync(callback?: callback<number>): Promise<number>

  /**
 * Iterates through all dimensions using a callback function.
 *
 * @example
 * ```
 * group.dimensions.forEach(function(array, i) { ... });```
 *
 * @for gdal.GroupDimensions
 * @method forEach
 * @param {forEachCb<gdal.Dimension>} callback The callback to be called with each {{#crossLink "Dimension"}}Dimension{{/crossLink}}
 */
  forEach(callback: forEachCb<Dimension>): void

  /**
 * Iterates through dimensions using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = group.dimensions.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.GroupDimensions
 * @method map<U>
 * @param {mapCb<gdal.Dimension,U>} callback The callback to be called with each {{#crossLink "Dimension"}}Dimension{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<Dimension,U>): U[]
}

export class GroupGroups implements Iterable<Group>, AsyncIterable<Group> {
/**
 * An encapsulation of a {{#crossLink "gdal.Group"}}Group{{/crossLink}}'s
 * descendant groups.
 *
 *
 * @class gdal.GroupGroups
 */
  constructor()

  /**
 * @readOnly
 * @attribute names
 * @type {string[]}
 */
  readonly names: string[]

  /**
 * Parent dataset
 *
 * @readOnly
 * @attribute ds
 * @type {gdal.Dataset}
 */
  readonly ds: Dataset
  [Symbol.iterator](): Iterator<Group>
  [Symbol.asyncIterator](): AsyncIterator<Group>

  /**
 * Returns the group with the given name/index.
 *
 * @method get
 * @param {string|number} group
 * @return {gdal.Group}
 */
  get(group: string|number): Group

  /**
 * Returns the group with the given name/index.
 * {{{async}}}
 *
 * @method getAsync
 *
 * @param {string|number} group
 * @param {callback<gdal.Group>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Group>}
 */
  getAsync(group: string|number, callback?: callback<Group>): Promise<Group>

  /**
 * Returns the number of groups in the collection.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Returns the number of groups in the collection.
 * {{{async}}}
 *
 * @method countAsync
 *
 * @param {callback<number>} [callback=undefined] {{{cb}}}
 * @return {Promise<number>}
 */
  countAsync(callback?: callback<number>): Promise<number>

  /**
 * Iterates through all groups using a callback function.
 *
 * @example
 * ```
 * group.groups.forEach(function(array, i) { ... });```
 *
 * @for gdal.GroupGroups
 * @method forEach
 * @param {forEachCb<gdal.Group>} callback The callback to be called with each {{#crossLink "Group"}}Group{{/crossLink}}
 */
  forEach(callback: forEachCb<Group>): void

  /**
 * Iterates through groups using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = group.groups.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.GroupGroups
 * @method map<U>
 * @param {mapCb<gdal.Group,U>} callback The callback to be called with each {{#crossLink "Group"}}Group{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<Group,U>): U[]
}

export class Layer {
/**
 * A representation of a layer of simple vector features, with access methods.
 *
 * @class gdal.Layer
 */
  constructor()

  /**
 * @readOnly
 * @attribute ds
 * @type {gdal.Dataset}
 */
  readonly ds: Dataset

  /**
 * @readOnly
 * @attribute srs
 * @type {gdal.SpatialReference}
 */
  readonly srs: SpatialReference

  /**
 * @readOnly
 * @attribute name
 * @type {string}
 */
  readonly name: string

  /**
 * @readOnly
 * @attribute geomColumn
 * @type {string}
 */
  readonly geomColumn: string

  /**
 * @readOnly
 * @attribute fidColumn
 * @type {string}
 */
  readonly fidColumn: string

  /**
 * @readOnly
 * @attribute geomType
 * @type {number} (see {{#crossLink "Constants (wkb)"}}geometry
 * types{{/crossLink}})
 */
  readonly geomType: number

  /**
 * @readOnly
 * @attribute features
 * @type {gdal.LayerFeatures}
 */
  readonly features: LayerFeatures

  /**
 * @readOnly
 * @attribute fields
 * @type {gdal.LayerFields}
 */
  readonly fields: LayerFields

  /**
 * Flush pending changes to disk.
 *
 * @throws Error
 * @method flush
 */
  flush(): void

  /**
 * Flush pending changes to disk.
 * {{{async}}}
 *
 * @throws Error
 * @method flushAsync
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 *
 */
  flushAsync(callback?: callback<void>): Promise<void>

  /**
 * Determines if the dataset supports the indicated operation.
 *
 * @method testCapability
 * @param {string} capability (see {{#crossLink "Constants (OLC)"}}capability
 * list{{/crossLink}})
 * @return {boolean}
 */
  testCapability(capability: string): boolean

  /**
 * Fetch the extent of this layer.
 *
 * @throws Error
 * @method getExtent
 * @param {boolean} [force=true]
 * @return {gdal.Envelope} Bounding envelope
 */
  getExtent(force?: boolean): Envelope

  /**
 * This method returns the current spatial filter for this layer.
 *
 * @throws Error
 * @method getSpatialFilter
 * @return {gdal.Geometry}
 */
  getSpatialFilter(): Geometry

  /**
 * This method sets the geometry to be used as a spatial filter when fetching
 * features via the `layer.features.next()` method. Only features that
 * geometrically intersect the filter geometry will be returned.
 *
 * Alernatively you can pass it envelope bounds as individual arguments.
 *
 * @example
 * ```
 * layer.setSpatialFilter(geometry);
 * layer.setSpatialFilter(minX, minY, maxX, maxY);```
 *
 * @throws Error
 * @method setSpatialFilter
 * @param {gdal.Geometry} filter
 */
  setSpatialFilter(filter: Geometry): void

  /**
 * Sets the attribute query string to be used when fetching features via the
 * `layer.features.next()` method. Only features for which the query evaluates
 * as `true` will be returned.
 *
 * The query string should be in the format of an SQL WHERE clause. For instance
 * "population > 1000000 and population < 5000000" where `population` is an
 * attribute in the layer. The query format is normally a restricted form of
 * SQL WHERE clause as described in the "WHERE" section of the [OGR SQL
 * tutorial](https://gdal.org/user/ogr_sql_dialect.html). In some cases (RDBMS backed
 * drivers) the native capabilities of the database may be used to interprete
 * the WHERE clause in which case the capabilities will be broader than those
 * of OGR SQL.
 *
 * @example
 * ```
 * layer.setAttributeFilter('population > 1000000 and population < 5000000');```
 *
 * @throws Error
 * @method setAttributeFilter
 * @param {string} filter
 */
  setAttributeFilter(filter: string): void
}

export class LayerFeatures implements Iterable<Feature>, AsyncIterable<Feature> {
/**
 * An encapsulation of a {{#crossLink "gdal.Layer"}}Layer{{/crossLink}}'s
 * features.
 *
 * @class gdal.LayerFeatures
 */
  constructor()

  /**
 * Parent layer
 *
 * @attribute layer
 * @type {gdal.Layer}
 */
  layer: Layer
  [Symbol.iterator](): Iterator<Feature>
  [Symbol.asyncIterator](): AsyncIterator<Feature>

  /**
 * Fetch a feature by its identifier.
 *
 * **Important:** The `id` argument is not an index. In most cases it will be
 * zero-based, but in some cases it will not. If iterating, it's best to use the
 * `next()` method.
 *
 * @method get
 * @param {number} id The feature ID of the feature to read.
 * @throws Error
 * @return {gdal.Feature}
 */
  get(id: number): Feature

  /**
 * Fetch a feature by its identifier.
 *
 * **Important:** The `id` argument is not an index. In most cases it will be
 * zero-based, but in some cases it will not. If iterating, it's best to use the
 * `next()` method.
 * {{{async}}}
 *
 * @method getAsync
 * @param {number} id The feature ID of the feature to read.
 * @param {callback<gdal.Feature>} [callback=undefined] {{{cb}}}
 * @throws Error
 * @return {Promise<gdal.Feature>}
 */
  getAsync(id: number, callback?: callback<Feature>): Promise<Feature>

  /**
 * Resets the feature pointer used by `next()` and
 * returns the first feature in the layer.
 *
 * @method first
 * @return {gdal.Feature}
 */
  first(): Feature

  /**
 * Resets the feature pointer used by `next()` and
 * returns the first feature in the layer.
 * {{{async}}}
 *
 * @method firstAsync
 * @param {callback<gdal.Feature>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Feature>}
 */
  firstAsync(callback?: callback<Feature>): Promise<Feature>

  /**
 * Returns the next feature in the layer. Returns null if no more features.
 *
 * @example
 * ```
 * while (feature = layer.features.next()) { ... }```
 *
 * @method next
 * @return {gdal.Feature}
 */
  next(): Feature

  /**
 * Returns the next feature in the layer. Returns null if no more features.
 * {{{async}}}
 *
 * @example
 * ```
 * while (feature = await layer.features.nextAsync()) { ... }```
 *
 * @method nextAsync
 * @param {callback<gdal.Feature>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Feature>}
 */
  nextAsync(callback?: callback<Feature>): Promise<Feature>

  /**
 * Adds a feature to the layer. The feature should be created using the current
 * layer as the definition.
 *
 * @example
 * ```
 * var feature = new gdal.Feature(layer);
 * feature.setGeometry(new gdal.Point(0, 1));
 * feature.fields.set('name', 'somestring');
 * layer.features.add(feature);```
 *
 * @method add
 * @throws Error
 * @param {gdal.Feature} feature
 */
  add(feature: Feature): void

  /**
 * Adds a feature to the layer. The feature should be created using the current
 * layer as the definition.
 * {{{async}}}
 *
 * @example
 * ```
 * var feature = new gdal.Feature(layer);
 * feature.setGeometry(new gdal.Point(0, 1));
 * feature.fields.set('name', 'somestring');
 * await layer.features.addAsync(feature);```
 *
 * @method addAsync
 * @throws Error
 * @param {gdal.Feature} feature
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  addAsync(feature: Feature, callback?: callback<void>): Promise<void>

  /**
 * Returns the number of features in the layer.
 *
 * @method count
 * @param {boolean} [force=true]
 * @return {number} number of features in the layer.
 */
  count(force?: boolean): number

  /**
 * Returns the number of features in the layer.
 * {{{async}}}
 *
 * @method countAsync
 * @param {boolean} [force=true]
 * @param {callback<number>} [callback=undefined] {{{cb}}}
 * @return {Promise<number>} number of features in the layer.
 */
  countAsync(force?: boolean, callback?: callback<number>): Promise<number>

  /**
 * Sets a feature in the layer.
 *
 * @method set
 * @throws Error
 * @param {gdal.Feature} feature
 */
  set(feature: Feature): void

  /**
 * Sets a feature in the layer.
 *
 * @method set
 * @throws Error
 * @param {number} id
 * @param {gdal.Feature} feature
 */
  set(id: number, feature: Feature): void

  /**
 * Sets a feature in the layer.
 * {{{async}}}
 *
 * @method setAsync
 * @throws Error
 * @param {number} id
 * @param {gdal.Feature} feature
 * @param {callback<gdal.Feature>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.Feature>}
 */
  setAsync(id: number, feature: Feature, callback?: callback<Feature>): Promise<Feature>

  /**
 * Removes a feature from the layer.
 *
 * @method remove
 * @throws Error
 * @param {number} id
 */
  remove(id: number): void

  /**
 * Removes a feature from the layer.
 *
 * @method removeAsync
 * @throws Error
 * @param {number} id
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  removeAsync(id: number, callback?: callback<void>): Promise<void>

  /**
 * Iterates through features using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = layer.features.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.LayerFeatures
 * @method map<U>
 * @param {mapCb<gdal.Feature,U>} callback The callback to be called with each {{#crossLink "Feature"}}Feature{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<Feature,U>): U[]

  /**
 * Iterates through all features using a callback function.
 *
 * @example
 * ```
 * layer.features.forEach(function(feature, i) { ... });```
 *
 * @for gdal.LayerFeatures
 * @method forEach
 * @param {forEachCb<gdal.Feature>} callback The callback to be called with each {{#crossLink "Feature"}}Feature{{/crossLink}}
 */
  forEach(callback: forEachCb<Feature>): void
}

export class LayerFields implements Iterable<FieldDefn>, AsyncIterable<FieldDefn> {
/**
 * @class gdal.LayerFields
 */
  constructor()

  /**
 * Parent layer
 *
 * @readOnly
 * @attribute layer
 * @type {gdal.Layer}
 */
  readonly layer: Layer
  [Symbol.iterator](): Iterator<FieldDefn>
  [Symbol.asyncIterator](): AsyncIterator<FieldDefn>

  /**
 * Returns the number of fields.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Find the index of field in the layer.
 *
 * @method indexOf
 * @param {string} field
 * @return {number} Field index, or -1 if the field doesn't exist
 */
  indexOf(field: string): number

  /**
 * Returns a field definition.
 *
 * @throws Error
 * @method get
 * @param {string|number} field Field name or index (0-based)
 * @return {gdal.FieldDefn}
 */
  get(field: string|number): FieldDefn

  /**
 * Returns a list of field names.
 *
 * @throws Error
 * @method getNames
 * @return {string[]} List of strings.
 */
  getNames(): string[]

  /**
 * Removes a field.
 *
 * @throws Error
 * @method remove
 * @param {string|number} field Field name or index (0-based)
 */
  remove(field: string|number): void

  /**
 * Adds field(s).
 *
 * @throws Error
 * @method add
 * @param {gdal.FieldDefn|gdal.FieldDefn[]} defs A field definition, or array of field
 * definitions.
 * @param {boolean} [approx=true]
 */
  add(defs: FieldDefn|FieldDefn[], approx?: boolean): void

  /**
 * Reorders fields.
 *
 * @example
 * ```
 * // reverse field order
 * layer.fields.reorder([2,1,0]);```
 *
 * @throws Error
 * @method reorder
 * @param {number[]} map An array of new indexes (integers)
 */
  reorder(map: number[]): void

  /**
 * Iterates through all field definitions using a callback function.
 *
 * @example
 * ```
 * layer.fields.forEach(function(array, i) { ... });```
 *
 * @for gdal.LayerFields
 * @method forEach
 * @param {forEachCb<gdal.FieldDefn>} callback The callback to be called with each {{#crossLink "FieldDefn"}}FieldDefn{{/crossLink}}
 */
  forEach(callback: forEachCb<FieldDefn>): void

  /**
 * Iterates through field definitions using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = layer.fields.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.LayerFields
 * @method map<U>
 * @param {mapCb<gdal.FieldDefn,U>} callback The callback to be called with each {{#crossLink "FieldDefn"}}FieldDefn{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<FieldDefn,U>): U[]

  /**
 * Creates a LayerFields instance from an object of keys and values.
 *
 * @method fromJSON
 * @for gdal.LayerFields
 * @param {object} object
 * @param {boolean} [approx_ok=false]
 */
  fromJSON(object: object, approx_ok?: boolean): void
}

export class LineString extends SimpleCurve {
/**
 * Concrete representation of a multi-vertex line.
 *
 * @example
 * ```
 * var lineString = new gdal.LineString();
 * lineString.points.add(new gdal.Point(0,0));
 * lineString.points.add(new gdal.Point(0,10));```
 *
 * @constructor
 * @class gdal.LineString
 * @extends gdal.SimpleCurve
 */
  constructor()
}

export class LineStringPoints implements Iterable<Point> {
/**
 * An encapsulation of a {{#crossLink
 * "gdal.LineString"}}LineString{{/crossLink}}'s points.
 *
 * @class gdal.LineStringPoints
 */
  constructor()
  [Symbol.iterator](): Iterator<Point>

  /**
 * Returns the number of points that are part of the line string.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Reverses the order of all the points.
 *
 * @method reverse
 */
  reverse(): void

  /**
 * Adjusts the number of points that make up the line string.
 *
 * @method resize
 * @param {number} count
 */
  resize(count: number): void

  /**
 * Returns the point at the specified index.
 *
 * @method get
 * @param {number} index 0-based index
 * @throws Error
 * @return {gdal.Point}
 */
  get(index: number): Point

  /**
 * Sets the point at the specified index.
 *
 * @example
 * ```
 * lineString.points.set(0, new gdal.Point(1, 2));```
 *
 * @method set
 * @throws Error
 * @param {number} index 0-based index
 * @param {gdal.Point|xyz} point
 */
  set(index: number, point: Point|xyz): void

  /**
 * @method set
 * @throws Error
 * @param {number} index 0-based index
 * @param {number} x
 * @param {number} y
 * @param {number} [z]
 */
  set(index: number, x: number, y: number, z?: number): void

  /**
 * Adds point(s) to the line string. Also accepts any object with an x and y
 * property.
 *
 * @example
 * ```
 * lineString.points.add(new gdal.Point(1, 2));
 * lineString.points.add([
 *     new gdal.Point(1, 2)
 *     new gdal.Point(3, 4)
 * ]);```
 *
 * @method add
 * @throws Error
 * @param {gdal.Point|xyz|(gdal.Point|xyz)[]} points
 */
  add(points: Point|xyz|(Point|xyz)[]): void

  /**
 *
 * @method add
 * @throws Error
 * @param {number} x
 * @param {number} y
 * @param {number} [z]
 */
  add(x: number, y: number, z?: number): void

  /**
 * Iterates through all points using a callback function.
 *
 * @example
 * ```
 * lineString.points.forEach(function(array, i) { ... });```
 *
 * @for gdal.LineStringPoints
 * @method forEach
 * @param {forEachCb<gdal.Point>} callback The callback to be called with each {{#crossLink "Point"}}Point{{/crossLink}}
 */
  forEach(callback: forEachCb<Point>): void

  /**
 * Iterates through points using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = lineString.points.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.LineStringPoints
 * @method map<U>
 * @param {mapCb<gdal.Point,U>} callback The callback to be called with each {{#crossLink "Point"}}Point{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<Point,U>): U[]

  /**
 * Outputs all points as a regular javascript array.
 *
 * @for gdal.LineStringPoints
 * @method toArray
 * @return {gdal.Point[]} List of {{#crossLink "Point"}}Point{{/crossLink}} instances.
 */
  toArray(): Point[]
}

export class LinearRing extends LineString {
/**
 * Concrete representation of a closed ring.
 *
 * @constructor
 * @class gdal.LinearRing
 * @extends gdal.LineString
 */
  constructor()

  /**
 * Computes the area enclosed by the ring.
 *
 * @method getArea
 * @return {number}
 */
  getArea(): number
}

export class MDArray {
/**
 * A representation of an array with access methods.
 *
 * @class gdal.MDArray
 */
  constructor()

  /**
 * Spatial reference associated with MDArray
 *
 * @throws Error
 * @attribute srs
 * @type {gdal.SpatialReference}
 */
  srs: SpatialReference

  /**
 * Raster value offset.
 *
 * @attribute offset
 * @type {number}
 */
  offset: number

  /**
 * Raster value scale.
 *
 * @attribute scale
 * @type {number}
 */
  scale: number

  /**
 * No data value for this array.
 *
 * @attribute noDataValue
 * @type {number|null}
 */
  noDataValue: number|null

  /**
 * Raster unit type (name for the units of this raster's values).
 * For instance, it might be `"m"` for an elevation model in meters,
 * or `"ft"` for feet. If no units are available, a value of `""`
 * will be returned.
 *
 * @attribute unitType
 * @type {string}
 */
  unitType: string

  /**
 * @readOnly
 * @attribute dataType
 * @type {string}
 */
  readonly dataType: string

  /**
 * @readOnly
 * @attribute dimensions
 * @type {gdal.GroupDimensions}
 */
  readonly dimensions: GroupDimensions

  /**
 * @readOnly
 * @attribute attributes
 * @type {gdal.ArrayAttributes}
 */
  readonly attributes: ArrayAttributes

  /**
 * @readOnly
 * @attribute description
 * @type {string}
 */
  readonly description: string

  /**
 * The flattened length of the array
 *
 * @readOnly
 * @attribute length
 * @type {number}
 */
  readonly length: number

  /**
 * Read data from the MDArray
 *
 * This will extract the context of a (hyper-)rectangle from the array into a buffer.
 * If the buffer can be passed as an argument or it can be allocated by the function.
 * Generalized n-dimensional strides are supported.
 *
 * Although this method can be used in its raw form, it works best when used with the ndarray plugin.
 *
 * @method read
 * @throws Error
 * @param {MDArrayOptions} options
 * @param {number[]} options.origin An array of the starting indices
 * @param {number[]} options.span An array specifying the number of elements to read in each dimension
 * @param {number[]} [options.stride] An array of strides for the output array, mandatory if the array is specified
 * @param {string} [options.data_type] See {{#crossLink "Constants (GDT)"}}GDT constants{{/crossLink}}.
 * @param {TypedArray} [options.data] The TypedArray (https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView#Typed_array_subclasses) to put the data in. A new array is created if not given.
 * @return {TypedArray}
 */
  read(options: MDArrayOptions): TypedArray

  /**
 * Read data from the MDArray
 * {{{async}}}
 *
 * This will extract the context of a (hyper-)rectangle from the array into a buffer.
 * If the buffer can be passed as an argument or it can be allocated by the function.
 * Generalized n-dimensional strides are supported.
 *
 * Although this method can be used in its raw form, it works best when used with the ndarray plugin.
 *
 * @method readAsync
 * @throws Error
 * @param {MDArrayOptions} options
 * @param {number[]} options.origin An array of the starting indices
 * @param {number[]} options.span An array specifying the number of elements to read in each dimension
 * @param {number[]} [options.stride] An array of strides for the output array, mandatory if the array is specified
 * @param {string} [options.data_type] See {{#crossLink "Constants (GDT)"}}GDT constants{{/crossLink}}.
 * @param {TypedArray} [options.data] The TypedArray (https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView#Typed_array_subclasses) to put the data in. A new array is created if not given.
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 * @param {callback<TypedArray>} [callback=undefined] {{{cb}}}
 * @return {Promise<TypedArray>} A TypedArray (https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView#Typed_array_subclasses) of values.
 */
  readAsync(options: MDArrayOptions, callback?: callback<TypedArray>): Promise<TypedArray>

  /**
 * Get a partial view of the MDArray
 *
 * The slice expression uses the same syntax as NumPy basic slicing and indexing. See (https://www.numpy.org/devdocs/reference/arrays.indexing.html#basic-slicing-and-indexing). Or it can use field access by name. See (https://www.numpy.org/devdocs/reference/arrays.indexing.html#field-access).
 *
 * @method getView
 * @throws Error
 * @param {string} view
 * @return {gdal.MDArray}
 */
  getView(view: string): MDArray

  /**
 * Return an array that is a mask for the current array.
 *
 * This array will be of type Byte, with values set to 0 to indicate invalid pixels of the current array, and values set to 1 to indicate valid pixels.
 *
 * The generic implementation honours the NoDataValue, as well as various netCDF CF attributes: missing_value, _FillValue, valid_min, valid_max and valid_range.
 *
 * @method getMask
 * @throws Error
 * @return {gdal.MDArray}
 */
  getMask(): MDArray

  /**
 * Return a view of this array as a gdal.Dataset (ie 2D)
 *
 * In the case of > 2D arrays, additional dimensions will be represented as raster bands.
 *
 * @method asDataset
 * @param {number|string} x dimension to be used as X axis
 * @param {number|string} y dimension to be used as Y axis
 * @throws Error
 * @return {gdal.Dataset}
 */
  asDataset(x: number|string, y: number|string): Dataset
}

export class MultiCurve extends GeometryCollection {
/**
 * @constructor
 * @class gdal.MultiCurve
 * @extends gdal.GeometryCollection
 */
  constructor()

  /**
 * Converts it to a polygon.
 *
 * @method polygonize
 * @return {gdal.Polygon}
 */
  polygonize(): Polygon
}

export class MultiLineString extends GeometryCollection {
/**
 * @constructor
 * @class gdal.MultiLineString
 * @extends gdal.GeometryCollection
 */
  constructor()

  /**
 * Converts it to a polygon.
 *
 * @method polygonize
 * @return {gdal.Polygon}
 */
  polygonize(): Polygon
}

export class MultiPoint extends GeometryCollection {
/**
 * @constructor
 * @class gdal.MultiPoint
 * @extends gdal.GeometryCollection
 */
  constructor()
}

export class MultiPolygon extends GeometryCollection {
/**
 * @constructor
 * @class gdal.MultiPolygon
 * @extends gdal.GeometryCollection
 */
  constructor()

  /**
 * Unions all the geometries and returns the result.
 *
 * @method unionCascaded
 * @return {gdal.Geometry}
 */
  unionCascaded(): Geometry

  /**
 * Computes the combined area of the collection.
 *
 * @method getArea
 * @return {number}
 */
  getArea(): number
}

export class Point extends Geometry {
/**
 * Point class.
 *
 * @constructor
 * @class gdal.Point
 * @extends gdal.Geometry
 * @param {number} x
 * @param {number} y
 * @param {number} [z]
 */
  constructor(x: number, y: number, z?: number)

  /**
 * @attribute x
 * @type {number}
 */
  x: number

  /**
 * @attribute y
 * @type {number}
 */
  y: number

  /**
 * @attribute z
 * @type {number}
 */
  z: number
}

export class Polygon extends Geometry {
/**
 * Concrete class representing polygons.
 *
 * @constructor
 * @class gdal.Polygon
 * @extends gdal.Geometry
 */
  constructor()

  /**
 * The rings that make up the polygon geometry.
 *
 * @attribute rings
 * @type {gdal.PolygonRings}
 */
  rings: PolygonRings

  /**
 * Computes the area of the polygon.
 *
 * @method getArea
 * @return {number}
 */
  getArea(): number
}

export class PolygonRings implements Iterable<LineString> {
/**
 * A collection of polygon rings, used by {{#crossLink
 * "gdal.Polygon"}}gdal.Polygon{{/crossLink}}.
 *
 * @class gdal.PolygonRings
 */
  constructor()
  [Symbol.iterator](): Iterator<LineString>

  /**
 * Returns the number of rings that exist in the collection.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Returns the ring at the specified index. The ring
 * at index `0` will always be the polygon's exterior ring.
 *
 * @example
 * ```
 * var exterior = polygon.rings.get(0);
 * var interior = polygon.rings.get(1);```
 *
 * @method get
 * @param {number} index
 * @throws Error
 * @return {gdal.LinearRing}
 */
  get(index: number): LinearRing

  /**
 * Adds a ring to the collection.
 *
 * @example
 * ```
 * var ring1 = new gdal.LinearRing();
 * ring1.points.add(0,0);
 * ring1.points.add(1,0);
 * ring1.points.add(1,1);
 * ring1.points.add(0,1);
 * ring1.points.add(0,0);
 *
 * // one at a time:
 * polygon.rings.add(ring1);
 *
 * // many at once:
 * polygon.rings.add([ring1, ...]);```
 *
 * @method add
 * @param {gdal.LinearRing|gdal.LinearRing[]} rings
 */
  add(rings: LinearRing|LinearRing[]): void

  /**
 * Iterates through all rings using a callback function.
 *
 * @example
 * ```
 * polygon.rings.forEach(function(array, i) { ... });```
 *
 * @for gdal.PolygonRings
 * @method forEach
 * @param {forEachCb<gdal.LineString>} callback The callback to be called with each {{#crossLink "LineString"}}LineString{{/crossLink}}
 */
  forEach(callback: forEachCb<LineString>): void

  /**
 * Iterates through rings using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = polygon.rings.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.PolygonRings
 * @method map<U>
 * @param {mapCb<gdal.LineString,U>} callback The callback to be called with each {{#crossLink "LineString"}}LineString{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<LineString,U>): U[]

  /**
 * Outputs all rings as a regular javascript array.
 *
 * @for gdal.PolygonRings
 * @method toArray
 * @return {gdal.LineString[]} List of {{#crossLink "LineString"}}LineString{{/crossLink}} instances.
 */
  toArray(): LineString[]
}

export class RasterBand {
/**
 * A single raster band (or channel).
 *
 * @class gdal.RasterBand
 */
  constructor()

  /**
 * @readOnly
 * @attribute ds
 * @type {gdal.Dataset}
 */
  readonly ds: Dataset

  /**
 * @readOnly
 * @attribute overviews
 * @type {gdal.RasterBandOverviews}
 */
  readonly overviews: RasterBandOverviews

  /**
 * @readOnly
 * @attribute pixels
 * @type {gdal.RasterBandPixels}
 */
  readonly pixels: RasterBandPixels

  /**
 * @readOnly
 * @attribute id
 * @type {number|null}
 */
  readonly id: number|null

  /**
 * @readOnly
 * @attribute idAsync
 * @type {Promise<number|null>}
 * {{{async_getter}}}
 */
  readonly idAsync: Promise<number|null>

  /**
 * Name of of band.
 *
 * @readOnly
 * @attribute description
 * @type {string}
 */
  readonly description: string

  /**
 * Name of of band.
 * {{{async_getter}}}
 *
 * @readOnly
 * @attribute descriptionAsync
 * @type {Promise<string>}
 */
  readonly descriptionAsync: Promise<string>

  /**
 * Size object containing `"x"` and `"y"` properties.
 *
 * @readOnly
 * @attribute size
 * @type {xyz}
 */
  readonly size: xyz

  /**
 * Size object containing `"x"` and `"y"` properties.
 * {{{async_getter}}}
 *
 * @readOnly
 * @attribute sizeAsync
 * @type {Promise<xyz>}
 */
  readonly sizeAsync: Promise<xyz>

  /**
 * Size object containing `"x"` and `"y"` properties.
 *
 * @readOnly
 * @attribute blockSize
 * @type {xyz}
 */
  readonly blockSize: xyz

  /**
 * Size object containing `"x"` and `"y"` properties.
 * {{{async_getter}}}
 *
 * @readOnly
 * @attribute blockSizeAsync
 * @type {Promise<xyz>}
 */
  readonly blockSizeAsync: Promise<xyz>

  /**
 * Minimum value for this band.
 *
 * @readOnly
 * @attribute minimum
 * @type {number}
 */
  readonly minimum: number

  /**
 * Minimum value for this band.
 * {{{async_getter}}}
 *
 * @readOnly
 * @attribute minimumAsync
 * @type {Promise<number>}
 */
  readonly minimumAsync: Promise<number>

  /**
 * Maximum value for this band.
 *
 * @readOnly
 * @attribute maximum
 * @type {number}
 */
  readonly maximum: number

  /**
 * Maximum value for this band.
 * {{{async_getter}}}
 *
 * @readOnly
 * @attribute maximumAsync
 * @type {Promise<number>}
 */
  readonly maximumAsync: Promise<number>

  /**
 * Raster value offset.
 *
 * @attribute offset
 * @type {number}
 */
  offset: number

  /**
 * Raster value offset.
 * {{{async_getter}}}
 *
 * @attribute offsetAsync
 * @readOnly
 * @type {Promise<number>}
 */
  readonly offsetAsync: Promise<number>

  /**
 * Raster value scale.
 *
 * @attribute scale
 * @type {number}
 */
  scale: number

  /**
 * Raster value scale.
 * {{{async_getter}}}
 *
 * @attribute scaleAsync
 * @readOnly
 * @type {Promise<number>}
 */
  readonly scaleAsync: Promise<number>

  /**
 * No data value for this band.
 *
 * @attribute noDataValue
 * @type {number|null}
 */
  noDataValue: number|null

  /**
 * No data value for this band.
 * {{{async_getter}}}
 *
 * @attribute noDataValueAsync
 * @readOnly
 * @type {Promise<number|null>}
 */
  readonly noDataValueAsync: Promise<number|null>

  /**
 * Raster unit type (name for the units of this raster's values).
 * For instance, it might be `"m"` for an elevation model in meters,
 * or `"ft"` for feet. If no units are available, a value of `""`
 * will be returned.
 *
 * @attribute unitType
 * @type {string}
 */
  unitType: string

  /**
 * Raster unit type (name for the units of this raster's values).
 * For instance, it might be `"m"` for an elevation model in meters,
 * or `"ft"` for feet. If no units are available, a value of `""`
 * will be returned.
 * {{{async_getter}}}
 *
 * @attribute unitTypeAsync
 * @readOnly
 * @type {Promise<string>}
 */
  readonly unitTypeAsync: Promise<string>

  /**
 *
 * Pixel data type ({{#crossLink "Constants (GDT)"}}see GDT
 * constants{{/crossLink}}) used for this band.
 *
 * @readOnly
 * @attribute dataType
 * @type {string|undefined}
 */
  readonly dataType: string|undefined

  /**
 *
 * Pixel data type ({{#crossLink "Constants (GDT)"}}see GDT
 * constants{{/crossLink}}) used for this band.
 * {{{async_getter}}}
 *
 * @readOnly
 * @attribute dataTypeAsync
 * @type {Promise<string|undefined>}
 */
  readonly dataTypeAsync: Promise<string|undefined>

  /**
 * Indicates if the band is read-only.
 *
 * @readOnly
 * @attribute readOnly
 * @type {boolean}
 */
  readonly readOnly: boolean

  /**
 * Indicates if the band is read-only.
 * {{{async_getter}}}
 *
 * @readOnly
 * @attribute readOnlyAsync
 * @type {Promise<boolean>}
 */
  readonly readOnlyAsync: Promise<boolean>

  /**
 * An indicator if the underlying datastore can compute arbitrary overviews
 * efficiently, such as is the case with OGDI over a network. Datastores with
 * arbitrary overviews don't generally have any fixed overviews, but GDAL's
 * `RasterIO()` method can be used in downsampling mode to get overview
 * data efficiently.
 *
 * @readOnly
 * @attribute hasArbitraryOverviews
 * @type {boolean}
 */
  readonly hasArbitraryOverviews: boolean

  /**
 * An indicator if the underlying datastore can compute arbitrary overviews
 * efficiently, such as is the case with OGDI over a network. Datastores with
 * arbitrary overviews don't generally have any fixed overviews, but GDAL's
 * `RasterIO()` method can be used in downsampling mode to get overview
 * data efficiently.
 * {{{async_getter}}}
 *
 * @readOnly
 * @attribute hasArbitraryOverviewsAsync
 * @type {Promise<boolean>}
 */
  readonly hasArbitraryOverviewsAsync: Promise<boolean>

  /**
 * List of list of category names for this raster.
 *
 * @attribute categoryNames
 * @type {string[]}
 */
  categoryNames: string[]

  /**
 * List of list of category names for this raster.
 * {{{async_getter}}}
 *
 * @attribute categoryNamesAsync
 * @readOnly
 * @type {Promise<string[]>}
 */
  readonly categoryNamesAsync: Promise<string[]>

  /**
 * Color interpretation mode ({{#crossLink "Constants (GCI)"}}see GCI
 * constants{{/crossLink}}).
 *
 * @attribute colorInterpretation
 * @type {string}
 */
  colorInterpretation: string

  /**
 * Color interpretation mode ({{#crossLink "Constants (GCI)"}}see GCI
 * constants{{/crossLink}}).
 * {{{async_getter}}}
 *
 * @attribute colorInterpretationAsync
 * @readOnly
 * @type {Promise<string>}
 */
  readonly colorInterpretationAsync: Promise<string>

  /**
 * Color table ({{#crossLink "ColorTable"}}see gdal.ColorTable{{/crossLink}}).
 *
 * @attribute colorTable
 * @type {gdal.ColorTable}
 */
  colorTable: ColorTable

  /**
 * Color table ({{#crossLink "ColorTable"}}see gdal.ColorTable{{/crossLink}}).
 * {{{async_getter}}}
 *
 * @attribute colorTableAsync
 * @readOnly
 * @type {Promise<gdal.ColorTable>}
 */
  readonly colorTableAsync: Promise<ColorTable>

  /**
 * Saves changes to disk.
 * @method flush
 */
  flush(): void

  /**
 * Saves changes to disk.
 * {{{async}}}
 *
 * @method flushAsync
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 *
 */
  flushAsync(callback?: callback<void>): Promise<void>

  /**
 * Return the status flags of the mask band associated with the band.
 *
 * The result will be a bitwise OR-ed set of status flags with the following
 * available definitions that may be extended in the future:
 *
 *   - `GMF_ALL_VALID` (`0x01`): There are no invalid pixels, all mask values
 * will be 255. When used this will normally be the only flag set.
 *   - `GMF_PER_DATASET` (`0x02`): The mask band is shared between all bands on
 * the dataset.
 *   - `GMF_ALPHA` (`0x04`): The mask band is actually an alpha band and may
 * have values other than 0 and 255.
 *   - `GMF_NODATA` (`0x08`): Indicates the mask is actually being generated
 * from nodata values. (mutually exclusive of `GMF_ALPHA`)
 *
 * @method getMaskFlags
 * @return {number} Mask flags
 */
  getMaskFlags(): number

  /**
 * Adds a mask band to the current band.
 *
 * @throws Error
 * @method createMaskBand
 * @param {number} flags Mask flags
 */
  createMaskBand(flags: number): void

  /**
 * Return the mask band associated with the band.
 *
 * @method getMaskBand
 * @return {gdal.RasterBand}
 */
  getMaskBand(): RasterBand

  /**
 * Fill this band with a constant value.
 *
 * @throws Error
 * @method fill
 * @throws Error
 * @param {number} real_value
 * @param {number} [imaginary_value]
 */
  fill(real_value: number, imaginary_value?: number): void

  /**
 * Fill this band with a constant value.
 *
 * @throws Error
 * @method fillAsync
 * @throws Error
 * @param {number} real_value
 * @param {number} [imaginary_value]
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  fillAsync(real_value: number, imaginary_value?: number, callback?: callback<void>): Promise<void>

  /**
 * Return a view of this raster band as a 2D multidimensional GDALMDArray.
 *
 * The band must be linked to a GDALDataset.
 *
 * If the dataset has a geotransform attached, the X and Y dimensions of the returned array will have an associated indexing variable.
 *
 * Requires GDAL>=3.3 with MDArray support, won't be defined otherwise
 *
 * @throws Error
 * @method asMDArray
 * @return {gdal.MDArray}
 */
  asMDArray(): MDArray

  /**
 * Fetch image statistics.
 *
 * Returns the minimum, maximum, mean and standard deviation of all pixel values
 * in this band. If approximate statistics are sufficient, the
 * `allow_approximation` argument can be set to `true` in which case overviews,
 * or a subset of image tiles may be used in computing the statistics.
 *
 * @throws Error
 * @method getStatistics
 * @param {boolean} allow_approximation If `true` statistics may be computed
 * based on overviews or a subset of all tiles.
 * @param {boolean} force If `false` statistics will only be returned if it can
 * be done without rescanning the image.
 * @return {object} Statistics containing `"min"`, `"max"`, `"mean"`,
 * `"std_dev"` properties.
 */
  getStatistics(allow_approximation: boolean, force: boolean): object

  /**
 * Computes image statistics.
 *
 * Returns the minimum, maximum, mean and standard deviation of all pixel values
 * in this band. If approximate statistics are sufficient, the
 * `allow_approximation` argument can be set to `true` in which case overviews,
 * or a subset of image tiles may be used in computing the statistics.
 *
 * @throws Error
 * @method computeStatistics
 * @param {boolean} allow_approximation If `true` statistics may be computed
 * based on overviews or a subset of all tiles.
 * @return {stats} Statistics containing `"min"`, `"max"`, `"mean"`,
 * `"std_dev"` properties.
 */
  computeStatistics(allow_approximation: boolean): stats

  /**
 * Computes image statistics.
 * {{async}}
 *
 * Returns the minimum, maximum, mean and standard deviation of all pixel values
 * in this band. If approximate statistics are sufficient, the
 * `allow_approximation` argument can be set to `true` in which case overviews,
 * or a subset of image tiles may be used in computing the statistics.
 *
 * @throws Error
 * @method computeStatisticsAsync
 * @param {boolean} allow_approximation If `true` statistics may be computed
 * based on overviews or a subset of all tiles.
 * @param {callback<stats>} [callback=undefined] {{{cb}}}
 * @return {Promise<stats>} Statistics containing `"min"`, `"max"`, `"mean"`,
 * `"std_dev"` properties.
 */
  computeStatisticsAsync(allow_approximation: boolean, callback?: callback<stats>): Promise<stats>

  /**
 * Set statistics on the band. This method can be used to store
 * min/max/mean/standard deviation statistics.
 *
 * @throws Error
 * @method setStatistics
 * @param {number} min
 * @param {number} max
 * @param {number} mean
 * @param {number} std_dev
 */
  setStatistics(min: number, max: number, mean: number, std_dev: number): void

  /**
 * Returns band metadata
 *
 * @method getMetadata
 * @param {string} [domain]
 * @return {any}
 */
  getMetadata(domain?: string): any

  /**
 * Returns band metadata
 *
 * @method getMetadataAsync
 * @param {string} [domain]
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<any>}
 */
  getMetadataAsync(domain?: string, callback?: callback<void>): Promise<any>

  /**
 * Set metadata. Can return a warning (false) for formats not supporting persistent metadata.
 *
 * @method setMetadata
 * @param {object|string[]} metadata
 * @param {string} [domain]
 * @return {boolean}
 */
  setMetadata(metadata: object|string[], domain?: string): boolean

  /**
 * Set metadata. Can return a warning (false) for formats not supporting persistent metadata.
 * {{{async}}}
 *
 * @method setMetadataAsync
 * @param {object|string[]} metadata
 * @param {string} [domain]
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<boolean>}
 */
  setMetadataAsync(metadata: object|string[], domain?: string, callback?: callback<void>): Promise<boolean>
}

export class RasterBandOverviews implements Iterable<RasterBand>, AsyncIterable<RasterBand> {
/**
 * An encapsulation of a {{#crossLink
 * "gdal.RasterBand"}}RasterBand{{/crossLink}} overview functionality.
 *
 * @class gdal.RasterBandOverviews
 */
  constructor()
  [Symbol.iterator](): Iterator<RasterBand>
  [Symbol.asyncIterator](): AsyncIterator<RasterBand>

  /**
 * Fetches the overview at the provided index.
 *
 * @method get
 * @throws Error
 * @param {number} index 0-based index
 * @return {gdal.RasterBand}
 */
  get(index: number): RasterBand

  /**
 * Fetches the overview at the provided index.
 * {{{async}}}
 *
 * @method getAsync
 * @throws Error
 * @param {number} index 0-based index
 * @param {callback<gdal.RasterBand>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.RasterBand>}
 */
  getAsync(index: number, callback?: callback<RasterBand>): Promise<RasterBand>

  /**
 * Fetch best sampling overview.
 *
 * Returns the most reduced overview of the given band that still satisfies the
 * desired number of samples. This function can be used with zero as the number
 * of desired samples to fetch the most reduced overview. The same band as was
 * passed in will be returned if it has not overviews, or if none of the
 * overviews have enough samples.
 *
 * @method getBySampleCount
 * @param {number} samples
 * @return {gdal.RasterBand}
 */
  getBySampleCount(samples: number): RasterBand

  /**
 * Fetch best sampling overview.
 * {{{async}}}
 *
 * Returns the most reduced overview of the given band that still satisfies the
 * desired number of samples. This function can be used with zero as the number
 * of desired samples to fetch the most reduced overview. The same band as was
 * passed in will be returned if it has not overviews, or if none of the
 * overviews have enough samples.
 *
 * @method getBySampleCountAsync
 * @param {number} samples
 * @param {callback<gdal.RasterBand>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.RasterBand>}
 */
  getBySampleCountAsync(samples: number, callback?: callback<RasterBand>): Promise<RasterBand>

  /**
 * Returns the number of overviews.
 *
 * @method count
 * @return {number}
 */
  count(): number

  /**
 * Returns the number of overviews.
 *
 * @method countAsync
 * @param {callback<gdal.RasterBand>} [callback=undefined] {{{cb}}}
 * @return {Promise<number>}
 */
  countAsync(callback?: callback<RasterBand>): Promise<number>

  /**
 * Iterates through all overviews using a callback function.
 *
 * @example
 * ```
 * band.overviews.forEach(function(array, i) { ... });```
 *
 * @for gdal.RasterBandOverviews
 * @method forEach
 * @param {forEachCb<gdal.RasterBand>} callback The callback to be called with each {{#crossLink "RasterBand"}}RasterBand{{/crossLink}}
 */
  forEach(callback: forEachCb<RasterBand>): void

  /**
 * Iterates through overviews using a callback function and builds
 * an array of the returned values.
 *
 * @example
 * ```
 * var result = band.overviews.map(function(array, i) {
 *     return value;
 * });```
 *
 * @for gdal.RasterBandOverviews
 * @method map<U>
 * @param {mapCb<gdal.RasterBand,U>} callback The callback to be called with each {{#crossLink "RasterBand"}}RasterBand{{/crossLink}}
 * @return {U[]}
 */
  map<U>(callback: mapCb<RasterBand,U>): U[]
}

export class RasterBandPixels {
/**
 * A representation of a {{#crossLink
 * "gdal.RasterBand"}}RasterBand{{/crossLink}}'s pixels.
 *
 *
 * Note: Typed arrays should be created with an external ArrayBuffer for
 * versions of node >= 0.11
 * ```
 * var n = 16*16;
 * var data = new Float32Array(new ArrayBuffer(n*4));
 * //read data into the existing array
 * band.pixels.read(0,0,16,16,data);```
 *
 * @class gdal.RasterBandPixels
 */
  constructor()

  /**
 * Parent raster band
 *
 * @readOnly
 * @attribute band
 * @type {gdal.RasterBand}
 */
  readonly band: RasterBand

  /**
 * Returns the value at the x, y coordinate.
 *
 * @method get
 * @param {number} x
 * @param {number} y
 * @throws Error
 * @return {number}
 */
  get(x: number, y: number): number

  /**
 * Returns the value at the x, y coordinate.
 * {{{async}}}
 *
 * @method getAsync
 * @param {number} x
 * @param {number} y
 * @param {callback<number>} [callback=undefined] {{{cb}}}
 * @return {Promise<number>}
 */
  getAsync(x: number, y: number, callback?: callback<number>): Promise<number>

  /**
 * Sets the value at the x, y coordinate.
 *
 * @method set
 * @param {number} x
 * @param {number} y
 * @param {number} value
 */
  set(x: number, y: number, value: number): void

  /**
 * Sets the value at the x, y coordinate.
 * {{{async}}}
 *
 * @method setAsync
 * @param {number} x
 * @param {number} y
 * @param {number} value
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  setAsync(x: number, y: number, value: number, callback?: callback<void>): Promise<void>

  /**
 * Reads a region of pixels.
 *
 * @method read
 * @throws Error
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {TypedArray} [data] The TypedArray (https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView#Typed_array_subclasses) to put the data in. A new array is created if not given.
 * @param {ReadOptions} [options]
 * @param {number} [options.buffer_width=x_size]
 * @param {number} [options.buffer_height=y_size]
 * @param {string} [options.data_type] See {{#crossLink "Constants (GDT)"}}GDT constants{{/crossLink}}.
 * @param {number} [options.pixel_space]
 * @param {number} [options.line_space]
 * @param {string} [options.resampling] Resampling algorithm ({{#crossLink "Constants (GRA)"}}available options{{/crossLink}})
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 * @return {TypedArray} A TypedArray (https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView#Typed_array_subclasses) of values.
 */
  read(x: number, y: number, width: number, height: number, data?: TypedArray, options?: ReadOptions): TypedArray

  /**
 * Asynchronously reads a region of pixels.
 * {{{async}}}
 *
 * @method readAsync
 * @param {number} x
 * @param {number} y
 * @param {number} width the width
 * @param {number} height
 * @param {TypedArray} [data] The TypedArray (https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView#Typed_array_subclasses) to put the data in. A new array is created if not given.
 * @param {ReadOptions} [options]
 * @param {number} [options.buffer_width=x_size]
 * @param {number} [options.buffer_height=y_size]
 * @param {string} [options.data_type] See {{#crossLink "Constants (GDT)"}}GDT constants{{/crossLink}}.
 * @param {number} [options.pixel_space]
 * @param {number} [options.line_space]
 * @param {string} [options.resampling] Resampling algorithm ({{#crossLink "Constants (GRA)"}}available options{{/crossLink}})
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 * @param {callback<TypedArray>} [callback=undefined] {{{cb}}}
 * @return {Promise<TypedArray>} A TypedArray (https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView#Typed_array_subclasses) of values.
 */
  readAsync(x: number, y: number, width: number, height: number, data?: TypedArray, options?: ReadOptions, callback?: callback<TypedArray>): Promise<TypedArray>

  /**
 * Writes a region of pixels.
 *
 * @method write
 * @throws Error
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {TypedArray} [data] The TypedArray (https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView#Typed_array_subclasses) to write to the band.
 * @param {WriteOptions} [options]
 * @param {number} [options.buffer_width=x_size]
 * @param {number} [options.buffer_height=y_size]
 * @param {number} [options.pixel_space]
 * @param {number} [options.line_space]
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 */
  write(x: number, y: number, width: number, height: number, data?: TypedArray, options?: WriteOptions): void

  /**
 * Asynchronously writes a region of pixels.
 * {{{async}}}
 *
 * @method writeAsync
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {TypedArray} [data] The TypedArray (https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView#Typed_array_subclasses) to write to the band.
 * @param {WriteOptions} [options]
 * @param {number} [options.buffer_width=x_size]
 * @param {number} [options.buffer_height=y_size]
 * @param {number} [options.pixel_space]
 * @param {number} [options.line_space]
 * @param {ProgressCb} [options.progress_cb] {{{progress_cb}}}
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  writeAsync(x: number, y: number, width: number, height: number, data?: TypedArray, options?: WriteOptions, callback?: callback<void>): Promise<void>

  /**
 * Reads a block of pixels.
 *
 * @method readBlock
 * @throws Error
 * @param {number} x
 * @param {number} y
 * @param {TypedArray} [data] The TypedArray (https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView#Typed_array_subclasses) to put the data in. A new array is created if not given.
 * @return {TypedArray} A TypedArray (https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView#Typed_array_subclasses) of values.
 */
  readBlock(x: number, y: number, data?: TypedArray): TypedArray

  /**
 * Reads a block of pixels.
 * {{{async}}}
 *
 * @method readBlockAsync
 * @throws Error
 * @param {number} x
 * @param {number} y
 * @param {TypedArray} [data] The TypedArray (https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView#Typed_array_subclasses) to put the data in. A new array is created if not given.
 * @param {callback<TypedArray>} [callback=undefined] {{{cb}}}
 * @return {Promise<TypedArray>} A TypedArray (https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView#Typed_array_subclasses) of values.
 */
  readBlockAsync(x: number, y: number, data?: TypedArray, callback?: callback<TypedArray>): Promise<TypedArray>

  /**
 * Writes a block of pixels.
 *
 * @method writeBlock
 * @throws Error
 * @param {number} x
 * @param {number} y
 * @param {TypedArray} data The TypedArray (https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView#Typed_array_subclasses) of values to write to the band.
 */
  writeBlock(x: number, y: number, data: TypedArray): void

  /**
 * Writes a block of pixels.
 * {{{async}}}
 *
 * @method writeBlockAsync
 * @throws Error
 * @param {number} x
 * @param {number} y
 * @param {TypedArray} data The TypedArray (https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView#Typed_array_subclasses) of values to write to the band.
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<void>}
 */
  writeBlockAsync(x: number, y: number, data: TypedArray, callback?: callback<void>): Promise<void>

  /**
 * Clamp the block size for a given block offset.
 * Handles partial blocks at the edges of the raster and returns the true number of pixels.
 *
 * @method clampBlock
 * @throws Error
 * @param {number} x
 * @param {number} y
 * @return {xyz} A size object.
 */
  clampBlock(x: number, y: number): xyz

  /**
 * Clamp the block size for a given block offset.
 * Handles partial blocks at the edges of the raster and returns the true number of pixels.
 * {{{async}}}
 *
 * @method clampBlockAsync
 * @throws Error
 * @param {number} x
 * @param {number} y
 * @param {callback<xyz>} [callback=undefined] {{{cb}}}
 * @return {Promise<xyz>} A size object.
 */
  clampBlockAsync(x: number, y: number, callback?: callback<xyz>): Promise<xyz>

  /**
 * create a Readable stream from a raster band
 *
 * @for gdal.RasterBandPixels
 * @method createReadStream
 * @param {RasterReadableOptions} [options]
 * @param {bool} [options.blockOptimize=true] Read by file blocks when possible (when rasterSize.x == blockSize.x)
 * @returns {RasterReadStream}
 */
  createReadStream(options?: RasterReadableOptions): RasterReadStream

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
  createWriteStream(options?: RasterWritableOptions): RasterWriteStream
}

export class RasterMuxStream extends stream.Readable {
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
  constructor(inputs: Record<string,RasterReadStream>, options?: RasterReadableOptions)
}

export class RasterReadStream extends stream.Readable {
/**
 * Class implementing raster reading as a stream of pixels
 * Reading is buffered and it is aligned on the underlying
 * compression blocks for maximum efficiency when possible
 *
 * Pixel coordinates are lost, but the row-major order is guaranteed
 *
 * @class RasterReadStream
 * @extends stream.Readable
 * @param {RasterReadableOptions} [options]
 * @param {RasterBand} options.band RasterBand to use
 * @param {bool} [options.blockOptimize=true] Read by file blocks when possible (when rasterSize.x == blockSize.x)
 */
  constructor(options?: RasterReadableOptions)
}

export class RasterWriteStream extends stream.Writable {
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
  constructor(options?: RasterWritableOptions)
}

export class SimpleCurve extends Geometry {
/**
 * Abstract class representing all SimpleCurves.
 *
 * @constructor
 * @class gdal.SimpleCurve
 * @extends gdal.Geometry
 */
  constructor()

  /**
 * The points that make up the SimpleCurve geometry.
 *
 * @attribute points
 * @type {gdal.LineStringPoints}
 */
  points: LineStringPoints

  /**
 * Returns the point at the specified distance along the SimpleCurve.
 *
 * @method value
 * @param {number} distance
 * @return {gdal.Point}
 */
  value(distance: number): Point

  /**
 * Compute the length of a multiSimpleCurve.
 *
 * @method getLength
 * @return {number}
 */
  getLength(): number

  /**
 * Add a segment of another LineString to this SimpleCurve subtype.
 *
 * Adds the request range of vertices to the end of this compound curve in an
 * efficient manner. If the start index is larger than the end index then the
 * vertices will be reversed as they are copied.
 *
 * @method addSubLineString
 * @param {gdal.LineString} LineString to be added
 * @param {number} [start=0] the first vertex to copy, defaults to 0 to start with
 * the first vertex in the other LineString
 * @param {number} [end=-1] the last vertex to copy, defaults to -1 indicating the
 * last vertex of the other LineString
 * @return {void}
 */
  addSubLineString(LineString: LineString, start?: number, end?: number): void
}

export class SpatialReference {
/**
 * This class respresents a OpenGIS Spatial Reference System, and contains
 * methods for converting between this object organization and well known text
 * (WKT) format.
 *
 * @constructor
 * @class gdal.SpatialReference
 * @param {string} [wkt]
 */
  constructor(wkt?: string)

  /**
 * Set a GeogCS based on well known name.
 *
 * @method setWellKnownGeogCS
 * @param {string} name
 */
  setWellKnownGeogCS(name: string): void

  /**
 * Convert in place to ESRI WKT format.
 *
 * @throws Error
 * @method morphToESRI
 */
  morphToESRI(): void

  /**
 * Convert in place from ESRI WKT format.
 *
 * @throws Error
 * @method morphFromESRI
 */
  morphFromESRI(): void

  /**
 * This method returns `true` if EPSG feels this geographic coordinate system
 * should be treated as having lat/long coordinate ordering.
 *
 * Currently this returns `true` for all geographic coordinate systems with an
 * EPSG code set, and AXIS values set defining it as lat, long. Note that
 * coordinate systems with an EPSG code and no axis settings will be assumed
 * to not be lat/long.
 *
 * `false` will be returned for all coordinate systems that are not geographic,
 * or that do not have an EPSG code set.
 *
 * @method EPSGTreatsAsLatLong
 * @return {boolean}
 */
  EPSGTreatsAsLatLong(): boolean

  /**
 * This method returns `true` if EPSG feels this projected coordinate system
 * should be treated as having northing/easting coordinate ordering.
 *
 * @method EPSGTreatsAsNorthingEasting
 * @return {boolean}
 */
  EPSGTreatsAsNorthingEasting(): boolean

  /**
 * Check if geocentric coordinate system.
 *
 * @method isGeocentric
 * @return {boolean}
 */
  isGeocentric(): boolean

  /**
 * Check if geographic coordinate system.
 *
 * @method isGeographic
 * @return {boolean}
 */
  isGeographic(): boolean

  /**
 * Check if projected coordinate system.
 *
 * @method isProjected
 * @return {boolean}
 */
  isProjected(): boolean

  /**
 * Check if local coordinate system.
 *
 * @method isLocal
 * @return {boolean}
 */
  isLocal(): boolean

  /**
 * Check if vertical coordinate system.
 *
 * @method isVertical
 * @return {boolean}
 */
  isVertical(): boolean

  /**
 * Check if compound coordinate system.
 *
 * @method isCompound
 * @return {boolean}
 */
  isCompound(): boolean

  /**
 * Do the GeogCS'es match?
 *
 * @method isSameGeogCS
 * @param {gdal.SpatialReference} srs
 * @return {boolean}
 */
  isSameGeogCS(srs: SpatialReference): boolean

  /**
 * Do the VertCS'es match?
 *
 * @method isSameVertCS
 * @param {gdal.SpatialReference} srs
 * @return {boolean}
 */
  isSameVertCS(srs: SpatialReference): boolean

  /**
 * Do these two spatial references describe the same system?
 *
 * @method isSame
 * @param {gdal.SpatialReference} srs
 * @return {boolean}
 */
  isSame(srs: SpatialReference): boolean

  /**
 * Set EPSG authority info if possible.
 *
 * @throws Error
 * @method autoIdentifyEPSG
 */
  autoIdentifyEPSG(): void

  /**
 * Clones the spatial reference.
 *
 * @method clone
 * @return {gdal.SpatialReference}
 */
  clone(): SpatialReference

  /**
 * Make a duplicate of the GEOGCS node of this OGRSpatialReference object.
 *
 * @method cloneGeogCS
 * @return {gdal.SpatialReference}
 */
  cloneGeogCS(): SpatialReference

  /**
 * Get the authority name for a node. The most common authority is "EPSG".
 *
 * @method getAuthorityName
 * @param {string} [target_key] The partial or complete path to the node to get an authority from. ie. `"PROJCS"`, `"GEOGCS"`, "`GEOGCS|UNIT"` or `null` to search for an authority node on the root element.
 * @return {string}
 */
  getAuthorityName(target_key?: string): string

  /**
 * Get the authority code for a node.
 *
 * @method getAuthorityCode
 * @param {string} [target_key] The partial or complete path to the node to get an authority from. ie. `"PROJCS"`, `"GEOGCS"`, "`GEOGCS|UNIT"` or `null` to search for an authority node on the root element.
 * @return {string}
 */
  getAuthorityCode(target_key?: string): string

  /**
 * Convert this SRS into WKT format.
 *
 * @throws Error
 * @method toWKT
 * @return {string}
 */
  toWKT(): string

  /**
 * Convert this SRS into a a nicely formatted WKT string for display to a
 * person.
 *
 * @throws Error
 * @method toPrettyWKT
 * @param {boolean} [simplify=false]
 * @return {string}
 */
  toPrettyWKT(simplify?: boolean): string

  /**
 * Export coordinate system in PROJ.4 format.
 *
 * @throws Error
 * @method toProj4
 * @return {string}
 */
  toProj4(): string

  /**
 * Export coordinate system in XML format.
 *
 * @throws Error
 * @method toXML
 * @return {string}
 */
  toXML(): string

  /**
 * Fetch indicated attribute of named node.
 *
 * @method getAttrValue
 * @param {string} node_name
 * @param {number} [attr_index=0]
 * @return {string}
 */
  getAttrValue(node_name: string, attr_index?: number): string

  /**
 * Creates a spatial reference from a WKT string.
 *
 * @static
 * @throws Error
 * @method fromWKT
 * @param {string} wkt
 * @return {gdal.SpatialReference}
 */
  static fromWKT(wkt: string): SpatialReference

  /**
 * Creates a spatial reference from a Proj.4 string.
 *
 * @static
 * @throws Error
 * @method fromProj4
 * @param {string} input
 * @return {gdal.SpatialReference}
 */
  static fromProj4(input: string): SpatialReference

  /**
 * Creates a spatial reference from a WMSAUTO string.
 *
 * Note that the WMS 1.3 specification does not include the units code, while
 * apparently earlier specs do. GDAL tries to guess around this.
 *
 * @example
 * ```
 * var wms = 'AUTO:42001,99,8888';
 * var ref = gdal.SpatialReference.fromWMSAUTO(wms);```
 *
 * @static
 * @throws Error
 * @method fromWMSAUTO
 * @param {string} input
 * @return {gdal.SpatialReference}
 */
  static fromWMSAUTO(input: string): SpatialReference

  /**
 * Import coordinate system from XML format (GML only currently).
 *
 * @static
 * @throws Error
 * @method fromXML
 * @param {string} input
 * @return {gdal.SpatialReference}
 */
  static fromXML(input: string): SpatialReference

  /**
 * Initialize from OGC URN.
 *
 * The OGC URN should be prefixed with "urn:ogc:def:crs:" per recommendation
 * paper 06-023r1. Currently EPSG and OGC authority values are supported,
 * including OGC auto codes, but not including CRS1 or CRS88 (NAVD88).
 *
 * @static
 * @throws Error
 * @method fromURN
 * @param {string} input
 * @return {gdal.SpatialReference}
 */
  static fromURN(input: string): SpatialReference

  /**
 * Initialize from OGC URL.
 *
 * The OGC URL should be prefixed with "http://opengis.net/def/crs" per best
 * practice paper 11-135. Currently EPSG and OGC authority values are supported,
 * including OGC auto codes, but not including CRS1 or CRS88 (NAVD88).
 *
 * @static
 * @throws Error
 * @method fromCRSURL
 * @param {string} input
 * @return {gdal.SpatialReference}
 */
  static fromCRSURL(input: string): SpatialReference

  /**
 * Initialize from OGC URL.
 * {{{async}}}
 *
 * The OGC URL should be prefixed with "http://opengis.net/def/crs" per best
 * practice paper 11-135. Currently EPSG and OGC authority values are supported,
 * including OGC auto codes, but not including CRS1 or CRS88 (NAVD88).
 *
 * @static
 * @throws Error
 * @method fromCRSURLAsync
 * @param {string} input
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.SpatialReference>}
 */
  static fromCRSURLAsync(input: string, callback?: callback<void>): Promise<SpatialReference>

  /**
 * Initialize spatial reference from a URL.
 *
 * This method will download the spatial reference from the given URL.
 *
 * @static
 * @throws Error
 * @method fromURL
 * @param {string} url
 * @return {gdal.SpatialReference}
 */
  static fromURL(url: string): SpatialReference

  /**
 * Initialize spatial reference from a URL.
 * {{async}}
 *
 * This method will download the spatial reference from the given URL.
 *
 * @static
 * @throws Error
 * @method fromURLAsync
 * @param {string} url
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.SpatialReference>}
 */
  static fromURLAsync(url: string, callback?: callback<void>): Promise<SpatialReference>

  /**
 * Initialize from a Mapinfo style CoordSys definition.
 *
 * @static
 * @throws Error
 * @method fromMICoordSys
 * @param {string} input
 * @return {gdal.SpatialReference}
 */
  static fromMICoordSys(input: string): SpatialReference

  /**
 * Initialize from an arbitrary spatial reference string.
 *
 * This method will examine the provided input, and try to deduce the format,
 * and then use it to initialize the spatial reference system.
 *
 * @static
 * @throws Error
 * @method fromUserInput
 * @param {string} input
 * @return {gdal.SpatialReference}
 */
  static fromUserInput(input: string): SpatialReference

  /**
 * Initialize from an arbitrary spatial reference string.
 *
 * This method will examine the provided input, and try to deduce the format,
 * and then use it to initialize the spatial reference system.
 * {{{async}}}
 *
 * @static
 * @throws Error
 * @method fromUserInputAsync
 * @param {string} input
 * @param {callback<void>} [callback=undefined] {{{cb}}}
 * @return {Promise<gdal.SpatialReference>}
 */
  static fromUserInputAsync(input: string, callback?: callback<void>): Promise<SpatialReference>

  /**
 * Initialize from EPSG GCS or PCS code.
 *
 * @example
 * ```
 * var ref = gdal.SpatialReference.fromEPSGA(4326);```
 *
 * @static
 * @throws Error
 * @method fromEPSG
 * @param {number} input
 * @return {gdal.SpatialReference}
 */
  static fromEPSG(input: number): SpatialReference

  /**
 * Initialize from EPSG GCS or PCS code.
 *
 * This method is similar to `fromEPSG()` except that EPSG preferred axis
 * ordering *will* be applied for geographic and projected coordinate systems.
 * EPSG normally defines geographic coordinate systems to use lat/long, and also
 * there are also a few projected coordinate systems that use northing/easting
 * order contrary to typical GIS use).
 *
 * @example
 * ```
 * var ref = gdal.SpatialReference.fromEPSGA(26910);```
 *
 * @static
 * @throws Error
 * @method fromEPSGA
 * @param {number} input
 * @return {gdal.SpatialReference}
 */
  static fromEPSGA(input: number): SpatialReference

  /**
 * Import coordinate system from ESRI .prj format(s).
 *
 * This function will read the text loaded from an ESRI .prj file, and translate
 * it into an OGRSpatialReference definition. This should support many (but by
 * no means all) old style (Arc/Info 7.x) .prj files, as well as the newer
 * pseudo-OGC WKT .prj files. Note that new style .prj files are in OGC WKT
 * format, but require some manipulation to correct datum names, and units on
 * some projection parameters. This is addressed within importFromESRI() by an
 * automatical call to morphFromESRI().
 *
 * Currently only GEOGRAPHIC, UTM, STATEPLANE, GREATBRITIAN_GRID, ALBERS,
 * EQUIDISTANT_CONIC, TRANSVERSE (mercator), POLAR, MERCATOR and POLYCONIC
 * projections are supported from old style files.
 *
 * @static
 * @throws Error
 * @method fromESRI
 * @param {object|string[]} input
 * @return {gdal.SpatialReference}
 */
  static fromESRI(input: object|string[]): SpatialReference

  /**
 * Fetch linear geographic coordinate system units.
 *
 * @method getLinearUnits
 * @return {units} An object containing `value` and `unit` properties.
 */
  getLinearUnits(): units

  /**
 * Fetch angular geographic coordinate system units.
 *
 * @method getAngularUnits
 * @return {units} An object containing `value` and `unit` properties.
 */
  getAngularUnits(): units

  /**
 * Validate SRS tokens.
 *
 * This method attempts to verify that the spatial reference system is well
 * formed, and consists of known tokens. The validation is not comprehensive.
 *
 * @method validate
 * @return {string|null} `"corrupt"`, '"unsupported"', `null` (if fine)
 */
  validate(): string|null
}

export class config {
/**
 * @class gdal.config
 */
  constructor()

  /**
 * Gets a GDAL configuration setting.
 *
 * @example
 * ```
 * data_path = gdal.config.get('GDAL_DATA');```
 *
 * @static
 * @method get
 * @param {string} key
 * @return {string}
 */
  static get(key: string): string

  /**
 * Sets a GDAL configuration setting.
 *
 * @example
 * ```
 * gdal.config.set('GDAL_DATA', data_path);```
 *
 * @static
 * @method set
 * @param {string} key
 * @param {string} value
 * @return {void}
 */
  static set(key: string, value: string): void
}

export class vsimem {
/**
 * Operations on in-memory `/vsimem/` files
 *
 * @class gdal.vsimem
 */
  constructor()

  /**
 * Create an in-memory `/vsimem/` file from a `Buffer`.
 * This is a zero-copy operation - GDAL will read from the Buffer which will be
 * protected by the GC even if it goes out of scope.
 * The file will stay in memory until it is deleted with `gdal.vsimem.release`.
 *
 * @static
 * @method set
 * @param {Buffer} data A binary buffer containing the file data
 * @param {string} filename A file name beginning with `/vsimem/`
 */
  static set(data: Buffer, filename: string): void

  /**
 * Delete and retrieve the contents of an in-memory `/vsimem/` file.
 * This is a very fast zero-copy operation.
 * It does not block the event loop.
 * If the file was created by `vsimem.set`, it will return a reference
 * to the same `Buffer` that was used to create it.
 * Otherwise it will construct a new `Buffer` object with the GDAL
 * allocated buffer as its backing store.
 *
 * ***WARNING***!
 *
 * The file must not be open or random memory corruption is possible with GDAL <= 3.3.1.
 * GDAL >= 3.3.2 will gracefully fail further operations and this function is safe.
 *
 * @static
 * @method release
 * @param {string} filename A file name beginning with `/vsimem/`
 * @throws
 * @return {Buffer} A binary buffer containing all the data
 */
  static release(filename: string): Buffer
}

