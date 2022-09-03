function Car() {
    this.speed = 0;

    this.speedUp = function (speed) {
        console.log(this)
        this.speed = speed;
        let self = this;
        console.log(self)
        setTimeout(function () {
            console.log(this) //window
            console.log(self.speed);
        }, 1000);

    };
}

let car = new Car();
car.speedUp(50); // 50;

//note: arrow function không có this, arguments và new.target
function Car1() {
    this.speed = 0;
    this.speedUp = function (speed) {
        console.log(this)
        this.speed = speed;
        let self = this;
        console.log(self)
        setTimeout(() =>{
            console.log(self.speed);
        }, 1000);

    };
}

let car1 = new Car1();
car1.speedUp(50); // 50;


function show() {
    console.log(arguments);
    return x => x + arguments[0]; //arguments là của hàm show
}

let display = show(10, 20);

let result = display(5);
console.log(result); // 15


//new.target: nếu không sd toán tử new sẽ lỗi
function Person(name) {
    if (!new.target) {
        throw "must use new operator with Person";
    }
    this.name = name;
}
Person('Lily');
const person = new Person('Lily');
console.log(person);
console.log(window.name)