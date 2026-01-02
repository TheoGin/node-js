const fs = require("fs");
const path = require("path");
// 1. 创建一个写入流
// 2. path：写入的文件路径
// 3. options
//   1. flags：操作文件的方式
//     1. w：覆盖，默认值
//     2. a：追加
//     3. 其他
//   2. encoding：编码方式
//   3. start：起始字节
//   4. highWaterMark：每次最多写入的字节数
// 4. 返回：Writable的字类WriteStream
// const filePath = path.resolve('E:/w1.txt');
const filePath = path.resolve(__dirname, 'w.txt');
// function createWriteStream(path: PathLike, options?: BufferEncoding | WriteStreamOptions): WriteStream;
const writeStream = fs.createWriteStream(filePath, {
  // flags: 'a',
  // encoding: 'utf-8',
  highWaterMark: 3, // 3 B
});


// ws.on(事件名, 处理函数)
// 1. open
writeStream.on('open', ()=> {
  console.log('open 文件打开');
})

//  2. error
writeStream.on('error', ()=> {
  console.log('error 出错了');
})

// 3. close
writeStream.on('close', ()=> {
  console.log('close 文件关闭');
})

//   2. ws.write(data)
//     1. 写入一组数据
//     2. data可以是字符串或Buffer
//     3. 返回一个boolean值
//       1. true：写入通道没有被填满，接下来的数据可以直接写入，无须排队
//       2. false：写入通道目前已被填满，接下来的数据将进入写入队列
//         1. 要特别注意背压问题，因为写入队列是内存中的数据，是有限的
// write(chunk: any, callback?: (error: Error | null | undefined) => void): boolean;
let flag = writeStream.write('ab');
console.log(flag);
flag = writeStream.write('c');
console.log(flag);

// 4. 当写入队列清空时，会触发drain事件
writeStream.on('drain', ()=> {
  console.log('drain 当写入队列清空时，会触发drain事件，接下来如果再借入要排队');
})

// 3. ws.end([data])
//    1. 结束写入，将自动关闭文件
//      1. 是否自动关闭取决于autoClose配置
//      2. 默认为true
//    2. data是可选的，表示关闭前的最后一次写入
writeStream.end('de', () => {
  console.log('writeStream.end 结束写入');
})

/*
true
false
open 文件打开
writeStream.end 结束写入
close 文件关闭
* */