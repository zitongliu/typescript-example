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