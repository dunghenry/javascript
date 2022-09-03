var greeting = "Hello";
function say(name) {
  console.log(this.greeting + " " + name);
}
say.call(this, "Dung");

const messenger = {
  greeting: "Messenger Hello",
};
say.call(messenger, "Dung"); //Messenger Hello Dung

function Box(width, height) {
  this.width = width;
  this.height = height;
}

const box = new Box(1, 2);

console.log(box);

function Widget(width, height, color) {
  Box.call(this, width, height);
  this.color = color;
}
const widget = new Widget(1, 2, "red");
console.log(widget);

//

const car = {
  name: "Car",
  start() {
    console.log("Start the " + this.name);
  },
  stop() {
    console.log("Stop the " + this.name);
  },
};


const aircraft = {
    name: "Aircraft",
}
car.start.call(aircraft) //Start the Aircraft

//arguments

function isOdd(num){
    return num&1;
}

function getOddNumbers(){
    return Array.prototype.filter.call(arguments, isOdd);
}
const rs = getOddNumbers(1, 2, 3, 4);
console.log(rs);