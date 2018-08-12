//string
let myName: string = "Steve";
// myName = 28; // error

// number
let myAge = 99.99;
// myAge = 'Steve'; // error

// boolean
let hasHobbies = true;
// hasHobbies = 1; // error

// assign types
let myRealAge: number;
myRealAge = 99;
// myRealAge = '99'; // error

// array
let hobbies: any[] = ["cooking", "sports"];
console.log(typeof hobbies);
hobbies = [100];
// hobbies = 100; // error

// tuples
let address2 = ["Superstreet", 99];
let address: [string, number] = ["Superstreet", 99];
// let address: [string, number] = [99, "Superstreet"]; // error

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
    // return myAge; // error
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
    // return myName; // error
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

// console.log(multiply(2, 'Steve')); // error
console.log(multiply(2, 10));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello; // error
// myMultiply(); // error
myMultiply = multiply;
console.log(myMultiply(5, 2));


// objects
let userDate2 = {
    name: "Steve",
    age: 99,
};

let userDate: { name: string, age: number } = {
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
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
}

// complex = {};   // error

// Type Aliases

type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};


// Allowing multiple types with Union Types

let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true;    // error

// Check types during runtime
// let finalValue = "A string";
let finalValue = 26;
if (typeof finalValue == "number") {
    console.log("FinalValue is a number")
}


// never type

// This function neber returns anything as it throws an error;
function neverReturns():never {
    throw new Error('An error!');
}


// Niullable Types

//  Errors when we turn strictNullCheck on in tsconfig.
// let canBeNull = 12;
// canBeNull = null;
// let canAlsoBeNull;
// cajAlsoBeNull = null;

let canBeNull: number | null = 12;
canBeNull = null;

// Assigning null initially don't give error
// This is assumed to be of type null and not of type any
let canThisBeAny = null;


// Example

type bankAccountDef = {money: number, deposit: (value: number) => void };

let bankAccount: bankAccountDef = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: {name: string, bankAccount: bankAccountDef, hobbies: string[]} = {
    name: "Steve",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
