let name = "anil"
const sirName = "Dudi"
const age = 23

console.log("My Name is "+name+" And Sirname is "+sirName+" ANd age is "+age )

//the Best Way of Doing This things. That is (Use Backticks (`any text with variables and objects by using "${}" `)) 

console.log(`my name is ${name} ${sirName} and my Age is ${age}`)

//Way to create String object 

const goal = new String("Learn Javascript!!")
console.log(`${typeof(goal)} \nOutput of this object is : ${goal}`) //object
//console.log(` The VAlue of String object is store is the for of array Ex:\n${goal[4]}`)
//console.log(goal.__proto__) //it SHows the methods of String objects

//String Methods..

console.log(goal.length) //it gives the length of string Starts from 0.

console.log(goal.toUpperCase())
console.log(goal.toLowerCase())

console.log(goal.charAt(6))
console.log(goal.includes('j'))
console.log(goal.concat(`Name is ${name}`))
console.log(goal.endsWith("!")) //THis Method check the string end with a given char or not .
console.log(goal.indexOf('J'))

const subString = goal.substring(6, 9) //it does not takes is perfect character that will be given by and end
console.log(subString)

const sliceStr = goal.slice(-6, 9)
console.log(sliceStr)

const spliStr = goal.split(' ')
console.log(spliStr)

const newstr = "    hello aj       "
console.log(`original string :${newstr}`)
console.log(` After Trim :${newstr.trim()}`)
console.log(`replace hello with hi => ${newstr.replace('hello', 'hi')}`)
console.log(`original String : ${newstr}`)
console.log(`is there is hello in String => ${newstr.includes('hello')}`)



