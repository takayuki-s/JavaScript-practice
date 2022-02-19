// 実行可能だが、numの値がどこからでも変更できてしまう
let num1 = 0;

increment1();
increment1();
increment1();

function increment1() {
  num1 = num1 + 1;
  console.log(num1);
}

// クロージャーを使って関数内のnumを外部から使えるようにする
function incrementFactory() {
  let num = 0;
  function increment() {
    num = num + 1;
    console.log(num);
  }

  return increment;
}

const increment = incrementFactory();

increment();
increment();
increment();
increment();
