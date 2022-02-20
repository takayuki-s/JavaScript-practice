function a() {
  console.log("called");
}

a();

(function () {
  console.log("called");
})();

let b = (function () {
  console.log("called");
})();

let c = (function (d) {
  let privateVal = 0;
  let publicVal = 10;
  function privateFn() {
    console.log("privateFn is called");
  }
  function publicFn() {
    console.log("publicFn is called: " + privateVal++);
  }
  console.log("called " + d);
  // returnで返した変数や関数はスコープ外でも使用できる
  return {
    publicVal,
    publicFn,
  };
})();

c.publicFn();
c.publicFn();
c.publicFn();

console.log(c.publicVal);
