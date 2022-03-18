// "use strict";
a = 0; // windowオブジェクト
function fn() {
  // "use strict"; // 関数内でも使える
  b = 0;
  // const implements, interface, package // これらは予約語エラー
  return this; // windowオブジェクト、strictモードではundefined
}
fn();
console.log(fn.call(2));
console.log(a);
