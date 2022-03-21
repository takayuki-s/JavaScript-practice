const obj = { a: 0 };
const json = JSON.stringify(obj);
localStorage.setItem("key1", json);
localStorage.setItem("key2", "value2");
const result = localStorage.getItem("key1");
const obj2 = JSON.parse(result);
console.log(obj2);
console.log("end");
