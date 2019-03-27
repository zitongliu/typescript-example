namespace MyMath {
    const PI: number = 3.14;

    export function calculateCircumference(radius:number):number {
        return 2 * PI * radius;
    }

    export function calculateArea(radius:number):number {
        return PI * radius * radius;
    }
}

console.log(`The area is: ${MyMath.calculateArea(10)}`);