const fs = require("node:fs");
const path = require("node:path");

class File {
  constructor(fileName) {
    this.name = fileName;
    // this.name = this.getAbsolutePath(fileName);
    // console.log(this.name);
    const absolutePath = this.getAbsolutePath(fileName);
    this.ext = path.extname(absolutePath);

    const stats = fs.statSync(absolutePath);
    this.isFile = stats.isFile();
    this.size = stats.size;
    this.createTime = new Date(stats.birthtime);
    this.updateTime = new Date(stats.mtime);
  }

  /*async init(fileName) {
    const stats = await fs.promises.stat(this.getAbsolutePath(this.name));
    console.log(stats);
  }*/

  getAbsolutePath(fileName) {
    return path.resolve(__dirname, fileName);
  }

  async getChildren() {
    if (!this.isFile) {
      const fileNames = await fs.promises.readdir(this.getAbsolutePath(this.name));
      const files = [];
      for (const fileName of fileNames) {
        // console.log(this.getAbsolutePath(`./${this.name}/${fileName}`));
        files.push(new File(`${this.name}/${fileName}`));
      }
      return files;
    }
    return [];
  }

  async getContent(isBuffer = false) {
    if (!this.isFile) {
      return null;
    }
    return await fs.promises.readFile(path.resolve(__dirname, this.name), isBuffer ? "" : "utf-8");
  }
}

async function test() {
  const file = new File("myFiles");
  const files = await file.getChildren();

  printContent(files);

  async function printContent(files) {
    for (const f of files) {
      if (!f.isFile) {
        const children = await f.getChildren();
        await printContent(children);
        continue;
      }
      const content = await f.getContent();
      // console.log('filename: ', f.name);
      console.log(content);
    }
  }
}

test();