const fs = require("node:fs");
const path = require("node:path");

function getAbsolutePath(fileName) {
  return path.resolve(__dirname, fileName)
}

async function readFile(fileName) {
  const fileOrDirNames = await fs.promises.readdir(fileName);
  console.log('fileName', fileName);
  console.log('fileOrDirNames', fileOrDirNames); // [ '1', 'a.txt', 'sub', 'test', 'test2', 'w.txt' ]

  for (const fileOrDirName of fileOrDirNames) {
    const absolutePath = getAbsolutePath('./myFiles/' + fileOrDirName);
    const stats = await fs.promises.stat(absolutePath);
    if(stats.isFile()) {
      const content = await fs.promises.readFile(absolutePath, 'utf-8');
      console.log(absolutePath);
      console.log(content);
    } else {
      // await readFile(absolutePath)
    }
  }
}

const fileName = getAbsolutePath('./myFiles');
readFile(fileName)