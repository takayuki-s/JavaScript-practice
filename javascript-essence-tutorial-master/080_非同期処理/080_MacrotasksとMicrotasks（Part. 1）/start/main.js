// Macrotasks
setTimeout(function task1() {
  console.log("task1");
});

// Microtasks
new Promise(function promise(resolve) {
  console.log("promise");
  resolve();
}).then(function job1() {
  console.log("job1");
});

console.log("global end");
