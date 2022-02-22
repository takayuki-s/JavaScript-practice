// a~gは全てfalsyな値
let a = 0;
let b = "";
let c = 0n; //bigInt
let d = null;
let e = undefined;
let f; // undefined
let g = parseInt(""); // NaN

console.log(Boolean(a));
console.log(Boolean(b));
console.log(Boolean(c));
console.log(Boolean(d));
console.log(Boolean(e));
console.log(Boolean(f));
console.log(Boolean(g));

// falsyな値を判定する例
if (!a) {
  // 0もfalse判定に含まれるので、0をtrue判定基準にしたい時は注意!
  console.log("falsy");
} else {
  console.log("truthy");
}
