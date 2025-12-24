// console.log(arguments);
function require(path) {
  // 1、将path转为绝对路径，然后加载模块

  // 2、是否有
  // 2.1 如果有缓存，直接返回缓存加载过的

  // 2.2 如果没有缓存，将代码放入函数中，调用执行，并传入参数，然后存入缓存（用绝对路径作为 key ）
  function _require() {
    // ...
  }

  exports = {};
  module.exports = {};
  _require(module.exports, module.exports, exports, require, module);

  // 最后返回 module.exports
  return module.exports;
}