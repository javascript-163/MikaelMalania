class Circle {
    #radius;

    constructor(radius) {
        this.#radius = radius;
    }

    #calculateArea() {
        return Math.PI * this.#radius ** 2;
    }

    displayInfo() {
        console.log(`Circle with radius of ${this.#radius}`);
    }

    getArea() {
        return this.#calculateArea();
    }
}

let myCircle = new Circle(5);

myCircle.displayInfo()
console.log(myCircle.getArea());