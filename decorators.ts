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


// Method decorator
function editable(value: boolean) {
    return function(target: any, propName: String, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

class Bank {
    accountName: string;

    constructor(name: string) {
        this.accountName = name;
    }

    @editable(false)
    getBalance() {
        console.log(1000);
    }
}

const account = new Bank("Steve Account");
account.getBalance();
// account.getBalance = function() {
//     console.log(2000);
// }
// account.getBalance();
