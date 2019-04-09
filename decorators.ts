console.log("=============== Decorators ================");

function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Animal {
    constructor() {
        this.classification = "Animal";
    }
    classification: string;
}

// Factory
function logging(value: boolean) {
    return value ? logged: null;
}

@logging(true)
class Creature {

}


// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@logging(true)
@printable
class Monster {
    name = "A Monster";
}

const someMonster = new Monster();
(<any>someMonster).print();