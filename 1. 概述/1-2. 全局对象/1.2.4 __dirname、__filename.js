// __dirname：获取当前模块所在的目录。并非global属性
console.log(__dirname); // D:\DuYi\NodeJS\code\node-js\1. 概述\1-2. 全局对象
console.log(global.__dirname); // undefined

// __filename：获取当前模块的文件路径。并非global属性
console.log(__filename); // D:\DuYi\NodeJS\code\node-js\1. 概述\1-2. 全局对象\1.2.4 __dirname、__filename.js
console.log(global.__filename); // undefined