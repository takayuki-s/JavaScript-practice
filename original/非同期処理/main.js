const fn1 = () => {
  task(1);
  setTimeout(() => {
    task(2);
  }, 1000);
  task(3);
};
const fn2 = () => {
  task(4);
  setTimeout(() => {
    task(5);
  }, 1000);
  task(6);
};

const task = (order) => {
  console.log(`task ${order} の処理を開始`);
  const startTime = new Date();
  while (new Date() - startTime < 1000);
  console.log(`task ${order} の処理を終了`);
};

setTimeout(() => {
  task(0);
}, 1000);
fn1();
fn2();
