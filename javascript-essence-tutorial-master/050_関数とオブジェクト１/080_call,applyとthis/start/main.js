function a(name) {
  console.log("hello " + this.name);
}

const b = a.bind({ name: "Tim" });

b();
