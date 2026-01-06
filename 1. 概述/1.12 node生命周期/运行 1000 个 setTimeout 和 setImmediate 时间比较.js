console.time("time：");

let i = 0;

function testTime() {
  i++;
  if (i < 1000) {
    // 进入 timers， 运行；进入 timers， 运行…… 累计 100 次
    // setTimeout(testTime, 0);

    // 进入 check， 运行；进入 check， 运行…… 累计 100 次
    setImmediate(testTime);
  } else {
    console.timeEnd("time：");
  }
}

testTime();

// setTimeout：: 14.802 s
// setImmediate：: 8.699ms

/*
console.time("time：");

function runSetTimeout() {
  setTimeout(() => {
  }, 0);
}

function runSetImmediate() {
  setImmediate(() => {
  });
}

let i = 0;
while (true) {
  i++;
  if (i < 1000) {
    // runSetTimeout();
    runSetImmediate();
  } else {
    console.timeEnd("time：");
    break;
  }
}

// setTimeout：: 2.67ms
// setImmediate：: 2.67ms*/
