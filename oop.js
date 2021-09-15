class Student {
    //Ham khoi tao
    constructor(_name) {
        this.name = _name;

    }
}
let student = new Student("Zu");
console.log(student.name);

class Mother {
    constructor(_name) {
        this.name = _name;
    }

    colorEyes() {
        console.log("red");
    }
}
class Me extends Mother { //thua huong all nhung thu ma Mother co
    colorSkin() {
        console.log("purple");
    }
}
let me = new Me("Zuka");
console.log(me.name);
me.colorEyes();
me.colorSkin();

class Person {
    constructor(_name) {
        this.name = _name;
    }
    getName() {
        return this.name;
    }
}
class Monkey extends Person {
    //override
    getName() {
        return "Hello " + this.name;
    }
}
let monkey = new Monkey("Dog");
console.log(monkey.getName());

class People {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    getInfo() {
        console.log(`Ho ten: ${this.name} - tuoi: ${this.age}`);
    }
}

class HocVien extends People {
    constructor(_name, _age, _class) {
        //access and call function from an object parent
        //Call the parent constructor
        super(_name, _age);
        this.classs = _class;
    }

    getInfo() {
        super.getInfo();
        console.log(` - lop: ${this.classs} `);
    }
}
let HocDien = new HocVien("Vu", 20, "Fe57");
HocDien.getInfo();