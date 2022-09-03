function createApp(){
    const cars = [];
    return{
        add(car){
            cars.push(car);
        },
        getCars(){
            return cars;
        }
    }
}

const app = createApp();
app.add('BMW')
console.log(app.getCars()); //[ 'BMW' ]