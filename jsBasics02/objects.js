
const mySym = Symbol("Student") //symbol
console.log(typeof mySym)

const obj = {
    name: "Anil",
    rollNo: 23,
    class: "7th",
    div: "D",
    todayPresent: true,
    [mySym]: 'YES'
}

console.log(obj)

console.log(obj.class)
console.log(obj.todayPresent)
console.log(obj['div'])
console.log(obj[mySym])

//now edit the object data

obj.name = "sunil"
console.log(obj.name)

//stop the editting
Object.freeze(obj)
obj.name = "mahi"
console.log(obj.name)

//use objects with functions

obj.greeting = function(){

    console.log(`Hello ${this.name} Welcome To Your New Class ${this.class} and ${this.div}`)
}

// console.log(obj.greeting())


// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ANil",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ANil"
}

course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

//JSON CODE
// {
//     "name": "ANil",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
