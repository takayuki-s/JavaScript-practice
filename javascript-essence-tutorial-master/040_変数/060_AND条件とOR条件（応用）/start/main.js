function hello(name) {
  // if (!name) {
  //   name = "Tom";
  // }
  name = name || "Tom"; //上記と同じ結果が得られる
  console.log("Hello " + name);
}

// ES6を使っているならこのように初期値の設定ができる
function helloES6(name = "Tom") {
  console.log("Hello " + name);
}

hello();
helloES6();

let anotherName = "Bob";
// if (anotherName) {
//   hello(anotherName);
// }
anotherName && hello(anotherName); //上記と同じ結果が得られる
