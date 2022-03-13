for (let i = 0; i < 5; i++) {
  var j2 = i * 2;
  const j = i * 2;
  setTimeout(function () {
    console.log(j);
    console.log(j2); // 8が5回表示される
  }, 1000);
}
