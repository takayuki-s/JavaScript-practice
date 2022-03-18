function fn() {
  console.log(this); // undefined
}
fn();

class C {
  constructor() {
    function fn() {
      console.log(this); // undefined
    }
    fn();
  }

  method() {
    function fn() {
      console.log(this); // undefined
    }
    fn();
  }
}

const c = new C();
c.method();
