let a = 2;
window.a = 4;
function fn1() {
  let a = 1;
  function fn2() {
    let a = 3;
    console.log(a); // 6行目、4行目、1行目、2行目の順に参照される

    // if (true) {
    //   var a = 3;
    // }
  }
  fn2();
}
fn1();
