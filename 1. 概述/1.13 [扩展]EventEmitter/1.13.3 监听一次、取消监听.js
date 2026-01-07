const {EventEmitter} = require("node:events");


const eventEmitter = new EventEmitter();
const handleListener = () => {
  console.log("test1事件被触发了");
};
eventEmitter.on("test", handleListener);
eventEmitter.once("test", () => {
  console.log("test2事件被触发了");
});
eventEmitter.on("test", () => {
  console.log("test3事件被触发了");
});

// { eventName: [fn1, fn2, fn3] }
eventEmitter.emit("test");

// { eventName: [fn1, fn3] }
eventEmitter.off("test", handleListener);

// { eventName: [fn3] }
eventEmitter.emit("test");


/*
test1事件被触发了
test2事件被触发了
test3事件被触发了
test3事件被触发了
* */