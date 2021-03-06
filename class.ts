
class Person {
    name: string; // No need to do `this` in typescript // same as public name: string;
    private type: string = "";
    protected age: number = 26;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType("cool guy");
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Steve", "steveliu");
console.log(person);
console.log(person.name);
console.log(person.username);

person.printAge();


// Inheritance

class Steve extends Person {
    name = "Steve Liu"; // overwrites name in Person class
}


const steve = new Steve("Anna", "steve_username"); // results in Steve Liu. content of current class always overwrites contents of super class. We could avoid this by having a constructor in Steve
console.log(steve)

class Daniel extends Person {
    constructor(username: string) {
        super("Daniel", username);
        this.age = 99;
    }
}

const daniel = new Daniel('daniel_liu');
console.log(daniel)


// Getters & Setters

class Plant {
    private _species: string = 'Default';

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = 'Default'
        }
    }   
}

const plant = new Plant();
console.log(plant);
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);


// Static properties & methods

class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diametre: number): number {
        return this.PI * diametre;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8))


// Abscract Classes - cannot be instantiated directly - can only be inherited from.
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName ('My IT Project');
console.log(newProject);

// private constructors
class OnlyOne {
    private static instance: OnlyOne;

    // private constructor(public name: string) {}

    // read only
    private constructor(public readonly name: string) {}


    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);

// Errors as its read only
// right.name = 'Something else';
// console.log(right.name);




