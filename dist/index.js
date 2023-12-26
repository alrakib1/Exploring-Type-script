"use strict";
let sales = 123545455;
let course = "TypeScript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let user = [1, 'Rakib'];
const split = user[1].split('a');
console.log(split);
const number2 = [1, 2, 3];
console.log(number2);
const person = {
    name: 'Rakib',
    age: 23,
    isDev: true
};
console.log(person);
person.name = "Hamid",
    person.age = 25;
person.isDev = false;
console.log(person);
const secondPerson = "Rakib";
console.log(secondPerson);
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 4));
let fruits = ['apple', 'mango'];
fruits.push('fruits');
const index = fruits.indexOf("apple");
console.log(index);
console.log(Array.isArray(fruits));
let a;
a = "Rakib";
let b;
b = 4;
let c = [];
c.push('rakib', 25);
let d;
d = {
    name: "rakib",
    age: 23,
    ts: true
};
console.log(d);
