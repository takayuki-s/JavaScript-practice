/**
 * 問題１：
 * 以下のコンソールにはどのような値が表示されるでしょうか？
 */

console.log("0 == false", 0 == false); // true
console.log("0 === false", 0 === false); // false
console.log('"false" == false', "false" == false); // false 文字列としての"false"はtruthyな値
console.log('"0" == 0', "0" == 0); // true
console.log('Boolean("0") === false', Boolean("0") === false); //false
console.log("Boolean(0) === false", Boolean(0) === false); // true
console.log("!Boolean(0) === false", !Boolean(0) === false); // false
console.log("-1 == false", -1 == false); // false
console.log("!10 === false", !10 === false); // true truthな値の反転なので!10はfalse扱い

/**
 * 問題２：
 * 関数fnの引数numが渡ってこない場合（undefinedまたはnullの場合）のみ、
 * 初期値として-1を設定したいものとします。
 *
 * 以下の関数fnの初期化を適切に書き直してください。
 * ※aには0以上の整数値が渡ってくるものとします。
 */
let a = 1;

function fn(num) {
  let parseNum = parseInt(num);
  parseNum = parseNum || -1;
  console.log(parseNum);
}

// 解答
function fn2(num) {
  if (num === undefined || num === null) {
    num = -1;
  }
  console.log(num);
}
fn(a);
fn2(a);

/**
 * 問題３：
 * 以下のコードを実行した際にコンソールに
 * 期待の出力を行うような関数greetingを
 * 作成してみてください。
 *
 * greeting("Bob", "hi"); -> 出力結果："hi, Bob"
 * greeting("Bob"); -> 出力結果："hello, Bob"
 *
 */

// 自分の回答 これだと第二引数に空文字を渡すと${greet}の部分が空白になってしまう
function greeting(name, greet = "hello") {
  console.log(`${greet}, ${name}`);
}

// 解答
function greeting2(name, greet) {
  greet = greet || "hello";
  console.log(`${greet}, ${name}`);
}

greeting("Bob", "hi");
greeting("Bob", "");
greeting2("Bob", "hi");
greeting2("Bob", "");
