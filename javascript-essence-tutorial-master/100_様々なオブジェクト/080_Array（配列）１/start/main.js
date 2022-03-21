const arry = [1, 2, 3, 4, 5];
arry.push(6); // 配列の最後に追加
console.log(arry);
arry.unshift(0); // 配列の最初に追加
console.log(arry);
const popResult = arry.pop(); // 配列の最後が削除され、popResultに格納される
console.log(popResult);
console.log(arry);
const shiftResult = arry.shift(); // 配列の最初が削除され、shiftResultに格納される
console.log(shiftResult);
console.log(arry);
const spliceResult = arry.splice(0, 2, 1, 2); // 配列を切り取る 第三引数以降は配列に再代入する値を指定することができる
console.log(spliceResult);
console.log(arry);
const arry2 = arry.concat([6, 7, 8]); // 配列を結合する
console.log(arry2);
const arry3 = [0, ...arry, 6, 7, 8]; // スプレッド演算子を使って配列を結合（こっちの方が使いやすい）
console.log(arry3);
