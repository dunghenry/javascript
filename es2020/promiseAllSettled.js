const p1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(10);
    }, 1000);
})

const p2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject(20);
    }, 2000);
})

const promise = Promise.allSettled([p1, p2]);

promise.then((result)=>{
    console.log(result); //[{status:'fulfilled',value:10},{status:'rejected',reason:20}]
    document.write(JSON.stringify(result));
}).catch(error => console.log(error));