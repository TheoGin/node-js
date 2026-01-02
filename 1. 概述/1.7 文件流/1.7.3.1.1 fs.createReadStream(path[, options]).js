const fs = require("fs");
const path = require("path");
// const { Readable, Writable } = require('stream');

/*
function createReadStream(path: PathLike, options?: BufferEncoding | ReadStreamOptions): ReadStream;
1. 含义：创建一个文件可读流，用于读取文件内容
2. path：读取的文件路径
3. options：可选配置
  1. encoding：编码方式
  2. start：起始字节
  3. end：结束字节
  4. highWaterMark：每次读取数量
    1. 如果encoding有值，该数量表示一个字符数
    2. 如果encoding为null，该数量表示字节数
  interface StreamOptions {
      encoding?: BufferEncoding | undefined;
      autoClose?: boolean | undefined;
      start?: number | undefined;
      highWaterMark?: number | undefined;
      ...
  }
  interface ReadStreamOptions extends StreamOptions {
      end?: number | undefined;
      ...
  }
*/
const filePath = path.resolve(__dirname, "abc.txt");
const readStream = fs.createReadStream(filePath, {
  encoding: 'utf-8',
  highWaterMark: 6, // （UTF-8，字母占一个字节，中文占3个字节）
  autoClose: true, // 读完后会自动完毕，默认为true
});


/*
class ReadStream extends stream.Readable { ... }
4. 返回：Readable的子类ReadStream
  1. 事件：rs.on(事件名, 处理函数)
*/
// 1. open：文件打开事件。文件被打开后触发
readStream.on('open', ()=> {
  console.log('open 文件打开了');
})

// 2. error：发生错误时触发
readStream.on('error', (err)=> {
  console.log(err);
  /*
  [Error: ENOENT: no such file or directory, open 'D:\DuYi\NodeJS\code\node-js\1. 概述\1.7 文件流\abc1.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'D:\\DuYi\\NodeJS\\code\\node-js\\1. 概述\\1.7 文件流\\abc1.txt'
}
  * */
})

/*
3. close：文件被关闭后触发
  3.1. 可通过rs.close手动关闭
  3.2. 或文件读取完成后自动关闭：autoClose配置项默认为true
* */
readStream.on('close',  ()=> {
  console.log('close 文件关闭了');
})
/*readStream.close(() => {
  console.log('可通过rs.close手动关闭');
})*/

/*
4. data：读取到一部分数据后触发
  4.1. 注册data事件后，才会真正开始读取
  4.2. 每次读取highWaterMark指定的数量
  4.3. 回调函数中会附带读取到的数据
    1）. 若指定了编码，则读取到的数据会自动按照编码转换为字符串
    2）. 若没有指定编码，读取到的数据是Buffer
* */
readStream.on('data', (chunk)=>{
  console.log(chunk);
  readStream.pause();
})

// 5. end：所有数据读取完毕后触发
readStream.on('end', ()=>{
  console.log('end 所有数据读取完毕后触发');
})

// rs.pause()：暂停读取，会触发pause事件
readStream.on('pause', ()=>{
  console.log('rs.pause()：暂停读取，会触发pause事件');

  setTimeout(()=> {
    readStream.resume()
  }, 1000)
})

// 3. rs.resume(): 恢复读取，会触发resume事件
readStream.on('resume', ()=>{
  console.log('rs.resume(): 恢复读取，会触发resume事件');
})
/*
rs.resume(): 恢复读取，会触发resume事件
open 文件打开了
abcdef
rs.pause()：暂停读取，会触发pause事件
rs.resume(): 恢复读取，会触发resume事件
创建
rs.pause()：暂停读取，会触发pause事件
rs.resume(): 恢复读取，会触发resume事件
可读
rs.pause()：暂停读取，会触发pause事件
rs.resume(): 恢复读取，会触发resume事件
流
rs.pause()：暂停读取，会触发pause事件
end 所有数据读取完毕后触发
close 文件关闭了
rs.resume(): 恢复读取，会触发resume事件
*/