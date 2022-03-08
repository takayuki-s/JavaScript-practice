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

function fn1(val) {
  setTimeout(function () {
    console.log(val++); // 1
    fn2(val);
    console.log("fn1 done " + val); // fn2の処理を待たない
  }, 1000);
}
function fn2(val) {
  setTimeout(function () {
    console.log(val++); // 2
    fn3(val);
    console.log("fn2 done " + val); // fn3の処理を待たない
  }, 1000);
}
function fn3(val) {
  setTimeout(function () {
    console.log(val++); // 3
    console.log("fn3 done " + val);
  }, 1000);
}

fn1(0);
// console.log("hello");

// function ask(question, yes, no) {
//   if (confirm(question)) showOk();
//   else showCancel();
// }

// function showMessage(callback) {
//   const messageText = "showMessage Text";
//   callback(messageText);
//   showOk(messageText);
// }

// function showOk(messageText) {
//   alert(messageText);
// }

// // 使用法: 関数 showOk, showCancel は ask の引数として渡されます
// showMessage(showOk);
