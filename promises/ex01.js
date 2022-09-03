const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(30);
  }, 1000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 4");
    reject(30);
  }, 2000);
});
// p1.then((rs) => console.log(rs)).catch(err => console.log(err));

//todo promise chaining
// p1.then(rs => rs * 2).then((rs) => console.log(rs)).catch(err => console.log(err));

//? promise all: Nếu có 1 promise bị từ chối sẽ trả về promise bị từ chối đầu tiên
// Promise.all([p1, p4, p3]).then((rs) => console.log(rs)).catch(err => console.log(err));

//! promise race: Trả về promise đc thực hiện trước không phân biệt promise resolve or reject
Promise.race([p3, p4])
  .then((rs) => console.log(rs))
  .catch((err) => console.log(err));
