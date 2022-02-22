function printTypeAndValue(val) {
  console.log(typeof val, val);
}

let a = 0;
printTypeAndValue(a);

// この場合、aの型が"文字列"とされて、"1"と"0"をつなげた"10"が出力される
let b = "1" + a;
printTypeAndValue(b);

// この場合、-の演算子によってbが"数値"とされて、演算された結果（10）が出力される
let c = 15 - b;
printTypeAndValue(c);

// この場合、nullは数値の"0"とされる
let d = c - null;
printTypeAndValue(d);

// この場合、trueは数値の"1"とされる
let e = d - true;
printTypeAndValue(e);

// 文字列を数字に型変換したい場合
let f = parseInt("1") + a;
printTypeAndValue(f);
