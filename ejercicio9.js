class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    makeSound() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}

const dog = new Dog("Buddy", 3);
const cat = new Cat("Whiskers", 2);

dog.makeSound(); 
cat.makeSound(); 
