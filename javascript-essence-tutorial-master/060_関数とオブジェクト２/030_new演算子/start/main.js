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

function newOpe(C, ...args) {
  // 引数で渡ってきたものをargsという配列に入れる（引数の数が変わる時などに活用）
  const _this = Object.create(C.prototype);
  const result = C.apply(_this, args);
  console.log(result);
  console.log(_this);
  if (typeof result === "object" && result !== null) {
    return result;
  }
  return _this;
}
const newInstance = newOpe(FF, 1, 2);
console.log(newInstance);

const newInstanceInObj = newOpe(F, 1, 2);
console.log(newInstanceInObj);
