let animalPrototype = {
    sound: function() {
        console.log("Some general animal sound");
    }
}

let dog = Object.create(animalPrototype);

dog.breed = "Labrador";

dog.sound = function() {
    console.log("Woof! Woof!");
};

console.log(dog.breed);
dog.sound();
// dog.sound();

function Animal() {
}

Animal.prototype.sound = function(){
    console.log("Some general animal sound");
}

function Dog(breed) {
    this.breed = breed;
}

Dog.prototype = new Animal();

Dog.prototype.sound = function() {
    console.log("Woof! Woof!");
}

let jeka = new Dog("Labrador");

console.log(jeka.breed);

jeka.sound();