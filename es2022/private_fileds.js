// Private fields
class Circle{
    #radius;
    static #count = 0;
    constructor(radius){
        this.#radius = radius;
        Circle.#count++;
    };
    //get method
    get area(){
        return Math.PI * Math.pow(this.#radius, 2);
    }
    get get_radius(){
        return this.#radius;
    }
    //set method
    set set_radius(radius){
        if(typeof radius === 'number' && radius > 0 ){
            this.#radius = radius;
        }
        else{
            throw("The radius must be a positive number.");
        }
    }

    //static method
    static hasRadius(circle){
        return #radius in circle;
    }

    static getCount(){
        return Circle.#count;

    }
}
class Cylider extends Circle{
    #height;
    constructor(radius, height){
        super(radius);
        this.#height = height;
    }

    //use method class parent
    get get_radius(){
        return super.get_radius;
    }
}

const circle = new Circle(10);
console.log(circle.area);
console.log(circle.radius); //undefined
circle.set_radius = 15;
console.log(circle.get_radius); //15
console.log(Circle.hasRadius(circle)); // true

const child = new Cylider(10, 20);
console.log(child);
console.log(child.get_radius); //

//every time a new Circle or Cylider is created, the count will increase, 1
console.log(Circle.getCount());