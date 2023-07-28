const fam1 = ["anil", "sunil", "Mahendra"]
const fam2 = ["lalita", "Nisha", "anuj"]

// fam1.push(fam2)
// console.log(fam1) //nested arrays

// console.log(fam1[3][0]) //it  represents the index of array 

const fam = fam1.concat(fam2)
// console.log(fam)

//one Easy Method is that =>

const myFam = [...fam1, ...fam2]
console.log(myFam)


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //this method splits all the nested arrays in one array.
console.log(real_another_array);

console.log(Array.isArray(fam1)) //it checks the parameter is array or not.

let print = Array.from("ANil") //it converts Strings to Array
console.log(print)
console.log(Array.isArray(print))

console.log(Array.from({name:"sunil"})) //!!??

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

const arr = [21,9,6,42,1,9,56,4,25,5]

//console.log(arr.sort()) //!!
console.log(arr.reverse())
const result = arr.filter(num=>num===9);
console.log(result)

console.log(arr.map(x => x * 2))

console.log(arr.reduce((previousVal,currentVal) => previousVal+currentVal))


