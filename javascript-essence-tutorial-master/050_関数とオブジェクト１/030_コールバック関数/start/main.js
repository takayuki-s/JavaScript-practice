function hello(name) {
  console.log("hello " + name);
}

function bye() {
  console.log("bye");
}

function fn(cb) {
  cb("Tom");
}

fn(hello);
fn(bye);
// 無名関数もOK
fn(function (name) {
  console.log("hi " + name);
});

setTimeout(hello, 2000); // 実引数"Tom"が関数helloに渡らないため、helloの仮引数にはundefinedが渡る
