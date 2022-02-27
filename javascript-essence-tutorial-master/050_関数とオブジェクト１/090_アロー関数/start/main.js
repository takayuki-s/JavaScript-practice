function a(name) {
  return "hello " + name;
}

const b = (name) => "hello " + name;
const c = (name, name1) => "hello " + name + " " + name1;
const d = (_) => "hello " + _ + " " + _;

console.log(b("Tom"));
console.log(c("Tom", "Bob"));
console.log(d("Tom", "Bob"));
