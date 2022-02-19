function a() {
  let b = 0;
  console.log(b);
}
a();

if (true) {
  let c = 1;
  console.log(c);
  const d = function d() {
    console.log("de is called");
  };
}

d(); //エラーになる
