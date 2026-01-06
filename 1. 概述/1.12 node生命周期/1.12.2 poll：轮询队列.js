const fs = require("node:fs");

console.time("setTimeout runtime: ");

setTimeout(() => {
  console.log("setTimeout");
  console.timeEnd("setTimeout runtime: ");
}, 200); // 不一定在 200ms 后一定能运行

fs.readFile("./1.12.2 poll：轮询队列.js", 'utf-8', (err, data) => {
  setImmediate(() => {
    console.log("setImmediate");
  });

  const start = Date.now();
  while (Date.now() - start < 300) { }
});
/*
setImmediate
setTimeout
setTimeout runtime: : 307.447ms
* */