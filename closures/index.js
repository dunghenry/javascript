//! Closure
function main(){
    var count = 0;
    return function(){
        console.log(count);
        return count++;
    }
}
const fn = main();
console.log(fn()); //0
console.log(fn()); //1
console.log(fn()); //2

function greeting(msg){
    return function(name){
        return msg + ' ' + name;
    }
}

const sayHi = greeting('Hi');
console.log(sayHi('Dung')); //Hi Dung

const sayHello = greeting('Hello');
console.log(sayHello('Dung')); //Hello Dung