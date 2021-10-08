
#include "gdal_multilinestring.hpp"
#include "../collections/geometry_collection_children.hpp"
#include "../gdal_common.hpp"
#include "gdal_geometry.hpp"
#include "gdal_geometrycollection.hpp"
#include "gdal_linestring.hpp"

#include <stdlib.h>

namespace node_gdal {

Nan::Persistent<FunctionTemplate> MultiLineString::constructor;

void MultiLineString::Initialize(Local<Object> target) {
  Nan::HandleScope scope;

  Local<FunctionTemplate> lcons = Nan::New<FunctionTemplate>(MultiLineString::New);
  lcons->Inherit(Nan::New(GeometryCollection::constructor));
  lcons->InstanceTemplate()->SetInternalFieldCount(1);
  lcons->SetClassName(Nan::New("MultiLineString").ToLocalChecked());

  Nan::SetPrototypeMethod(lcons, "toString", toString);
  Nan::SetPrototypeMethod(lcons, "polygonize", polygonize);

  Nan::Set(target, Nan::New("MultiLineString").ToLocalChecked(), Nan::GetFunction(lcons).ToLocalChecked());

  constructor.Reset(lcons);
}

/**
 * @constructor
 * @class gdal.MultiLineString
 * @extends gdal.GeometryCollection
 */

NAN_METHOD(MultiLineString::toString) {
  Nan::HandleScope scope;
  info.GetReturnValue().Set(Nan::New("MultiLineString").ToLocalChecked());
}

/**
 * Converts it to a polygon.
 *
 * @method polygonize
 * @return {gdal.Polygon}
 */
NAN_METHOD(MultiLineString::polygonize) {
  Nan::HandleScope scope;

  MultiLineString *geom = Nan::ObjectWrap::Unwrap<MultiLineString>(info.This());

  info.GetReturnValue().Set(Geometry::New(geom->this_->Polygonize()));
}

} // namespace node_gdal
