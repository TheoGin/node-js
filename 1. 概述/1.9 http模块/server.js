const http = require("node:http");
const URL = require("node:url");

function handleRequest(request) {
  console.log("request.method", request.method);
  console.log("request.headers", request.headers);
  const url = request.url;

  let requestBody = "";
  request.on("data", chunk => {
    requestBody += chunk.toString("utf-8");
  });

  request.on("close", () => {
    console.log("requestBody", requestBody); // 没有请求体就是 空
  });

  console.log(url); //  /?a=1&b=2
  // console.log(new URL.URL(url)); new URL.URL传递的需要完整 url路径
  console.log(URL.parse(url));
  /*
request.method GET
request.headers {
  'user-agent': 'PostmanRuntime/7.51.0',
  accept: ...,
  'postman-token': '699a3f01-47f0-4555-b5d1-a4e856b0a9e0',
    host: 'localhost:8888',
    'accept-encoding': 'gzip, deflate, br',
    connection: 'keep-alive',
    'content-type': 'application/x-www-form-urlencoded',
    'content-length': '5'
}
/?a=1&b=2
Url {
  protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: '?a=1&b=2',
    query: 'a=1&b=2',
    pathname: '/',
    path: '/?a=1&b=2',
    href: '/?a=1&b=2'
}
requestBody a=123
  * */
}

/*
我是服务器
  1. 请求：IncomingMessage对象
  2. 响应：ServerResponse对象
function createServer<
    Request extends typeof IncomingMessage = typeof IncomingMessage, // 泛型默认值为 typeof IncomingMessage
    Response extends typeof ServerResponse<InstanceType<Request>> = typeof ServerResponse,
>(requestListener?: RequestListener<Request, Response>): Server<Request, Response>;
* */
const server = http.createServer((request, response) => {
  // console.log(request);
  handleRequest(request);
  response.setHeader("a", 1);
  response.setHeader("b", 2);
  response.statusCode = 200; // 默认值
  response.write('你好')

  response.end();
});

server.listen(8888);

server.on("listening", () => {
  console.log(`服务器正在监听：${server.address().port}端口，访问路径：http://localhost:8888`);
});


