// プリミティブ型
const a = "hello";
// a = "bye"; // エラー

const b = {
  prop: "hello",
};
// b = {}; // エラー
b.prop = "bye"; // propはconstによってロックされていないので、変更可能
console.log(b);
