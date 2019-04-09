"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("=============== Decorators ================");
function logged(constructorFn) {
    console.log(constructorFn);
}
var Animal = /** @class */ (function () {
    function Animal() {
        this.classification = "Animal";
    }
    Animal = __decorate([
        logged
    ], Animal);
    return Animal;
}());
// Factory
function logging(value) {
    return value ? logged : null;
}
var Creature = /** @class */ (function () {
    function Creature() {
    }
    Creature = __decorate([
        logging(true)
    ], Creature);
    return Creature;
}());
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Monster = /** @class */ (function () {
    function Monster() {
        this.name = "A Monster";
    }
    Monster = __decorate([
        logging(true),
        printable
    ], Monster);
    return Monster;
}());
var someMonster = new Monster();
someMonster.print();
//# sourceMappingURL=decorators.js.map