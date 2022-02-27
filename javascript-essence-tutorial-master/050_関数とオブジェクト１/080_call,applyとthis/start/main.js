function a(name, name2) {
  console.log("hello " + name + " " + name2);
  console.log("hello " + this.name);
}

const tim = { name: "Tim" };
const b = a.bind({ name: "Tim" });

b();

a.apply(tim, ["Ken", "Bob"]); // この時点で関数の実行まで行われる
a.call(tim, "Tom", "Bob"); // applyと同様この時点で関数の実行まで行われる。 第二引数以下で関数の引数を取ることができる。

const arr = [1, 2, 3, 4, 5];
// const result = Math.max.apply(null, arr); // ES6以降は以下のスプレッド演算子
const result = Math.max(...arr);
console.log(result);
