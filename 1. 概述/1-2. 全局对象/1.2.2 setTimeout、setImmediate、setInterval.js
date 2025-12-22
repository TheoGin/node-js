let timer1 = setTimeout(() => {
  console.log("setTimeout");
});
console.log(timer1);
/* Node中的打印结果
Timeout {
  _idleTimeout: 1,
  _idlePrev: [TimersList],
  _idleNext: [TimersList],
  _idleStart: 42,
  _onTimeout: [Function (anonymous)],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(kHasPrimitive)]: false,
  [Symbol(asyncId)]: 2,
  [Symbol(triggerId)]: 1
}
* */

// 类似于 setTimeout 0
let timer2 = setImmediate(() => {
  console.log("setImmediate");
});
console.log(timer2);  // node 专有
/*
Immediate {
  _idleNext: null,
  _idlePrev: null,
  _onImmediate: [Function (anonymous)],
  _argv: undefined,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(asyncId)]: 6,
  [Symbol(triggerId)]: 1
}
* */

let timer3 = setInterval(() => {
  console.log("setInterval");
}, 1000);
console.log(timer3);  // 浏览器则是一个数字
/*
Timeout {
  _idleTimeout: 1000,
  _idlePrev: [TimersList],
  _idleNext: [TimersList],
  _idleStart: 40,
  _onTimeout: [Function (anonymous)],
  _timerArgs: undefined,
  _repeat: 1000,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(kHasPrimitive)]: false,
  [Symbol(asyncId)]: 7,
  [Symbol(triggerId)]: 1
}
* */