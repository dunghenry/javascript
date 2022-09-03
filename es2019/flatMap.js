//syntax: function callback(currentValue [[,index], array]);
// let sentences = ["JavaScript Array flatMap()", " ", "is", " ", "Awesome"];

// let words = sentences.flatMap((s, index, array) => {
//   console.log(s);
//   console.log("Index : ", index);
//   console.log("Array :", array);
//   return s.split(" ");
// });
// console.log(words.join(" "));

// let words1 = sentences.map((s) => s.split(" "));
// console.log(words1.flat(1).join(" "));

let cart = [
  {
    name: "Smartphone",
    qty: 2,
    price: 500,
    freeOfCharge: false,
  },
  {
    name: "Tablet",
    qty: 1,
    price: 800,
    freeOfCharge: false,
  },
];

let newCart = cart.flatMap(
    (item) => {
        if (item.name === 'Smartphone') {
            return [item, {
                name: 'Screen Protector',
                qty: item.qty,
                price: 5,
                freeOfCharge: true
            }]
        } else {
            return [item];
        }
    }
);

const total = newCart.reduce((sum, item) =>{
    if(!item.freeOfCharge){
        sum += item.price * item.qty;
    }
    return sum;
}, 0);
console.log(total);