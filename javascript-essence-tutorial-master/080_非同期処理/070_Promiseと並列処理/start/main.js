function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, val * 500);
  });
}

// // Promiseの並列処理
Promise.all([sleep(2), sleep(3), sleep(4)]).then(function (data) {
  console.log(data); // 各自resolveで設定した値が配列になってデータが帰ってる
});

// // 直列処理の中に並列処理
// sleep(0)
//   .then(function (val) {
//     return Promise.all([sleep(2), sleep(3), sleep(4)]).then(function (val) {
//       console.log(val);
//       return sleep(val);
//     });
//   })
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   });

// どれか1つが完了した際にthenに移る
// Promise.race([sleep(2), sleep(3), sleep(4)]).then(function (data) {
//   console.log(data);
// });

// 完了した非同期処理が成功したか失敗したか分からないがとりあえず待つ
// Promise.allSettled([sleep(2), sleep(3), sleep(4)]).then(function (data) {
//   console.log(data);
// });
