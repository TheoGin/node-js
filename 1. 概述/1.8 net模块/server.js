const net = require("node:net");
const fs = require("node:fs");
const path = require("node:path");

/*

* */
// 1. net.createServer(connectionListener?: (socket: Socket) => void): Server;
// 2. 返回：server对象
const server = net.createServer();

// 2.1. server.listen(port)：监听当前计算机中某个端口
server.listen(8888); // 服务器监听 8888 端口

// 2.2. server.on("listening", ()=>{})：开始监听端口后触发的事件
server.on("listening", () => {
  console.log(`服务器正在监听：http://localhost:${server.address().port}`); // 服务器正在监听：http://localhost:8888
});

// 2.3. server.on("connection", socket=>{})
//   2.3.1. 当某个连接到来时，触发该事件
//   2.3.2. 事件的监听函数会获得一个socket对象
server.on("connection", async (socket) => {
  console.log("有客户端连接到服务器");

  // 用流的方式来处理（读流）：采用HTTP的方式，请求 -》 响应
  socket.on('data',  async chunk => {
    // chunk 请求
    console.log('chunk', chunk.toString('utf-8')); // 客户端传给服务器的东西
    /* 客户端传给服务器的东西：请求消息
    chunk GET / HTTP/1.1
    Host: localhost:8888
    Connection: keep-alive
    ……
    * */

    const requestLineBuffer = Buffer.from(`HTTP1.1 200 OK
Content-type: image/jpeg

`, "utf-8");

    const filePath = path.resolve(__dirname, "hsq.jpg");
    const imgBuffer = await fs.promises.readFile(filePath);
    // console.log(imgBuffer);
    // const httpFormatBuffer = Buffer.concat(requestLineBuffer, imgBuffer);
    // Buffer.concat 需要传递一个数组
    const httpFormatBuffer = Buffer.concat([requestLineBuffer, imgBuffer]);

    // 响应
    socket.write(httpFormatBuffer);

    socket.end();
  })

  socket.on('end', () => {
    console.log('连接关闭了');
  })

  /*const requestLineBuffer = Buffer.from(`HTTP1.1 200 OK
Content-type: image/jpeg

`, "utf-8");

  const filePath = path.resolve(__dirname, "hsq.jpg");
  const imgBuffer = await fs.promises.readFile(filePath);
  console.log(imgBuffer);
  // const httpFormatBuffer = Buffer.concat(requestLineBuffer, imgBuffer);
  // Buffer.concat 需要传递一个数组
  const httpFormatBuffer = Buffer.concat([requestLineBuffer, imgBuffer]);
  socket.write(httpFormatBuffer);

  socket.end(() => {
    console.log("socket.end 手动触发连接关闭");
  });*/
});
/*
服务器正在监听：http://localhost:8888
有客户端连接到服务器
chunk GET / HTTP/1.1
Host: localhost:8888
Connection: keep-alive
sec-ch-ua: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
  Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
Cookie: Webstorm-ab137779=83d6d9e1-adce-4225-8575-3564de40347f


有客户端连接到服务器
连接关闭了
* */
