const path = require("node:path");
const fs = require("node:fs");


(async function(){
  const filePath = path.resolve(__dirname, './myFiles/1.jpeg');

  const buffer = await fs.promises.readFile(filePath);
  // console.log(buffer); // <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 01 00 01 00 00 ff db 00 43 00 08 06 06 07 06 05 08 07 07 07 09 09 08 0a 0c 14 0d 0c 0b 0b 0c 19 12 13 0f ... 13255 more bytes>

  const writeFilePath = path.resolve(__dirname, './myFiles/1.copy.jpeg');
  await fs.promises.writeFile(writeFilePath, buffer);
  console.log('复制成功'); // 复制成功
})()
