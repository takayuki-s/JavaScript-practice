function* gen() {
  yield 1;
  yield 2;
  return 3;
}

const it = gen();
console.log(it.next());
console.log(it.next());
console.log(it.next());
