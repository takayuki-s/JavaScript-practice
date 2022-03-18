const targetObj = { a: 0 };
const handler = {
  set: function (target, prop, value, receiver) {
    console.log(`[set]: ${prop}`);
    // target[prop] = value;
    throw new Error("cannot add prop"); // プロパティを変更させないようにする
  },
  get: function (target, prop, receiver) {
    console.log(receiver);
    // デフォルト値の設定
    if (target.hasOwnProperty(prop)) {
      console.log(`[get]: ${prop}`);
      return target[prop];
    } else {
      return "-1";
    }
  },
  deleteProperty: function (target, prop) {
    console.log(`[delete]: ${prop}`);
    // delete target[prop];
    throw new Error("cannot delete prop"); // プロパティを削除させないようにする
  },
};

const pxy = new Proxy(targetObj, handler);
console.log(pxy.b);
pxy.a = 1;
pxy.a;
delete pxy.a;
