//  Promise.allSettled ()
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error3");
  }, 1000);
});

Promise.allSettled([p1, p3])
  .then((rs) => console.log(rs))
  .catch((err) => console.log(err));

// [
    // {status: 'fulfilled', value: 10}
    // {status: 'rejected', reason: 'error3'}
// ]
