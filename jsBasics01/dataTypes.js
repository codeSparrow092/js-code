let name = "ANil";
let id = 845;
let key = null; //object
let age; //undefined

console.log(typeof name);
console.log(typeof id);
console.log(typeof key);
console.log(typeof age);

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const ids = Symbol('123')
const anotherId = Symbol('123')

console.log(ids === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
Datatypes in js:
1.string => ""
2.number => any number
3.bigInt => big numbers
4.null => null value
5.undefined => variable not have any value
6.boolean => ture/false
7.symbol => unique
8.Array => []
9.object => :{}
10.date =>

*/
