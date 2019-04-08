"use strict";
console.log("========== generics.ts =========");
// Simple Generic
function echo(data) {
    return data;
}
console.log(echo("Steve"));
console.log(echo(27));
console.log(echo({ name: "Steve", age: 27 }));
// Better Generic function
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Steve"));
// we get access to properties on that type
console.log(betterEcho("Steve").length);
console.log(betterEcho(27));
// This is error
// console.log(betterEcho<number>("27"));
console.log(betterEcho({ name: "Steve", age: 27 }));
// Built-in Generics
var testResults = [1.94, 2.33];
testResults.push(3.44);
console.log(testResults);
// This will error
// testResults.push("4.44");
// Arrays 
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banana"]);
// Generic Types
var echo2 = betterEcho;
console.log(echo2("Something"));
// Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var _simpleMath = new SimpleMath();
// const _simpleMath = new SimpleMath<boolean>(); // Errors as boolean is not number or string
_simpleMath.baseValue = "10";
_simpleMath.multiplyValue = 20;
console.log(_simpleMath.calculate());
//# sourceMappingURL=generics.js.map