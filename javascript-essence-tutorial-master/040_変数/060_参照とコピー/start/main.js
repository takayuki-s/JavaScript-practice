// プリミティブ型
let a = "hello";
let b = a;
b = "bye";
console.log(a); // "hello"
console.log(b); // bの参照先の値が"bye"になったので、"bye"が出力される

// オブジェクト
let c = {
  prop: "hello",
};
let d = c;
console.log(c, d); // 両方とも"{prop: "hello"}"が出力される
d.prop = "bye";
console.log(c, d); // propの参照先が"bye"に書き変わったので、両方とも"[prop: "bye"}"が出力される
d = {};
console.log(c, d); // cは変わらず"{prop: "bye"}、dは新しいオブジェクトを参照するようになったので{}を出力するようになる
