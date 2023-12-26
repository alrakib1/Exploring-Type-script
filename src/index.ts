let sales: number = 123_545_455;
let course : string = "TypeScript";
let is_published: boolean = true;
let level;

function render (document:any){
    console.log(document)
}

// for array

// let numbers:number[] = [1,2,3]
// numbers.forEach(n=>n)

let user : [number,string] = [1,'Rakib'];
const split= user[1].split('a');
console.log(split)

const number2 = [1,2,3];

console.log(number2)

const person ={
    name: 'Rakib',
    age: 23,
    isDev: true
}
console.log(person)

person.name = "Hamid",
person.age = 25; 
person.isDev = false;

console.log(person)

const  secondPerson = "rakib";
console.log(secondPerson)

function multiply(a : number, b : number){
    return a *b;
}

console.log(multiply(4,4)) 