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

const  secondPerson = "Rakib";
console.log(secondPerson)

function multiply(a : number, b : number){
    return a * b;
}

console.log(multiply(4,4)) 

let fruits = ['apple','mango']

fruits.push('berry',"pineapple");
fruits.pop()

const index = fruits.indexOf("apple")
console.log(fruits)
console.log(Array.isArray(fruits))


let a : string;

a = "Rakib";

let b: number;

b=4;

let c : (string | number)[] = [];
c.push('rakib',25)

let d :{
    name: string,
    age : number,
    ts : boolean,
}

d = {
    name:"rakib",
    age: 23,
    ts:true
}


console.log(d)


