// 1. cwd(): string; 当前运行的工作目录。 返回当前nodejs进程的工作目录（绝对路径）
console.log(process.cwd()); // D:\DuYi\NodeJS\code\node-js\1. 概述\1-2. 全局对象

// 2. exit(code?: number | string | null): never;
//   - 强制退出当前node进程
//   - 可传入退出码，0表示成功退出，默认为0
// process.exit(0)
// console.log(123); // 不会执行

// 3. argv: string[];  获取命令中的所有参数
console.log(process.argv);
//  node '.\1-2. 全局对象\1.2.6 process.js' -abc --test
/*
[
  'D:\\programs\\NodeVersionManger\\nodejs\\node.exe',
  'D:\\DuYi\\NodeJS\\code\\node-js\\1. 概述\\1-2. 全局对象\\1.2.6 process.js',
  '-abc',
  '--test'
]
* */

// 4. platform 获取当前的操作系统。如 win32：是一个平台版本。表示支持32位或者32位以上的API操作系统
console.log(process.platform); // win32

// 5.  kill(pid: number, signal?: string | number): true; 根据进程ID杀死进程
// console.log(process.kill(11564)); // true

// 6. env：获取环境变量对象
console.log(process.env['WebStorm']); // D:\programs\JetBrains\WebStorm 2025.1\bin;
