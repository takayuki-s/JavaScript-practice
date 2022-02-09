"use strict";
class Item {
    constructor(price, tax) {
        if (tax) {
            this.tax = tax;
        }
        else {
            this.tax = 10;
        }
        if (isFinite(price)) {
            this.price = price;
        }
        else {
            this.price = 0;
        }
    }
    getTax() {
        return Math.round(this.price * (this.tax / 100));
    }
}
let apple = new Item(180);
console.log(apple.tax);
console.log(apple.getTax());
