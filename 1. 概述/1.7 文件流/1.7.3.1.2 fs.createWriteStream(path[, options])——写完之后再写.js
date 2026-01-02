const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "w.txt");
const writeStream = fs.createWriteStream(filePath, {
  flags: 'a',
  encoding: 'utf-8',
  highWaterMark: 16 * 1024, // 16KB
});

// 一直写，直到到达上限，或无法再直接写入
function write() {
  let i = 0;
  let flag = true;
  // 写入 10MB个 a
  while (i < 10 * 1024 * 1024 && flag) {
    flag = writeStream.write("a");  // 写入a，得到下一次还能不能直接写
    i++;
  }
}

write();

// 4. 当写入队列清空时，会触发drain事件
writeStream.on("drain", () => {
  console.log("drain 当写入队列清空时，会触发drain事件，接下来如果再写入要排队");
  write(); // 会导致死循环
});