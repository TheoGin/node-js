
const start = Date.now();

setTimeout(() => {
  console.log('setTimeout');
  console.log(Date.now() - start, 'ms');
})