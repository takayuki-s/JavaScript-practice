let a = (1 + 2) * 3;
console.log(a);

let b = 0;
console.log(b);
let c;
// let c = ++b;
// b = c = 1;
// let c = b++;
b = (c = b) + 1;
console.log(b, c);

function fn() {
  let a = 0;
  return a++;
}

console.log(!fn() * 5); // 暗黙の型変換で!fn()にはtrue(1)が入る
