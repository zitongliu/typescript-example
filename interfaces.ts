
interface NamedPerson {
    firstName: string;
    age?: number; // optional
    [propName: string]: any; // don't know name of key and type of value
    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

// const personInstance = {
//     firstName: "Steve",
//     hobbies: ["Sports", "Food"],
// };

// greet(personInstance);
// changeName(personInstance);
// greet(personInstance);

const personInstance: NamedPerson = {
    firstName: "Steve",
    hobbies: ["Sports", "Food"],
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};

changeName(personInstance);
greet(personInstance);
personInstance.greet("Liu");

