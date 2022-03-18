import "./moduleA.js";
import "./moduleA.js"; // 2回目は読み込まれない

console.log("module B");

// const h1 = document.querySelector("h1");
// const text = h1.textContent;
// console.log(text);
