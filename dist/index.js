"use strict";
let sales = 123545455;
let course = "TypeScript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
// for array
// let numbers:number[] = [1,2,3]
// numbers.forEach(n=>n)
let user = [1, "Rakib"];
const split = user[1].split("a");
// console.log(split)
const number2 = [1, 2, 3];
// console.log(number2)
const person = {
    name: "Rakib",
    age: 23,
    isDev: true,
};
// console.log(person)
(person.name = "Hamid"), (person.age = 25);
person.isDev = false;
// console.log(person)
const secondPerson = "Rakib";
// console.log(secondPerson)
function multiply(a, b) {
    return a * b;
}
// console.log(multiply(4,4))
let fruits = ["apple", "mango"];
fruits.push("berry", "pineapple");
fruits.pop();
const index = fruits.indexOf("apple");
// console.log(fruits)
// console.log(Array.isArray(fruits))
// explicit
let a;
a = "Rakib";
let b;
b = 4;
let c = []; //union
c.push("rakib", 25);
let d;
d = {
    name: "rakib",
    age: 23,
    ts: true,
};
// console.log(d)
// any type (not recommended to use for most case)
let e;
e = {
    name: "rakib",
    age: 23,
};
//  function type
const myFunc = (a, b, c = "sakib") => {
    return a + b;
};
// if c is optional argument then we simply have to add ? after it. if we assign a default value then we don't need it.
myFunc("rakib", "habib");
const userDetails = (id, user) => {
    console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mir"} ${user.name}`);
};
userDetails(12, { name: "rakib", age: 23 });
// function signature
let signatureFunc;
signatureFunc = (x, y) => {
    return x * y;
};
signatureFunc(2, 5);
//  can't change property inside of object.
let calculation;
calculation = (x, y, z) => {
    if (z === "add") {
        return x + y;
    }
    else {
        return x - y;
    }
};
console.log(calculation(2, 3, "add"));
// class
// class Player {
//  private name: string;   //can not access from outside
//  public age: number;   //by default it's public
// readonly  country: string;   // can not change but read it
//   constructor(n: string, a: number, c: string) {
//     this.name = n;
//     this.age = a;
//     this.country = c;
//   }
//   play() {
//     console.log(`${this.name}from ${this.country} is playing`);
//   }
// }
//shortcut for explicit purpose
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name}from ${this.country} is playing`);
    }
}
const sakib = new Player("sakib", 34, "bangladesh");
const musta = new Player("musta", 28, "bangladesh");
const players = [];
players.push(musta);
console.log(players);
// access modifiers
