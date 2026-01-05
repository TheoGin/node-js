const http = require("node:http");
const URL = require("node:url");
const path = require("node:path");
const fs = require("node:fs");


async function getFileContent(filePath) {
  console.log(filePath);
  try {
    const stats = await fs.promises.stat(filePath);
    // 文件存在，可能是目录，也可能是文件
    if (!stats) {
      // 文件不存在
      return null;
    } else if (stats.isDirectory()) {
      // 是目录，可能是访问首页
      const defaultFilePath = path.resolve(filePath, "index.html");
      return await getFileContent(defaultFilePath); // 返回递归结果
    } else {
      // 文件存在。用流的方式读取更好
      return await fs.promises.readFile(filePath);
    }
  } catch (err) {
    // 文件不存在
    return null;
  }
}

async function getFileInfo(url) {
  const urlWithStringQuery = URL.parse(url);
  const urlPath = urlWithStringQuery.pathname.substring(1);
  const filePath = path.resolve(__dirname, "public", urlPath);
  return await getFileContent(filePath);
}

async function handler(request, response) {
  const content = await getFileInfo(request.url);

  if (!content) {
    response.statusCode = 404;
    response.write("Resource is not exist!");
    response.end();
    return
  }

  response.write(content);
  response.end();
}

const server = http.createServer(handler);

server.listen(8889);

server.on("listening", () => {
  console.log(`服务器正在监听：${server.address().port}端口，访问路径：http://localhost:8889`);
});