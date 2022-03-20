const wm = new WeakMap();

let o = {};
wm.set(o, "value1");

console.log(wm.get(o)); // value1
console.log(wm.has(o)); // true
console.log(wm.delete(o));
console.log(wm.get(o)); // undefined

o = null; // 一度削除されると、setのオブジェクトは二度と参照されなくなるとして、ガベージコレクションされる
o = {};
console.log(wm.get(o)); // undefined
