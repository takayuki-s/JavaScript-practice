const a = {
  prop: 0,
};

const b = {
  prop: 0,
};

console.log(a === b); // 参照先のオブジェクトが違うのでfalseが返ってくる
console.log(a.prop === b.prop); // オブジェクトの中身の値が同じなのでtrueが返ってくる

const c = a;
console.log(a === c); // 参照先のオブジェクトが一致するためtrueが返ってくる
