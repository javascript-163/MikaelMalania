function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function(arg1, arg2) {
    console.log(`${this.name} makes a sound.`);
}

const dog = new Animal('Dog');
dog.speak();
