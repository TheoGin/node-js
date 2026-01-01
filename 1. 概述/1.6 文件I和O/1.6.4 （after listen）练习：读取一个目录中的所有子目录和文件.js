const fs = require("node:fs");
const path = require("node:path");

class File {
  constructor(fileName, name, ext, isFile, size, createTime, updateTime) {
    this.fileName = fileName;
    this.name = name;
    this.ext = ext;
    this.isFile = isFile;
    this.size = size;
    this.createTime = createTime;
    this.updateTime = updateTime;
  }

  static async getFile(fileName) {
    const name = path.basename(fileName);
    const ext = path.extname(fileName);
    const stats = await fs.promises.stat(fileName);
    const isFile = stats.isFile();
    const size = stats.size;
    const createTime = new Date(stats.birthtime);
    const updateTime = new Date(stats.mtime);
    return new File(fileName, name, ext, isFile, size, createTime, updateTime);
  }

  async getChildren() {
    if (this.isFile) {
      // 文件不可能有子文件
      return [];
    }
    const fileNames = await fs.promises.readdir(this.fileName);
    const files = fileNames.map(fileName => {
      const filePath = path.resolve(this.fileName, fileName);
      return  File.getFile(filePath)
    });
    // return Promise.allSettled(files);
    return Promise.all(files);
  }

  async getContent(isBuffer = false) {
    if (this.isFile) {
      if (isBuffer) {
        return await fs.promises.readFile(this.fileName);
      }
      return await fs.promises.readFile(this.fileName, "utf-8");
    }
    return null;
  }

}

async function readDir(dirName) {
  // console.log('dirName', dirName);
  const file = await File.getFile(dirName);
  return await file.getChildren();
}

async function test() {
  // const file = await readDir(path.resolve(__dirname, "myFiles/a.txt"));
  // console.log(await file.getContent(true));

  const dirName = path.resolve(__dirname, "myFiles");
  const files = await readDir(dirName);
  // console.log(files);
  recurve(files);

  async function recurve(files) {
    for (const f of files) {
      if (f.isFile) {
        console.log(await f.getContent(f.ext === ".jpeg"));
      } else {
        const children =await readDir(f.fileName);
        // console.log(children);
        recurve(children);
      }
    }
  }
}

test();

/*
<Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 01 00 01 00 00 ff db 00 43 00 08 06 06 07 06 05 08 07 07 07 09 09 08 0a 0c 14 0d 0c 0b 0b 0c 19 12 13 0f ... 13255 more bytes>
3.txt
<Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 01 00 01 00 00 ff db 00 43 00 08 06 06 07 06 05 08 07 07 07 09 09 08 0a 0c 14 0d 0c 0b 0b 0c 19 12 13 0f ... 13255 more bytes>
6.txt
a.txt: IO的速度往往低于内存和CPU的交互速度
3.txt
abc写入abc写入abc写入abc写入abc写入abc写入
t.txt
 */