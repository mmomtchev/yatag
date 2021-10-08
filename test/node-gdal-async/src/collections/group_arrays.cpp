#include <memory>
#include "group_arrays.hpp"
#include "../gdal_common.hpp"
#include "../gdal_dataset.hpp"
#include "../gdal_group.hpp"
#include "../gdal_mdarray.hpp"
#include "../utils/string_list.hpp"

namespace node_gdal {

#if GDAL_VERSION_MAJOR > 3 || (GDAL_VERSION_MAJOR == 3 && GDAL_VERSION_MINOR >= 1)

Nan::Persistent<FunctionTemplate> GroupArrays::constructor;

std::shared_ptr<GDALMDArray> GroupArrays::__get(std::shared_ptr<GDALGroup> parent, std::string const &name) {
  return parent->OpenMDArray(name);
}

std::shared_ptr<GDALMDArray> GroupArrays::__get(std::shared_ptr<GDALGroup> parent, size_t idx) {
  std::vector<std::string> arrays = parent->GetMDArrayNames();
  if (idx >= arrays.size()) return nullptr;
  return parent->OpenMDArray(arrays[idx]);
}

std::vector<std::string> GroupArrays::__getNames(std::shared_ptr<GDALGroup> parent) {
  return parent->GetMDArrayNames();
}

int GroupArrays::__count(std::shared_ptr<GDALGroup> parent) {
  int r = parent->GetMDArrayNames().size();
  return r;
}

/**
 * An encapsulation of a {{#crossLink "gdal.Group"}}Group{{/crossLink}}'s
 * descendant arrays.
 *
 * @class gdal.GroupArrays
 */

/**
 * Returns the array with the given name/index.
 *
 * @method get
 * @param {string|number} array
 * @return {gdal.MDArray}
 */

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

/**
 * Returns the number of arrays in the collection.
 *
 * @method count
 * @return {number}
 */

/**
 * Returns the number of arrays in the collection.
 * {{{async}}}
 *
 * @method countAsync
 *
 * @param {callback<number>} [callback=undefined] {{{cb}}}
 * @return {Promise<number>}
 */

/**
 * @readOnly
 * @attribute names
 * @type {string[]}
 */

/**
 * Parent dataset
 *
 * @readOnly
 * @attribute ds
 * @type {gdal.Dataset}
 */
#endif

} // namespace node_gdal
