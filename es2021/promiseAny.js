// const p1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         console.log("Promise 1");
//         resolve(1);
//     }, 1000);
// })

// const p2 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         console.log("Promise 2");
//         resolve(2);
//     }, 2000);
// })

//Trả về kết quả của promise đầu tiên được thực thi
// const p = Promise.any([p1, p2]);
// console.time("timer");
// p.then((value) => {
//     console.log(value)
//     console.timeEnd("timer");
// }).catch((err) => console.log(err));


// 1 promise reject thì trả về kq của promise còn lại
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("eror1 message");
    }, 2000);
})

// const promise = Promise.any([p1,p3]);
// promise.then((value) => {
//     console.log(value)
// }).catch((err) => console.log(err));


const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("eror2 message");
    }, 2000);
})

const promiseeror = Promise.any([p3, p4]);

promiseeror.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err); //AggregateError: All promises were rejected
    console.log(err.errors); // ['eror1 message', 'eror2 message']
});