function Person1(name, age) {
  this.name = name;
  this.age = age;
}

Object.defineProperty(Person1.prototype, "name", {
  get: function () {
    console.log("hello get");
    return this._name;
  },
  set: function (val) {
    console.log("hello set");
    this._name = val;
  },
});

// const p1 = new Person1("Bob", 23);
// console.log(p1.name);
// p1.name = "Tom";
// console.log(p1.name);

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get name() {
    console.log("hello2 get");
    return this._name;
  }
  set name(val) {
    console.log("hello2 set");
    this._name = val;
  }

  static hello() {
    console.log("hello"); // インスタンス化をしていないのでthisの挙動が変わる
  }
}

const p2 = new Person2("Bob", 23);

Person2.hello();
