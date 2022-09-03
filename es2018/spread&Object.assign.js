class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    set diameter(value) {
        this.radius = value / 2;
        console.log('SET ', value);
    }
    get diameter() {
        return this.radius * 2;
    }
}

let circle = new Circle(100);

//running setter
let cloneCircle1 = Object.assign(circle, {
    diameter: 200
});

let cloneCircle2 = {
    ...circle
};

console.log(cloneCircle1);
console.log(cloneCircle2);


const blueSquare = {
    length: 100,
    color: 'blue'
}

Object.defineProperty(blueSquare, 'color', {
    value: 'blue',
    enumerable: true,
    writable: false

});

console.log(blueSquare);

//! Error: TypeError: Cannot assign to read only property 'color' of object '#<Object>'
// const redSquare = Object.assign(blueSquare, {
//     color: 'red'
// });



// merge style and blueSquare objects:
const style = {
    color: 'green'
};

const greenSquare = {
    ...blueSquare,
    ...style
};

console.log(greenSquare);
