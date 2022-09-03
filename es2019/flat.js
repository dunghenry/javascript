const numbers = [1, 2, [3, 4, 5]];
const flatNumbers = numbers.flat();
console.log(flatNumbers); //[ 1, 2, 3, 4, 5 ]

const numbers1 = [1, 2, [[3, 4, 5]]];
console.log(numbers1.flat(1)); //[ 1, 2, [ 3, 4, 5 ] ]
console.log(numbers1.flat(2)) //[ 1, 2, 3, 4, 5 ]

const numbers2 = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
console.log(numbers2.flat(Infinity)); 
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
//  ]

const numbers3 = [1, 2, , 4, , 5]; // delete item space

console.log(numbers3.flat());  //[ 1, 2, 4, 5 ]