const person = {
  name: "Tom",
  hello: function () {
    console.log("Hello " + this.name);
    console.log("Hello " + person.name); // 4行目と同じ 基本的にはthisを使う
  },
};

person.hello();
