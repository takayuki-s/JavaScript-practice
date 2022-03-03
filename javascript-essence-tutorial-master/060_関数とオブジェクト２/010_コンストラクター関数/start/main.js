function Person(name, age) {
  // 一般的にはコンストラクター関数は最初を大文字にして定義する
  this.name = name;
  this.age = age;
}

const bob = new Person("Bob", 18);
const tom = new Person("Tom", 33);
const sun = new Person("Sun", 20);
