const fs = require("node:fs");
const path = require("node:path");
const fileName = path.resolve(__dirname, './myFiles');

async function readFile() {
  // readdir(path: FSPromisePath, options?: string | EncodingOptions): Promise<string[]>
  const fileOrDirNames = await fs.promises.readdir(fileName);
  console.log(fileOrDirNames); // [ '1', 'a.txt', 'sub', 'w.txt' ]
}

readFile()