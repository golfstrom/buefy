'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-a535ca7c.js');
require('./chunk-b0a20c5f.js');
require('./chunk-98a92ff2.js');
require('./chunk-7c4ae4d9.js');
require('./chunk-676c8738.js');
var __chunk_6 = require('./chunk-13e039f5.js');
var __chunk_7 = require('./chunk-e777089f.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_6.registerComponent(Vue, __chunk_7.Input);
  }
};
__chunk_6.use(Plugin);

exports.default = Plugin;