const s = Symbol();
const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
  [s]: "value4",
};

Object.prototype.method = function () {};
Object.defineProperty(Object.prototype, "method", {
  enumerable: false,
});

const d = Object.getOwnPropertyDescriptor(Object.prototype, "method");
const e = Object.getOwnPropertyDescriptor(obj, s);
console.log(d);
console.log(e);

for (let key in obj) {
  // prototypeに格納されているmethodが列挙対象から外れる
  if (obj.hasOwnProperty(key)) {
    console.log(key); // prop1,prop2などが出力される
    console.log(obj[key]); // value1,value2などが出力される
  }
}
