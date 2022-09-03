const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error3");
  }, 1000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error4");
  }, 2000);
});

Promise.any([p3, p4])
  .then((res) => console.log(res))
  .catch((error) => console.log(error.errors)); //['error3', 'error4']

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

//Trả về lời hứa đc thực hiện đầu tiên và bỏ qua promise bị rejected
Promise.any([p1, p2])
  .then((res) => console.log(res))
  .catch((error) => console.log(error.errors));
Promise.any([p1, p3])
  .then((res) => console.log(res))
  .catch((error) => console.log(error.errors));
