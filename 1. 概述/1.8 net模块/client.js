const net = require("net");
const fs = require("node:fs");
const os = require("node:os");

// 1. net.createConnection(options: NetConnectOpts, connectionListener?: () => void): Socket;
// 2. 返回：socket
//   1. socket是一个特殊的文件
//   2. 在node中表现为一个双工流对象
//   3. 通过向流写入内容发送数据
//   4. 通过监听流的内容获取数据
const socket = net.createConnection({
  // host: 'https://www.baidu.com/',
  host: "www.baidu.com", // 不要写协议、斜杠
  port: 80,
}, () => {
  console.log("连接成功！");
});

socket.write(`GET / HTTP/1.1
Connection: keep-alive
Host: www.baidu.com

`);

let receive = null;

/**
 * 提炼出响应字符串的消息头和消息体
 * @param response
 * @returns {{header: {}, bodyStr: string}}
 */
function parseResonse(response) {
  const index = response.indexOf("\r\n\r\n");
  const headerStr = response.substring(0, index);
  // .slice(1) 去掉请求行
  const header = headerStr.split("\r\n").slice(1).map(str => str.split(":")).reduce((acc, item) => {
    // acc[item[0]] = item.slice(1).join(":");
    acc[item[0]] = item[1].trim();
    return acc;
  }, {});
  const bodyStr = response.substring(index + 1).trimStart();

  return {
    header,
    bodyStr,
  };
}

function isOver() {
  // return receive.bodyStr.length > +receive.header['Content-Length'];

  // 需要接收的消息体的总字节数
  const contentLength = +receive.header['Content-Length'];

  // 转成 Buffer 拿到其接收的【字节】长度
  const currentReceivedLength = Buffer.from(receive.bodyStr, 'utf-8').byteLength;

  // console.log(currentReceivedLength, contentLength);

  return currentReceivedLength > contentLength;
}

socket.on("data", (chunk) => {
  const response = chunk.toString("utf-8");
  if (!receive) {
    // 第一次
    receive = parseResonse(response);
    if (isOver()) {
      // 可能内容比较少，响应体第一次就接收完成
      socket.end();
    }
    return;
  }
  /*if (!isOver()) {
    receive.bodyStr += chunk;
  }
  socket.end();*/
  receive.bodyStr += response;
  if (isOver()) {
    socket.end();
  }
});

socket.on("close", () => {
  console.log(`Buffer.from(receive.bodyStr, 'utf-8').byteLength`, Buffer.from(receive.bodyStr, 'utf-8').byteLength); // 29512
  console.log(`+receive.header['Content-Length']`, +receive.header['Content-Length']); // 29506
  console.log(`receive.header`, receive.header);
  console.log(`receive.bodyStr`, receive.bodyStr);

  console.log("关闭了！");
});
/*
连接成功！
Buffer.from(receive.bodyStr, 'utf-8').byteLength 29512
+receive.header['Content-Length'] 29506
receive.header {
  'Accept-Ranges': 'bytes',
  'Cache-Control': 'no-cache',
  Connection: 'keep-alive',
  'Content-Length': '29506',
  'Content-Type': 'text/html',
  Date: 'Sat, 03 Jan 2026 13',
  Pragma: 'no-cache',
  Server: 'BWS/1.1',
  'Set-Cookie': 'BAIDUID_BFESS=E28E45EFD889B786295045ABE0EBD877',
  Tr_id: 'pr_0xea49656e00021a28',
  Traceid: '1767448718243026407415468782183785976082',
  Vary: 'Accept-Encoding',
  'X-Ua-Compatible': 'IE=Edge,chrome=1',
  'X-Xss-Protection': '1;mode=block'
}
receive.bodyStr <!DOCTYPE html>
<html>
<head>
    ……
        document.getElementById('year').innerText = '©' + year + ' Baidu ';
    </script>
</body>
</html>

关闭了！
* */