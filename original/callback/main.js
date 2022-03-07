// function sleep(val) {
//   setTimeout(function () {
//     console.log(val++);
//     setTimeout(function () {
//       console.log(val++);
//       setTimeout(function () {
//         console.log(val++);
//         setTimeout(function () {
//           console.log(val++);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }

// sleep(0);
// sleep(function (val) {
//   sleep(function (val) {
//     sleep(function (val) {
//       sleep(function (val) {}, val);
//     }, val);
//   }, val);
// }, 0);

// function fn1(val) {
//   setTimeout(function () {
//     console.log(val++);
//     fn2(val);
//   }, 1000);
// }
// function fn2(val) {
//   setTimeout(function () {
//     console.log(val++);
//     fn3(val);
//   }, 1000);
// }
// function fn3(val) {
//   setTimeout(function () {
//     console.log(val++);
//   }, 1000);
// }

// fn1(0);
// console.log("hello");

// function ask(question, yes, no) {
//   if (confirm(question)) showOk();
//   else showCancel();
// }

function showMessage(callback) {
  const messageText = "showMessage Text";
  callback(messageText);
  showOk(messageText);
}

function showOk(messageText) {
  alert(messageText);
}

// 使用法: 関数 showOk, showCancel は ask の引数として渡されます
showMessage(showOk);
