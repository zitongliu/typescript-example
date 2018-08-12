"use strict";
//string
var myName = "Steve";
// myName = 28; // error
// number
var myAge = 99.99;
// myAge = 'Steve'; // error
// boolean
var hasHobbies = true;
// hasHobbies = 1; // error
// assign types
var myRealAge;
myRealAge = 99;
// myRealAge = '99'; // error
// array
var hobbies = ["cooking", "sports"];
console.log(typeof hobbies);
hobbies = [100];
// hobbies = 100; // error
// tuples
var address2 = ["Superstreet", 99];
var address = ["Superstreet", 99];
// let address: [string, number] = [99, "Superstreet"]; // error
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
    Color[Color["Yellow"] = 2] = "Yellow";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var myColor = Color.Purple;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    // return myAge; // error
    return myName;
}
console.log(returnMyName());
// function expression
var returnMyName2 = function () {
    return myName;
};
console.log(returnMyName2());
// void
function sayHello() {
    console.log("Hello");
    // return myName; // error
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Steve')); // error
console.log(multiply(2, 10));
// function types
var myMultiply;
// myMultiply = sayHello; // error
// myMultiply(); // error
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userDate2 = {
    name: "Steve",
    age: 99,
};
var userDate = {
    name: "Steve",
    age: 99,
};
// userDate = {}; // error
/*
userData = {
    a: "Hello",
    b: 22
}
// errors as well - name of the properties must match
*/
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// Allowing multiple types with Union Types
var myRealRealAge = 27;
myRealRealAge = "27";
// myRealRealAge = true;    // error
// Check types during runtime
// let finalValue = "A string";
var finalValue = 26;
if (typeof finalValue == "number") {
    console.log("FinalValue is a number");
}
// never type
// This function neber returns anything as it throws an error;
function neverReturns() {
    throw new Error('An error!');
}
// Niullable Types
//  Errors when we turn strictNullCheck on in tsconfig.
// let canBeNull = 12;
// canBeNull = null;
// let canAlsoBeNull;
// cajAlsoBeNull = null;
var canBeNull = 12;
canBeNull = null;
// Assigning null initially don't give error
// This is assumed to be of type null and not of type any
var canThisBeAny = null;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Steve",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
