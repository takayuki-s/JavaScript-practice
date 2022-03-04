let d = 0;

function fn() {
  let d = 1;
  const fn1 = new Function("a", "b", `return a * b * d`);
  return fn1;
}

const f = fn();
const result = f(1, 2); // fn1（関数コンストラクタ）が生成される時はグローバルスコープで行われるため、dには0が入る
console.log(result); // 0が出力される

function fn2(a, b) {
  return a + b;
}

console.log(fn2 instanceof Function);

const obj = new (function () {
  this.a = 0;
})();
const fn3 = new Function("this.a = 0");
const obj3 = new fn3();
console.log(obj);
console.log(obj3);
