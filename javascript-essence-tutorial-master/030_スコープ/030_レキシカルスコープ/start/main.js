let a = 2;
function fn1() {
  let b = 1;
  function fn2() {
    //fn1の外で書くとbの値が参照できなくなり、エラーとなる
    let c = 3;
    console.log(b);
  }
  fn2();
}
fn1();
