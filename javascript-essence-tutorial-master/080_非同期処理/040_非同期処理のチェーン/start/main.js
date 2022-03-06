// function sleep(callback, val) {
//   setTimeout(function () {
//     console.log(val++);
//     callback(val);
//   }, 1000);
// }

// sleep(function (val) {
//   sleep(function (val) {
//     sleep(function (val) {
//       sleep(function (val) {}, val);
//     }, val);
//   }, val);
// }, 0);

function fn1(val) {
  setTimeout(function () {
    console.log(val++);
    fn2(val);
  }, 1000);
}
function fn2(val) {
  setTimeout(function () {
    console.log(val++);
    fn3(val);
  }, 1000);
}
function fn3(val) {
  setTimeout(function () {
    console.log(val++);
  }, 1000);
}

fn1(0);
console.log("hello");
