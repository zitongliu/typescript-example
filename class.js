"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.type = "";
        this.age = 26;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("cool guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Steve", "steveliu");
console.log(person);
console.log(person.name);
console.log(person.username);
person.printAge();
// Inheritance
var Steve = /** @class */ (function (_super) {
    __extends(Steve, _super);
    function Steve() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Steve Liu"; // overwrites name in Person class
        return _this;
    }
    return Steve;
}(Person));
var steve = new Steve("Anna", "steve_username"); // results in Steve Liu. content of current class always overwrites contents of super class. We could avoid this by having a constructor in Steve
console.log(steve);
var Daniel = /** @class */ (function (_super) {
    __extends(Daniel, _super);
    function Daniel(username) {
        var _this = _super.call(this, "Daniel", username) || this;
        _this.age = 99;
        return _this;
    }
    return Daniel;
}(Person));
var daniel = new Daniel('daniel_liu');
console.log(daniel);
//# sourceMappingURL=class.js.map