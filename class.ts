
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
