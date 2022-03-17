import defaultVal, { publicVal as val, publicFn as fn } from "./moduleA.js";
// import * as moduleA from "./moduleA.js" 全てオブジェクトで取得

console.log(val);
console.log(defaultVal);
fn();
