//syntax function* f() or function *f()

function* generateSquence(){
    yield 1;
    yield 2;
    return 3;
}
let generator = generateSquence();
// console.log(generator); //Object [Generator] {}

// console.log(generator.next()); //{ value: 1, done: false }

// console.log(generator.next()); //{ value: 2, done: false }

// console.log(generator.next()); //{ value: 3, done: false }

// console.log(generator.next()); //{ value: undefined, done: true }

for (let value of generator) {
    console.log(value); //1 2
}

//
function *myF(){
    yield 1;
    yield 2;
    yield 3;
}
let num = myF();
for (const value of num) {
    console.log(value); // 1 2 3 
}

num = [0, ...myF()];
for (const value of num) {
    console.log(value); // 0 1 2 3 
}