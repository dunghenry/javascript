// Promise finally()
function ps(){
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve(1);
        }, 100);
    });
}


ps().then((rs)=> console.log(rs))
    .catch((err)=> console.log(err))
    .finally(() => console.log("Done!"));