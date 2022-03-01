const fn1 = () => {
  task(1);
  task(2);
  task(3);
};
const fn2 = () => {
  task(4);
  task(5);
  task(6);
};

const task = (order) => {
  console.log(`task ${order} の処理を開始`);
  const startTime = new Date();
  while (new Date() - startTime < 2000);
  console.log(`task ${order} の処理を終了`);
};

fn1();
fn2();
