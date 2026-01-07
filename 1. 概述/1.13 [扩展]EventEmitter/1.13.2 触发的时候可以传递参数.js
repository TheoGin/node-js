const {EventEmitter} = require("node:events");


const eventEmitter = new EventEmitter();

eventEmitter.on("test", (num1, num2) => {
  console.log("test1事件被触发了", num1, num2);
});

eventEmitter.emit("test", 1, 2);

/*
test1事件被触发了 1 2
* */