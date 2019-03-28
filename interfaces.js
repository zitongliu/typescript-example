"use strict";
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
// const personInstance = {
//     firstName: "Steve",
//     hobbies: ["Sports", "Food"],
// };
// greet(personInstance);
// changeName(personInstance);
// greet(personInstance);
var personInstance = {
    firstName: "Steve",
    hobbies: ["Sports", "Food"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
changeName(personInstance);
greet(personInstance);
personInstance.greet("Liu");
//# sourceMappingURL=interfaces.js.map