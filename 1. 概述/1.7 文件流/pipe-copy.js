const fs = require("fs");
const path = require("path");


const readFilePath = path.resolve(__dirname, "tmp/a.txt");
const writeFilePath = path.resolve(__dirname, "tmp/b.txt");

// 方式1：一次性全部读入内存，然后写入磁盘
async function method1() {
  console.time("方式 1");
  const content = await fs.promises.readFile(readFilePath);
  await fs.promises.writeFile(writeFilePath, content);
  console.timeEnd("方式 1");
  console.log("复制完成");
}

// method1(); // 方式 1: 88.234ms

function method2() {
  console.time("方式 2");
  const readStream = fs.createReadStream(readFilePath);
  const writeStream = fs.createWriteStream(writeFilePath);

  /*readStream.on("data", (chunk) => {
    // 读到一部分数据
    const flag = writeStream.write(chunk);
    if (!flag) {
      // 表示下一次写入，会造成背压
      readStream.pause(); // 暂停读取
    }
  });

  writeStream.on("drain", () => {
    // 写入队列空了，就可以继续写了
    readStream.resume();
  });

  // 读完了
  readStream.on('close', () => {
    writeStream.end();
    console.timeEnd("方式 2");
    console.log("复制完成");
  });*/

  // 上面代码等价于
  readStream.pipe(writeStream); // 把读出来的一部分 接入到 写中

  readStream.on('close', () => {
    console.timeEnd("方式 2");
    console.log("复制完成");
  })
}

method2(); // 方式 2: 22.700ms