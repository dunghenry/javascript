//nó chỉ ghi nhớ giá trị của lần lặp cuối cùng được chuyển đến setTimeout
// for (var index = 0; index <= 3; index++) {
//    setTimeout(function () {
//         console.log('after ' + index + ' second(s):' + index);
//    }, index * 1000);
// }

//solution

//use IIFE
for (var index = 0; index <= 3; index++) {
  (function (index) {
    setTimeout(function () {
      console.log("after " + index + " second(s):" + index);
    }, index * 1000);
  })(index);
}

//key let: Mỗi lần lặp sẽ tạo ra một phạm vi từ vựng mới (new lexical scope)
for (let index = 0; index <= 3; index++) {
  setTimeout(function () {
    console.log("after " + index + " second(s):" + index);
  }, index * 1000);
}
