function F(a, b) {
  this.a = a;
  this.b = b;
  //   const result = new Object();
  //   result.a = 1;
  //   return result;
  //   return {a: 1} // 上記3行の内容
}

F.prototype.c = function () {};

const instance = new F(1, 2);
console.log(instance);
console.log(instance instanceof F);
console.log(instance instanceof Object);
console.log(instance.__proto__ === F.prototype); // 11行目

function fn(arg) {
  if (arg instanceof Array) {
    arg.push("value");
  } else {
    arg["key"] = "value";
  }
  console.log(arg);
}

fn([]); // 配列を渡す
fn({}); // オブジェクトを渡す
