let a = 0;
function fn1(arg1) {
  arg1 = 1;
  console.log(a);
  console.log(arg1);
}
fn1(a);
// 上記の関数は以下と同じ結果が得られる
let arg1 = 0;
arg1 = 1;
console.log(arg1);
// ここまで

let b = {
  prop: 0,
};
function fn2(arg2) {
  arg2.prop = 1; // bに格納されているpropの値が変更される
  console.log(b);
  console.log(arg2);
}
fn2(b);

function fn3(arg2) {
  arg2 = {}; // この場合は互いに独立したオブジェクトとなる
  console.log(b);
  console.log(arg2);
}
fn3(b);
