let colors = ['red', 'green', 'blue'];
let rgb =[...colors];
console.log(rgb);
console.log(colors)
const merge = [...colors, ...rgb];
console.log(merge);

const circle = {
    radius: 10
}
const coloredCircle = {
    ...circle,
    color: 'black',
}
console.log(coloredCircle);
console.log(circle);

//clone object
const clonedCircle = {...circle};
console.log(clonedCircle);

const circle1 ={
    radius: 10,
    style:{
        color: 'red',
    }
}

const coloredCircle1 = {...circle1};
console.log(coloredCircle1); //{ radius: 10, style: { color: 'red' } }
coloredCircle1.style = 'blue';
console.log(coloredCircle1); //{ radius: 10, style: 'blue' }

