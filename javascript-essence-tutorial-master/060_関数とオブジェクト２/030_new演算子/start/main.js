// returnでオブジェクトになっている場合
function F(a, b) {
  this.a = a;
  this.b = b;
  return {};
}
// returnでオブジェクト以外（もしくはreturnなし）になっている場合
function FF(a, b) {
  this.a = a;
  this.b = b;
}

FF.prototype.c = function () {};

const instanceF = new F(1, 2);
console.log(instanceF); // 空のオブジェクトが返ってくる

const instanceFF = new FF(1, 2);
console.log(instanceFF); // thisにaとbを持ったオブジェクトが返ってくる
