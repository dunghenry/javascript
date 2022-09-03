//BigInt

let bigInt = BigInt(10);
let bigInt1 = 10n;

console.log(typeof bigInt1); // bigint
console.log(typeof BigInt(100) === 'bigint'); // true

let count = 1n; // number
if(count) {
    console.log(true);
} else {
    console.log(false);
}

//0n -> false

console.log(1n < 2); // true
console.log(2n > 1); // true
console.log(2n >= 2); // true

console.log(1n == 1); // true   

console.log(1n === 1); // false

let result = 3n / 2n;
console.log(result); // 1n, not 1.5n (return interger)