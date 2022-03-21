const arry = [1, 2, 3, 4, 5];

arry.forEach(function (v, i, arry) {
  console.log(v);
});

const newArry = arry.map(function (v, i, arry) {
  console.log(v);
  return v * 2;
});
console.log(newArry);

const filterArry = arry.filter(function (v, i, arry) {
  return i >= 1; // truthyな値のみ配列に格納
});

console.log(filterArry);
