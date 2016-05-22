goog.module('vxq.worlds.voxelquest');


exports = {
  /** @type {?VQWrapperModule} */
  voxelquest_: null,
  /** @return {!VQWrapperModule} */
  get voxelquest() {
    if (this.voxelquest_ == null) {
      this.voxelquest_ = require('voxelquest-wrapper/voxelquest');
    }
    return this.voxelquest_;
  }
};
