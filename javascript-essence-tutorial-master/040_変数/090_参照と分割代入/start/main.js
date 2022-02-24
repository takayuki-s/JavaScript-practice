const a = {
  prop: 0,
};

let { prop } = a;
console.log(prop);

prop = 1;

console.log(a);
console.log(prop);

function fn(obj) {
  let { prop } = obj;
  prop = 1;
  console.log(obj);
  console.log(prop);
}

// 引数を分割代入するパターン
function fn2({ prop }) {
  prop = 2;
  console.log(a);
  console.log(prop);
}

fn(a);
fn2(a);

const c = {
  prop1: {
    prop2: 0,
  },
};
let { prop1 } = c;
console.log(prop1);

prop1.prop2 = 3;

console.log(c);
console.log(prop1);
