class Person {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}. I am ${this.age} years old and I work as a ${this.profession}.`);
    }

    sayGoodbye() {
        console.log(`Goodbye! It was nice talking to you.`);
    }
}

const person1 = new Person("John", 30, "Engineer");
const person2 = new Person("Alice", 25, "Teacher");

person1.greet();
person1.sayGoodbye();

person2.greet();
person2.sayGoodbye();
