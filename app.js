"use strict";
//string
var myName = "Steve";
// myName = 28; 
// number
var myAge = 99.99;
// myAge = 'Steve';
// boolean
var hasHobbies = true;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 99;
// myRealAge = '99';
// array
var hobbies = ["cooking", "sports"];
console.log(typeof hobbies);
hobbies = [100];
// hobbies = 100;
// tuples
// let address = ["Superstreet", 99];
var address = ["Superstreet", 99];
// let address: [string, number] = [99, "Superstreet"];
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
    // return myAge;
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
    // return myName;
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Steve'));
console.log(multiply(2, 10));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
