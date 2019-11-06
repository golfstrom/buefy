'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-a535ca7c.js');
require('./chunk-b0a20c5f.js');
require('./chunk-98a92ff2.js');
require('./chunk-676c8738.js');
var __chunk_6 = require('./chunk-13e039f5.js');
var __chunk_21 = require('./chunk-186f669e.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_6.registerComponent(Vue, __chunk_21.Pagination);
    __chunk_6.registerComponent(Vue, __chunk_21.PaginationButton);
  }
};
__chunk_6.use(Plugin);

exports.default = Plugin;
