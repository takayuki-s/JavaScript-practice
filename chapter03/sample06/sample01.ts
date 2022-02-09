class Book {
  private _name: string = "";
  readonly code: string = "1234567";

  set name(value: string) {
    if (value === "") {
      console.log("書籍名が指定されていません");
    } else {
      this._name = value;
    }
  }
  get name(): string {
    return this._name;
  }
}

let myBook: Book = new Book();
myBook.name = "JavaScript入門";
console.log(myBook.name);

console.log(myBook.code);
