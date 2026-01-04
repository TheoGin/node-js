const http = require("node:http");

// 1. http模块建立在net模块之上
//   1. 无须手动管理socket
//   2. 无须手动组装消息格式
// 2. http.request(url[, options][, callback])
/*
function request(
    url: string | URL,
    options: RequestOptions,
    callback?: (res: IncomingMessage) => void,
): ClientRequest;
* */
const request = http.request("http://yuanjin.tech:5005/api/movie", {
  method: "get",
}, (response) => {
  console.log("服务器响应的状态码 response.statusCode", response.statusCode);
  console.log("服务器响应头 response.headers", response.headers);
  const contentLength = response.headers["content-length"];
  console.log(`response.headers[content-length]`, contentLength);

  let body = "";
  response.on("data", chunk => {
    body += chunk.toString("utf-8");
  });

  response.on("end", () => {
    console.log("body", JSON.parse(body));
  });
});

// 表示请求消息结束了（没有请求体，相当于两个换行）
request.end();

/*
服务器响应的状态码 response.statusCode 200
服务器响应头 response.headers {
  'x-powered-by': 'Express',
  vary: 'Origin',
  'access-control-allow-credentials': 'true',
  'content-type': 'application/json; charset=utf-8',
  'content-length': '7994',
  etag: 'W/"1f3a-dMA4sL8JYb0+EksT3PsJB/aHG38"',
  date: 'Sun, 04 Jan 2026 13:36:46 GMT',
  connection: 'close'
}
response.headers[content-length] 7994
body {
  code: 0,
  message: '',
  count: 28,
  data: [
    {
      _id: '6082342048035267bebf6c20',
      name: 'huanshui',
      createTime: '2021-04-23T02:42:40.004Z',
      updateTime: '2025-03-22T07:11:19.349Z',
      isHot: false
    },
    ……
  ]
}

*/
