// 1. 绝对路径：根据绝对路径直接加载模块
require("D:\\DuYi\\NodeJS\\code\\node-js\\1. 概述\\1.3 Node的模块化细节\\node_modules\\a\\index.js"); // node_modules a index.js

/** 2. 相对路径  ./  或 ../
 * 相对于当前模块
 * 转换为绝对路径
 * 加载模块
 */
require("./test");

require("fs"); // 由于 fs 是内置模块，所以不会从 node_modules 里面找

const json = require("./j");
console.log(json); // { a: 1, b: 2 }

/* 4. 关于后缀名：如果不提供后缀名，自动补全。补全顺序
./src
./src.js
./src.json
./src.node
./src.mjs
./src/index.js
*/
require('./src'); // src index.mjs