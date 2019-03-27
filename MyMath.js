"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(radius) {
        return 2 * PI * radius;
    }
    MyMath.calculateCircumference = calculateCircumference;
    function calculateArea(radius) {
        return PI * radius * radius;
    }
    MyMath.calculateArea = calculateArea;
})(MyMath || (MyMath = {}));
console.log("The area is: " + MyMath.calculateArea(10));
//# sourceMappingURL=MyMath.js.map