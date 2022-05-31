const array1 = [1, 2];
const array2 = [3, 4];
const result = [...array1, ...array2];
console.log(result);

const person = {
  name: "John",
  age: 22,
};

const personResult = { ...person, height: 180 };
console.log(personResult);

const arr = [1, 2, 3, 4, 5];
const [a, b, ...c] = arr;
console.log(a, b, c);

const obj = { a: 1, b: 2, c: 3, x: 10 };
const { x, ...props } = obj;
console.log(x, props);
