const arry = ["a", "b", "c"];

arry[4] = "e";

Object.prototype.method = function () {};
// ここでfalseにしてもforofを使った場合は列挙される
Object.defineProperty(arry, 0, {
  enumerable: false,
});

for (let v of arry) {
  console.log(v); // "a", "b", "c"
}
