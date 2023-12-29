import { Player } from './classes/Player.js';
let sales = 123545455;
let course = "TypeScript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let user = [1, "Rakib"];
const split = user[1].split("a");
const number2 = [1, 2, 3];
const person = {
    name: "Rakib",
    age: 23,
    isDev: true,
};
(person.name = "Hamid"), (person.age = 25);
person.isDev = false;
const secondPerson = "Rakib";
function multiply(a, b) {
    return a * b;
}
let fruits = ["apple", "mango"];
fruits.push("berry", "pineapple");
fruits.pop();
const index = fruits.indexOf("apple");
let a;
a = "Rakib";
let b;
b = 4;
let c = [];
c.push("rakib", 25);
let d;
d = {
    name: "rakib",
    age: 23,
    ts: true,
};
let e;
e = {
    name: "rakib",
    age: 23,
};
const myFunc = (a, b, c = "sakib") => {
    return a + b;
};
myFunc("rakib", "habib");
const userDetails = (id, user) => {
    console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mir"} ${user.name}`);
};
userDetails(12, { name: "rakib", age: 23 });
let signatureFunc;
signatureFunc = (x, y) => {
    return x * y;
};
signatureFunc(2, 5);
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
const sakib = new Player("sakib", 34, "bangladesh");
const musta = new Player("musta", 28, "bangladesh");
const players = [];
players.push(musta);
console.log(players);
