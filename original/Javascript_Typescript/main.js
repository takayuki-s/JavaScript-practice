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
