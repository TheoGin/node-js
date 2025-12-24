// 1、ES Module 语法
export default 5;
export const a = 1;
console.log('a', a);
/* node 中不支持 export default
export default 5;
^^^^^^
SyntaxError: Unexpected token 'export'
* */

// 2、CommonJS 语法
/*exports.a = 1;
exports.b = 2;*/
/* ES Module 中不支持 exports
exports.a = 1;
^
ReferenceError: exports is not defined
* */