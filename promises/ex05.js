const pm = function(){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject('error');
        }, 3000);
    })
}

// pm().then(function(rs){
//     console.log(rs);
// })
// .catch(function(err){
//     console.log(err);
// });

//or

try {
    pm().then(function(rs){
        console.log(rs);
    })
    .catch(err => console.log(err));
} catch (error) {
    console.log(error);
}