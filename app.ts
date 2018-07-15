//string
let myName: string = "Steve";
// myName = 28; 

// number
let myAge = 99.99;
// myAge = 'Steve';

// boolean
let hasHobbies = true;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 99;
// myRealAge = '99';

// array
let hobbies: any[] = ["cooking", "sports"];
console.log(typeof hobbies);
hobbies = [100];
// hobbies = 100;

// tuples
// let address = ["Superstreet", 99];
let address: [string, number] = ["Superstreet", 99];
// let address: [string, number] = [99, "Superstreet"];

// enum
enum Color {
    Gray,           // 0
    Red,            // 1
    Green = 100,    // 100
    Blue,           // 101
    Yellow = 2,     // 2
    Purple,         // 3
};

let myColor: Color = Color.Purple;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);


// functions
function returnMyName(): string {
    // return myAge;
    return myName;
}
console.log(returnMyName());

// function expression
const returnMyName2 = (): string => {
    return myName;
}
console.log(returnMyName2());

// void
function sayHello(): void {
    console.log("Hello");
    // return myName;
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

// console.log(multiply(2, 'Steve'));
console.log(multiply(2, 10));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
