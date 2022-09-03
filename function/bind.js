// create new funcion;
const car = {
    name: 'Car',
    run(speed){
        console.log("Name: " + this.name + " speed: " + speed);
    }
}
car.run(10);

const aircraft = {
    name: 'Aircraft',
}
const f = car.run.bind(aircraft, 20);
f(); // Name: Aircraft


// setTimeout(function(){
//     car.run();
// }, 1000);
fun = car.run.bind(car, 100)
setTimeout(fun, 1000);
