let arr = [1,2,3,45,6,"name",'01Two',true]

// console.log(arr[6])
// console.log(typeof arr[6])
// console.log(typeof arr[7])

const arr1 = new Array(21,332,43,234,44,1,"haji",'paji',false)
// console.log(`full array is:${arr1}`)
// console.log("element at position no.7: "+arr1[7])

//Array Methods..

// arr1.push("sir")
// console.log(arr1)
// arr1.pop()
// arr1.pop()
// console.log(`after using pop method two times : ${arr1}`)

const arr2 = [1,2,9,11,45,123]
// console.log(`original array "arr2" is ${arr2}`)
// arr2.unshift(124)
// console.log(`unshift the arr2 : ${arr2}`)

// arr2.shift()
// arr2.shift()

// console.log(`after shift two times the arr2 array : ${arr2}`)

// console.log(arr2.includes(9))
// console.log(arr2.indexOf(11))

// const newarr = arr2.join()

// console.log(newarr)

// slice, splice

console.log("before slice ", arr2);

const myn1 = arr2.slice(1, 3) //it starts from index 1 and end at 2(i.e. upto index >3).

console.log("slice array ",myn1);
console.log("Before splice ", arr2);


const myn2 = arr2.splice(1, 3) //it starts from index 1 and end at 3(i.e. =3)
console.log("After splice ", arr2);
console.log("splice elements ",myn2);




