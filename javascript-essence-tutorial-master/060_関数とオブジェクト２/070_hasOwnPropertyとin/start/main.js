function Person(name, age) {
  this.name = name;
  this.age = age;
}

Object.prototype.hello = function () {
  console.log("Object: hello " + this.name);
};

const bob = new Person("Bob", 18);
const result = bob.hasOwnProperty("name");
const resultHello = bob.hasOwnProperty("hello");
console.log(result); // true
console.log(resultHello); // false
console.log("name" in bob); // true
console.log("hello" in bob); // true
console.log("hasOwnProperty" in bob); // true
