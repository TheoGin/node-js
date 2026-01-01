const fs = require("node:fs");
const path = require("node:path");

const dirAbsolutePath = path.resolve(__dirname, './myFiles/test');

async function test() {
  await fs.promises.mkdir(dirAbsolutePath);
  console.log('目录创建成功');
}

test()