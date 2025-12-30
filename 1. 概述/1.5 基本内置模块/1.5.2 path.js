const path = require('path');

// ★：1. basename(path: string, suffix?: string): string;
/**
 * Return the last portion of a path. Similar to the Unix basename command.
 * Often used to extract the file name from a fully qualified path.
 * @param path the path to evaluate. 求值的路径。
 * @param suffix optionally, an extension to remove from the result.
 * @throws {TypeError} if `path` is not a string or if `ext` is given and is not a string.
 */
console.log(path.basename('D:\\node-js\\1. 概述\\1.5 基本内置模块\\1.5.2 path.js')); // 1.5.2 path.js
console.log(path.basename('D:\\node-js\\1. 概述\\1.5 基本内置模块\\1.5.2 path.js', '.js')); // 1.5.2 path
console.log(path.basename('D:\\node-js\\1. 概述\\1.5 基本内置模块\\1.5.2 path.js', '.css')); // 1.5.2 path.js

// 2. sep（separator）: "\\" | "/"; The platform-specific file separator. '\' or '/'.
/**
 * windows: '\'
 * linux 或 MacOs: '/'
 */
console.log(path.sep); // \

// 3. delimiter: ";" | ":"; The platform-specific file delimiter. ';' or ':'.
console.log(path.delimiter); // ;
console.log(process.env.Path.split(path.delimiter)); // [ 'D:\\programs\\VMware\\VMware Workstation\\bin\\',  'C:\\Windows\\system32', ... ]

// ★：4. dirname(path: string): string; Return the directory name of a path.
console.log(path.dirname("D:\\node-js\\1. 概述\\1.5 基本内置模块\\1.5.2 path.js")); // D:\node-js\1. 概述\1.5 基本内置模块

// ★：5. extname(path: string): string;
/**
 * Return the extension of the path, from the last '.' to end of string in the last portion of the path.
 * If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.
 * @param path the path to evaluate.
 * @throws {TypeError} if `path` is not a string.
 */
console.log(path.extname("D:\\node-js\\1. 概述\\1.5 基本内置模块\\1.5.2 path.js")); // .js
console.log(path.extname("D:\\node-js\\1. 概述\\1.5 基本内置模块\\pat")); // ''

// 6. ★：join(...paths: string[]): string;
/**
 * Join all arguments together and normalize the resulting path.
 * @param paths paths to join.
 * @throws {TypeError} if any of the path segments is not a string.
 */
console.log(path.join("D:\\node-js\\1. 概述\\1.5 基本内置模块", "1.5.2 path.js")); // D:\node-js\1. 概述\1.5 基本内置模块\1.5.2 path.js
console.log(path.join("D:\\node-js\\1. 概述\\1.5 基本内置模块", "\\1.5.2 path.js")); // D:\node-js\1. 概述\1.5 基本内置模块\1.5.2 path.js
const basePath = 'a/b';
const fullPath = path.join(basePath, '../', 'd.js');
console.log(fullPath); // a\d.js

// 7. normalize(path: string): string; 将相对路径和绝对路径进行转换
/**
 * Normalize a string path, reducing '..' and '.' parts.
 * When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used. If the path is a zero-length string, '.' is returned, representing the current working directory.
 * @param path string path to normalize.
 * @throws {TypeError} if `path` is not a string.
 */
console.log(path.normalize('D:\\node-js\\1. 概述\\1.5 基本内置模块\\.')); // D:\node-js\1. 概述\1.5 基本内置模块
console.log(path.normalize('D:\\node-js\\1. 概述\\1.5 基本内置模块\\..')); // D:\node-js\1. 概述

// 8. relative(from: string, to: string): string;
console.log(path.relative("/a/b/c/d", "/a/b/e/f")); // ..\..\e\f

// 9. ★：resolve(...paths: string[]): string; 路径 + 文件名：得到文件的绝对路径
console.log(path.resolve(__dirname, "test.js")); // D:\DuYi\NodeJS\code\node-js\1. 概述\1.5 基本内置模块\test.js
