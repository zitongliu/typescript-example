
console.log("========== generics.ts =========");
// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo("Steve"));
console.log(echo(27));
console.log(echo({name: "Steve", age: 27}));

// Better Generic function
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("Steve"));
// we get access to properties on that type
console.log(betterEcho("Steve").length);

console.log(betterEcho<number>(27));
// This is error
// console.log(betterEcho<number>("27"));

console.log(betterEcho({name: "Steve", age: 27}));

// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(3.44);
console.log(testResults);

// This will error
// testResults.push("4.44");

// Arrays 
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banana"]);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"));

// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue!: T;
    multiplyValue!: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const _simpleMath = new SimpleMath<string, number>();
// const _simpleMath = new SimpleMath<boolean>(); // Errors as boolean is not number or string

_simpleMath.baseValue = "10";
_simpleMath.multiplyValue = 20;
console.log(_simpleMath.calculate());