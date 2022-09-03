const array = [
    ['name', 'Dung'],
    ['age', '22'],
    ['gender', 'male'],
]

console.log(Object.fromEntries(array)); //{ name: 'Dung', age: '22', gender: 'male' }

const config = new Map();
config.set('name', 'Dung');
config.set('age', '22');
console.log(config);
console.log(typeof config); // object
console.log(Object.fromEntries(config)); //{ name: 'Dung', age: '22' }

const data = new Map([
    ['name', 'Dung'],
]);
console.log(data.get('name'));
console.log(data); //Map(1) { 'name' => 'Dung' }
 
console.log(Object.fromEntries(data)) //{ name: 'Dung' }


const dl = { name: 'Dung' }
console.log(Object.entries(dl)) //[ [ 'name', 'Dung' ] ]

const boxStyle = {
    color: 'red',
    borderWidth: '1px'
};

let arr = Object.entries(boxStyle);
console.log(arr); //[ [ 'color', 'red' ], [ 'borderWidth', '1px' ] ]

const params = 'type=listing&page=2&rowCount=10';
const searchParams = new URLSearchParams(params);
console.log(Object.fromEntries(searchParams)); // { type: 'listing', page: '2', rowCount: '10' }