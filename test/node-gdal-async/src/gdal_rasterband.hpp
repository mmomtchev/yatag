#ifndef __NODE_GDAL_RASTERBAND_H__
#define __NODE_GDAL_RASTERBAND_H__

// node
#include <node.h>
#include <node_object_wrap.h>

// nan
#include "nan-wrapper.h"

// gdal
#include <gdal_priv.h>

#include "gdal_dataset.hpp"

using namespace v8;
using namespace node;

namespace node_gdal {

class RasterBand : public Nan::ObjectWrap {
    public:
  static Nan::Persistent<FunctionTemplate> constructor;
  static void Initialize(Local<Object> target);
  static NAN_METHOD(New);
  static Local<Value> New(GDALRasterBand *band, GDALDataset *parent);
  static NAN_METHOD(toString);
  GDAL_ASYNCABLE_DECLARE(flush);
  GDAL_ASYNCABLE_DECLARE(fill);
#if GDAL_VERSION_MAJOR > 3 || (GDAL_VERSION_MAJOR == 3 && GDAL_VERSION_MINOR >= 1)
  static NAN_METHOD(asMDArray);
#endif
  static NAN_METHOD(getStatistics);
  GDAL_ASYNCABLE_DECLARE(computeStatistics);
  static NAN_METHOD(setStatistics);
  static NAN_METHOD(getMaskBand);
  static NAN_METHOD(getMaskFlags);
  static NAN_METHOD(createMaskBand);
  GDAL_ASYNCABLE_DECLARE(getMetadata);
  GDAL_ASYNCABLE_DECLARE(setMetadata);

  // unimplemented methods
  // static NAN_METHOD(getColorTable);
  // static NAN_METHOD(setColorTable);
  // static NAN_METHOD(rasterIO);
  // static NAN_METHOD(buildOverviews);
  // static NAN_METHOD(getHistogram);
  // static NAN_METHOD(getDefaultHistogram);
  // static NAN_METHOD(setDefaultHistogram);

  static NAN_GETTER(dsGetter);
  static NAN_GETTER(sizeGetter);
  static NAN_GETTER(idGetter);
  static NAN_GETTER(descriptionGetter);
  static NAN_GETTER(overviewsGetter);
  static NAN_GETTER(pixelsGetter);
  static NAN_GETTER(blockSizeGetter);
  static NAN_GETTER(minimumGetter);
  static NAN_GETTER(maximumGetter);
  static NAN_GETTER(readOnlyGetter);
  static NAN_GETTER(dataTypeGetter);
  static NAN_GETTER(hasArbitraryOverviewsGetter);
  static NAN_GETTER(unitTypeGetter);
  static NAN_GETTER(scaleGetter);
  static NAN_GETTER(offsetGetter);
  static NAN_GETTER(noDataValueGetter);
  static NAN_GETTER(categoryNamesGetter);
  static NAN_GETTER(colorInterpretationGetter);
  static NAN_GETTER(uidGetter);

  static NAN_SETTER(unitTypeSetter);
  static NAN_SETTER(scaleSetter);
  static NAN_SETTER(offsetSetter);
  static NAN_SETTER(noDataValueSetter);
  static NAN_SETTER(categoryNamesSetter);
  static NAN_SETTER(colorInterpretationSetter);

  RasterBand();
  RasterBand(GDALRasterBand *band);
  inline bool isAlive() {
    return this_ && object_store.isAlive(uid);
  }
  inline GDALRasterBand *get() {
    return this_;
  }
  inline GDALDataset *getParent() {
    return parent_ds;
  }
  void dispose();
  long uid;
  // Dataset that will be locked
  long parent_uid;

    private:
  ~RasterBand();
  GDALRasterBand *this_;
  GDALDataset *parent_ds;
};

} // namespace node_gdal
#endif
