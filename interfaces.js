"use strict";
// Interfaces get totally ignored when we complie ts into js. They are only here to give error before or during compliation
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
var Developer = /** @class */ (function () {
    function Developer() {
        this.firstName = "";
        this.lastName = "";
    }
    Developer.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Developer;
}());
var developerInstance = new Developer();
developerInstance.firstName = "Sam";
greet(developerInstance);
developerInstance.greet("Sample");
developerInstance.lastName = "Anything";
developerInstance.greet(developerInstance.lastName);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Steve",
    greet: function (lastName) {
        console.log("hello, " + lastName);
    }
};
console.log(oldPerson);
//# sourceMappingURL=interfaces.js.map