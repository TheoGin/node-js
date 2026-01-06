setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

// 可能先输出 setTimeout，也可能先输出 setImmediate