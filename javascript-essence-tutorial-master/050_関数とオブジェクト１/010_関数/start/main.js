function fn(a, b = 1) {
  console.log(arguments); // 実引数
  const c = arguments[0];
  const d = arguments[1];
  console.log(a, b);
  console.log(c, d);
  return a;
}

let c = fn(0, undefined); // この場合bには初期値の1が適用される
console.log(c);
