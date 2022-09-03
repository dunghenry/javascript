function promise(){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(1);
        }, 1000);
    })
}


async function run(){
    const rs = await promise();
    console.log(rs);
}
run();