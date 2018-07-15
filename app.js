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
// complex = {};   // error
