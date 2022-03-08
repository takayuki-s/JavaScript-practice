new Promise(function (resolve, reject) {
  console.log("promise");
  // resolve("hello");
  // reject("bye");
  setTimeout(function () {
    resolve("hello");
  }, 1000);
})
  .then(function (data) {
    console.log("then: " + data);
    return data; // 2つ目のthenに渡す
  })
  .then(function (data) {
    console.log("then part2: " + data);
    throw new Error(); // thenメソッド内でcatchに遷移したい場合
  })
  .then(function (data) {
    console.log("then part3: " + data);
  })
  .catch(function (data) {
    console.log("catch: " + data);
  })
  .finally(function () {
    console.log("finally");
  });

console.log("global end");
