function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log("hello " + this.name);
};

function Japanese(name, age) {
  Person.call(this, name, age);
}

Japanese.prototype.hello = function () {
  console.log("こんにちは " + this.name);
};

Japanese.prototype = Object.create(Person.prototype);

const taro = new Japanese("Taro", 23);
console.log(taro);

taro.hello();
