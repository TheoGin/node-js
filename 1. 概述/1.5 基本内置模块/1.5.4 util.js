const util = require("util");

async function delay(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(duration);
      // reject(new Error(123))
    }, duration);
  });
}

/*delay(500).then(d => {
  console.log(d);
})*/


// 1. callbackify： export function callbackify<T1>(fn: (arg1: T1) => Promise<void>, ): (arg1: T1, callback: (err: NodeJS.ErrnoException, result: TResult) => void) => void;
const delayCallback = util.callbackify(delay); // 返回函数
console.log(delayCallback); // [Function: delayCallbackified]
delayCallback(500, (err, duration) => {
  // 1.1、正常情况
  console.log(err, duration); // null 500

  // 1.2、错误情况
  console.log(err, duration);
  /*
  Error: 123
    at Timeout._onTimeout (D:\DuYi\NodeJS\code\node-js\1. 概述\1.5 基本内置模块\1.5.4 util.js:7:14)
    at listOnTimeout (internal/timers.js:554:17)
    at processTimers (internal/timers.js:497:7) undefined
  * */
});

function delayFn(duration = 1000, callback) {
  setTimeout(() => {
    callback(null, duration);
  }, duration);
}

// 2. promisify: export function promisify<T1, TResult>( fn: (arg1: T1, callback: (err: any, result: TResult) => void) => void ): (arg1: T1) => Promise<TResult>;
const promiseCallback = util.promisify(delayFn); // 返回 Promise
console.log(promiseCallback); // [Function: delayFn]
/*promiseCallback(500).then(d => {
  console.log(d); // 500
})*/

(async () => {
  const result = await promiseCallback(2000);
  console.log(result); // 2000
})();

const obj1 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5,
    },
  },
};
const obj2 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 6,
    },
  },
};
// 4. isDeepStrictEqual
console.log(util.isDeepStrictEqual(obj1, obj2)); // false