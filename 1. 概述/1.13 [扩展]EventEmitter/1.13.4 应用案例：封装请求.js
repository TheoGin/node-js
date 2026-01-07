const MyRequest = require("./MyRequest");

const myRequest = new MyRequest("http://www.baidu.com");

myRequest.send();

myRequest.on("response", (headers, body) => {
  console.log(headers, body);
});

/*
{
  'accept-ranges': 'bytes',
  'cache-control': 'no-cache',
  'content-length': '29506',
  'content-type': 'text/html',
  date: 'Wed, 07 Jan 2026 14:27:00 GMT',
  p3p: 'CP=" OTI DSP COR IVA OUR IND COM ", CP=" OTI DSP COR IVA OUR IND COM "',
  pragma: 'no-cache',
  server: 'BWS/1.1',
  'set-cookie': [
    'BAIDUID=F052FBE89394ADEF62492B42ECF15F3B:FG=1; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2147483647; path=/; domain=.baidu.com',
    'BIDUPSID=F052FBE89394ADEF62492B42ECF15F3B; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2147483647; path=/; domain=.baidu.com',
    'PSTM=1767796020; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2147483647; path=/; domain=.baidu.com',
    'BAIDUID=F052FBE89394ADEF0476087BB30D4A03:FG=1; max-age=31536000; expires=Thu, 07-Jan-27 14:27:00 GMT; domain=.baidu.com; path=/; version=1; comment=bd'
  ],
  tr_id: 'pr_0xe93126b200021027',
  traceid: '1767796020024037889010812754690466834121',
  vary: 'Accept-Encoding',
  'x-ua-compatible': 'IE=Edge,chrome=1',
  'x-xss-protection': '1;mode=block',
  connection: 'close'
} <!DOCTYPE html>
<html>
<head>
    <meta http-eq……
* */