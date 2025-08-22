class Person {
    constructor(name, age) {
        this.name = name; // property
        this.age = age;   // property
    }

    greet() { // method
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
    }
}

// Create an object
const person1 = new Person("Anna", 25);
person1.greet(); // Hi, my name is Anna and I'm 25 years old



class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.isOn = false;
    }

    start() {
        this.isOn = true;
        console.log(`${this.brand} ${this.model} is now ON 🚗`);
    }

    stop() {
        this.isOn = false;
        console.log(`${this.brand} ${this.model} is now OFF ❌`);
    }
}

// Using the class
const myCar = new Car("Toyota", "Corolla");
myCar.start();  // Toyota Corolla is now ON 🚗
myCar.stop();   // Toyota Corolla is now OFF ❌

const myCar2 = new Car("Nissan", "Sentra");
myCar2.start(); // Nissan Sentra is now ON 🚗
myCar2.stop();  // Nissan Sentra is now OFF ❌

class Animal {
    constructor(name) {
        this.name = name;
    }
    
    makeSound() {
        console.log("Makes a sound...");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof 🐕");
    }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Woof 🐕

const Animal1 = new Animal("Jirafe");
Animal1.makeSound();

const Animal2 = new Animal("Cow");
Animal2.makeSound();

const catt = new Cat("Oreo");
catt.makeSound();
catt.makeSound();
catt.makeSound();