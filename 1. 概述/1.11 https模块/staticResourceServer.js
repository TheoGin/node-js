const http = require("node:http");
const URL = require("node:url");
const path = require("node:path");
const fs = require("node:fs");


async function getFileState(filePath) {
  console.log('filePath', filePath);
  try {
    return  await fs.promises.stat(filePath);
  } catch (err) {
    // 文件不存在
    return null;
  }
}

async function getFileInfo(url) {
  const urlWithStringQuery = URL.parse(url);
  const urlPath = urlWithStringQuery.pathname.substring(1);
  let filePath = path.resolve(__dirname, "public", urlPath);
  const stats = await getFileState(filePath);
  // 文件存在，可能是目录，也可能是文件
  if (!stats) {
    // 文件不存在
    return null;
  } else if (stats.isDirectory()) {
    // 文件是一个目录，可能是访问首页
    filePath = path.resolve(filePath, "index.html");
    const fileState = await getFileState(filePath);
    if (!fileState) {
      return fileState;
    } else {
      // 文件存在。用流的方式读取更好
      return await fs.promises.readFile(filePath);
    }
  } else {
    // 文件存在。用流的方式读取更好
    return await fs.promises.readFile(filePath);
  }
}

async function handler(request, response) {
  const content = await getFileInfo(request.url);
  if (content) {
    response.write(content);
  } else {
    response.statusCode = 404;
    response.write("Resource is not exist!");
  }
  response.end();
}

const server = http.createServer(handler);

server.listen(8888);

server.on("listening", () => {
  console.log(`服务器正在监听：${server.address().port}端口，访问路径：http://localhost:8888`);
});