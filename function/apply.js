var greeting = "Hello";
function say(name) {
  console.log(this.greeting + " " + name);
}
say.apply(this, ["Dung"]); //Hello Dung

const messenger = {
  greeting: "Messenger Hello",
};
say.apply(messenger, ["Dung"]); //Messenger Hello Dung

const computer = {
  name: "MacBook",
  isOn: false,
  turnOn() {
    this.isOn = true;
    return `The ${this.name} is On`;
  },
  turnOff() {
    this.isOn = false;
    return `The ${this.name} is Off`;
  },
};
const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};

let rs = computer.turnOff.apply(server);
console.log(rs); //The Dell PowerEdge T30 is Off


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push.apply(arr1, arr2);
console.log(arr1); //[1, 2, 3, 4, 5, 6]
console.log(arr1.concat(arr2));