const arry = [1, 2, 3, 4, 5];

const result = arry.reduce(function (accu, curr) {
  console.log(accu, curr);
  return accu + curr;
}, 0);

console.log(result); // 15

// 文字列はどうなるか検証
const stringArry = ["a", "b", "c"];
const reduceArry = stringArry.reduce(function (accu, curr) {
  console.log(accu, curr);
  return accu + curr;
});
console.log(reduceArry);
