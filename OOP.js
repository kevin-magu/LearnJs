class Person {
    constructor(name, age){
        this.name =name
        this.age =age;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name} and am ${this.age} years old.`)
    }
}

//creating objects from a class 
let person1 = new Person("Kevin", 21)
let person2 = new Person("Nimo", 22)

person1.sayHello()