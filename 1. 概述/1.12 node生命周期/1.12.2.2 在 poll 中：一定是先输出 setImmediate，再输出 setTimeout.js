const fs = require("node:fs");

fs.readFile("./1.12.2 poll：轮询队列.js", (err, data) => {
  setTimeout(() => {
    console.log("setTimeout");
  });

  setImmediate(() => {
    console.log("setImmediate");
  });
});
/*
一定是先输出 setImmediate，再输出 setTimeout
* */