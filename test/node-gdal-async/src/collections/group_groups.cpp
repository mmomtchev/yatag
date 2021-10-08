#include <memory>
#include "group_groups.hpp"
#include "../gdal_common.hpp"
#include "../gdal_dataset.hpp"
#include "../gdal_group.hpp"
#include "../utils/string_list.hpp"

namespace node_gdal {

#if GDAL_VERSION_MAJOR > 3 || (GDAL_VERSION_MAJOR == 3 && GDAL_VERSION_MINOR >= 1)

Nan::Persistent<FunctionTemplate> GroupGroups::constructor;

std::shared_ptr<GDALGroup> GroupGroups::__get(std::shared_ptr<GDALGroup> parent, std::string const &name) {
  return parent->OpenGroup(name);
}

std::shared_ptr<GDALGroup> GroupGroups::__get(std::shared_ptr<GDALGroup> parent, size_t idx) {
  std::vector<std::string> groups = parent->GetGroupNames();
  if (idx >= groups.size()) return nullptr;
  return parent->OpenGroup(groups[idx]);
}

std::vector<std::string> GroupGroups::__getNames(std::shared_ptr<GDALGroup> parent) {
  return parent->GetGroupNames();
}

int GroupGroups::__count(std::shared_ptr<GDALGroup> parent) {
  int r = parent->GetGroupNames().size();
  return r;
}

/**
 * An encapsulation of a {{#crossLink "gdal.Group"}}Group{{/crossLink}}'s
 * descendant groups.
 *
 *
 * @class gdal.GroupGroups
 */

/**
 * Returns the group with the given name/index.
 *
 * @method get
 * @param {string|number} group
 * @return {gdal.Group}
 */

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

/**
 * Returns the number of groups in the collection.
 *
 * @method count
 * @return {number}
 */

/**
 * Returns the number of groups in the collection.
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
