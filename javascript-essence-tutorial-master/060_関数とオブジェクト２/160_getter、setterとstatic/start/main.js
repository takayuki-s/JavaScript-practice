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

const p1 = new Person1("Bob", 23);
console.log(p1.name);
p1.name = "Tom";
console.log(p1.name);
