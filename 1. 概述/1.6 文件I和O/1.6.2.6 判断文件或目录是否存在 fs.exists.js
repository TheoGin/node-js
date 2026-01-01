const path = require("node:path");
const fs = require("node:fs");

async function exists(fileOrDir) {
  try {
    await fs.promises.stat(fileOrDir);
    return true;
  } catch (err) {
    // console.log(e.code);
    // 文件不存在码，因为有可能是没权限
    if (err.code === "ENOENT") {
      return false;
    }
    // 如果没权限继续往上抛
    throw err;
  }
}

// const fileOrDirAbsolutePath = path.resolve(__dirname, './myFiles/a.txt');
const fileOrDirAbsolutePath = path.resolve(__dirname, "./myFiles/test2");

(async function () {
  const isExists = await exists(fileOrDirAbsolutePath);
  if (isExists) {
    console.log("目录已存在，无需操作");
  } else {
    await fs.promises.mkdir(fileOrDirAbsolutePath);
    console.log('目录创建成功');
  }
})();