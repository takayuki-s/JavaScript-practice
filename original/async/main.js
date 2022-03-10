const sayHello = async () => {
  console.log("hello"); // 3番目（同期処理）
  setTimeout(() => {
    console.log("setTimeout done"); // 7番目
  });
};

const greeting = async () => {
  console.log("greeting start"); // 2番目
  await sayHello() // sayHelloが実行される 以下は非同期処理となる
    .then(() => {
      console.log("sayHello done"); // 5番目 グローバルコンテキストが捌けた+sayHelloの実行が終わっているので実行される
    });
  console.log("greeting end"); // 6番目
};

console.log("global start"); // 1番目
greeting(); // greetingが実行される
console.log("global end"); // 4番目
