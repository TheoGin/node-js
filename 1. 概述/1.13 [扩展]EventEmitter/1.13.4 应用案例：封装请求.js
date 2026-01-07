const MyRequest = require("./MyRequest");

const myRequest = new MyRequest('http://www.baidu.com');

myRequest.on('response', (headers, body) => {
  console.log(headers, body);
})

