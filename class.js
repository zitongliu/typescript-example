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
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant);
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
// Static properties & methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diametre) {
        return this.PI * diametre;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
//# sourceMappingURL=class.js.map