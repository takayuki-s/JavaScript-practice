window.name = "John";

const a = () => console.log("Bye " + this.name); // thisはwindowオブジェクトを参照する（"John"）

const person = {
  name: "Tom",
  hello: function () {
    console.log("Hello " + this.name);
    const b = () => console.log("Bye " + this.name); // thisはhello関数のオブジェクトを参照する（"Tom"）
    a();
    b();
  },
  //   hello: () => {
  //     console.log("Hello " + this.name); // thisはwindowオブジェクトを参照する（"John"）
  //   },
};
person.hello();

function c() {
  const d = () => console.log("Bye " + this.name); // thisはwindowオブジェクトを参照する（"John"）
  d();
}
c();
