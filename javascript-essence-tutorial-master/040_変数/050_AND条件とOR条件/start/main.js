const a = 1;
const b = 0;
const c = 3;
const d = 2;
const e = 0;
const f = null;
console.log(a && b); // 0が返る
console.log(a || b); // 1が返る

console.log(a && b && c); // 途中でfalsyな値が見つかったので、bの値(0)が返る
console.log(a && d && c); // 途中でfalsyな値が見つからなかったので、最後に判定したcの値(3)が返る
console.log(b || a || c); // 途中でtruthyな値が見つかったので、aの値(1)が返る
console.log(b || e || f); // 途中でtruthyな値が見つからなかったので、最後に判定したf(null)の値が返る
console.log((a || b) && (c || d)); //(a || b)がfalseなので(c || d)の結果が返る
