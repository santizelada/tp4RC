class Person {
    constructor(name, age, dni, gender, weight, height, birthYear) {
        this.name = name;
        this.age = age;
        this.dni = dni;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.birthYear = birthYear;
    }

    showGeneration() {
        let generation;
        if (this.birthYear >= 1994 && this.birthYear <= 2010) {
            generation = "Generation Z";
            console.log(`This person belongs to Generation Z. Characteristic trait: Irreverence.`);
        } else if (this.birthYear >= 1981 && this.birthYear <= 1993) {
            generation = "Generation Y";
            console.log(`This person belongs to Generation Y. Characteristic trait: Frustration.`);
        } else if (this.birthYear >= 1969 && this.birthYear <= 1980) {
            generation = "Generation X";
            console.log(`This person belongs to Generation X. Characteristic trait: Obsession for success.`);
        } else if (this.birthYear >= 1949 && this.birthYear <= 1968) {
            generation = "Baby Boom Generation";
            console.log(`This person belongs to the Baby Boom Generation. Characteristic trait: Ambition.`);
        } else if (this.birthYear >= 1930 && this.birthYear <= 1948) {
            generation = "Silent Generation";
            console.log(`This person belongs to the Silent Generation. Characteristic trait: Austerity.`);
        } else {
            console.log(`Unable to determine the generation for this person.`);
        }
    }
}

const person = new Person("John Doe", 25, "123456789", "M", 70, 175, 1995);
person.showGeneration();
