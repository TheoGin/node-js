const fs = require("fs");
const path = require("path");

const fileName = path.resolve(__dirname, "./myFiles/a.txt");

// 1、fs.readFile：function readFile( path: PathOrFileDescriptor, callback: (err: NodeJS.ErrnoException | null, data: NonSharedBuffer) => void ): void;
fs.readFile(fileName, (err, buffer) => {
  // "./myFiles/a123.txt"
  // console.log(err); // [Error: ENOENT: no such file or directory, open 'D:\DuYi\NodeJS\code\node-js\1. 概述\1.6 文件I和O\myFiles\a1.txt'] { ... }

  console.log(buffer); // <Buffer 49 4f e7 9a 84 e9 80 9f e5 ba a6 e5 be 80 e5 be 80 e4 bd 8e e4 ba 8e e5 86 85 e5 ad 98 e5 92 8c 43 50 55 e7 9a 84 e4 ba a4 e4 ba 92 e9 80 9f e5 ba a6>
});

fs.readFile(fileName, "utf-8", (err, content) => {
  // 显示成内容
  console.log(content); // IO的速度往往低于内存和CPU的交互速度
});

// 2、fs.readFileSync：Sync函数是同步的，会导致JS运行阻塞，极其影响性能。通常，在程序启动时运行有限的次数即可
const buffer = fs.readFileSync(fileName);
console.log(buffer); // <Buffer 49 4f e7 9a 84 e9 80 9f e5 ba a6 e5 be 80 e5 be 80 e4 bd 8e e4 ba 8e e5 86 85 e5 ad 98 e5 92 8c 43 50 55 e7 9a 84 e4 ba a4 e4 ba 92 e9 80 9f e5 ba a6>
console.log(123); // 要等上面读完才会输出

const readFileSyncContent = fs.readFileSync(fileName, {
  encoding: "utf-8",
});
console.log(readFileSyncContent); // IO的速度往往低于内存和CPU的交互速度
console.log(123); // 要等上面读完才会输出

// 3、fs.promises.readFile
fs.promises.readFile(fileName).then(buffer => {
  console.log(buffer); // <Buffer 49 4f e7 9a 84 e9 80 9f e5 ba a6 e5 be 80 e5 be 80 e4 bd 8e e4 ba 8e e5 86 85 e5 ad 98 e5 92 8c 43 50 55 e7 9a 84 e4 ba a4 e4 ba 92 e9 80 9f e5 ba a6>
})

(async function () {
  const content = await fs.promises.readFile(fileName, "utf-8");
  console.log(content); // IO的速度往往低于内存和CPU的交互速度
})();