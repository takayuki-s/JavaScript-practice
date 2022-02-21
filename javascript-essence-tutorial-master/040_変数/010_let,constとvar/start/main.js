// letは再宣言できない
// let a = 0;
// let a = 0;

// varは再宣言できる
// var b = 0;
// var b = 1;

// letは再代入できる
// let c = 0;
// c = 1;

// constは再代入できない
// const d = 0;
// d = 1;

// letはブロックスコープ、varはグローバルスコープ
{
  let e = 0;
  var f = 0;
}

// letは宣言前に取得しようとするとエラーが起きるが、varはホイスティング（初期化）されて表示される
console.log(g);
console.log(h);
let g = 0;
var h = 0;
