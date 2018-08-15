
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