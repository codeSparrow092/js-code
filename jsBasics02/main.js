// var => after keyword require some name of that particular variable 

var username = "Vision IT asdasdhgd asdhgas dagshgasd ashd ashdgas dasddghasfd";
document.getElementById('myName').innerHTML = username;

// typeof => typeof keyword will use to identify the variable type

// Data types: 
// 1: Primitive Data Type: String, Number, Booleand, undefined and null.

// In js variable need to define in lowercase or camelCase

// String => String will define in two way either "" or '';

var title = 'This is title';

// Number type
var phonenumber = 1234567890;
var decimalNum = 123456.7890;


// Booleand type: always define with true or false keyword
var tripGoOrNot = true; // negative value. True is the positive value

// undefined => 
// Data content => variable is defined but not assigned any kind of value. This kind of varible to avoid error we can assign a value in runtime. It will never aquire any space

// Error related undefined => 

var declarVariable;
var testUndefined = undefined;

var dontknow = undefined;

// null => null type aquire some space in the memory and it will change based on requirement. Also we will override its value when needed. This will not work like undefined.

var nullcheck = null; // This case never executed untile unless value assign

// null type is always object.


// Non-Premitive data type => Date, Object, Array, Class, Interface

var todayDate = new Date();
// Sun Jul 16 2023 09:49:50 GMT+0530 (India Standard Time)

// Object => Object will represent with bulk kind of data. syntax {} identify by js engine as an object.
// Object structure work basis on key and value paire.

//var mydetails 
// var name = "Test";
// var phoneno = 121213212;
// var address = 'Pune';
// var goingTrip = true;

var mydetails = {
    name: "Test",
    phoneno: 121323223,
    goingTrip: true,
    myblog: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    presentAddress: {
        flatNo: 'A23232',
        streetAddress: 'MG Road',
        pincode: 121212,
        colonyDetails: {
            colonyNo: 1,
            streetName: 'Colnol stree'
        }
    },
    permanantAddress: {
        flatNo: 'A76767',
        streetAddress: 'Spine Road',
        pincode: 098989,
        colonyDetails: {
            colonyNo: 1,
            streetName: 'Colnol stree'
        }
    },
    multiplePhone: [1,2,3,4,5]
}

// access object => . symbol will point out every element from object
// using keyname we will access the object property

// document.getElementById('myblog').innerHTML = mydetails.myblog;

var userData;

fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        // console.log(json)
        userData = json
        // document.getElementById('onlyname').innerHTML = userData.data[5].email;
        document.getElementById('userimage').src = json[0].thumbnailUrl;
        var crele = document.createElement('span');
        crele.id = "userRecords";
        document.body.appendChild(crele);
        // document.write(crele);
        // debugger
        // userData.data.forEach((item)=>{
        //     // console.log(item);
        //     // console.log(Object.keys(item))
        // });
    });

// acees with key name
// mydetails['name'];


// Array => Array is list type which store multiple information. Array will access via index number.
// styntax array => [] 
// index value should start with 0 only

var name = "Changed value";
var phoneno = 121213212;
var address = 'Pune';
var goingTrip = true;
var testObject = {
    testname: 'yyyy'
}

var numberArray = [1,2,3,4,5,6,7,8];

var objectwitharray = {
    numberSerial: [135, 9876, 0988, 'testdoc'],
    numberSeriealCode: 'A2323232'
}

var myinfoWithArray = [mydetails, myColuguesDetails];

// array type: Two dimentional, three dimentional

var threedimentional = ['test2', [1,3,4,5],[987, 9876, 000],[987, 9876, 000]];

// var twodimentional = [];

var twodimentional = ['test', [1,3,4,5], [1,3,4,5]];

var testTwoD = [[],[]];

/****** Object methods ***********/

// Object.assign => method will create a new object and we can easily assign some change or some value to this particular. THis is method having 2 parameters. First one is target which object need to change or which object need to assign new value or change value.

var blankObject = {};

// Object.assign(blankObject, source);
//Object.assign(target, source1, source2, ?source3);

// example:
// Object.assign(blankObject, userData.data[1]);

// Object.keys => This method will give object all keys in array format. This method will give a access of every object keys

var myColuguesDetails = {
    name: "Colouge Name",
    phoneno: 121323223,
    goingTrip: true,
    myblog: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    presentAddress: {
        flatNo: 'A23232',
        streetAddress: 'MG Road',
        pincode: 121212,
        colonyDetails: {
            colonyNo: 1,
            streetName: 'Colnol stree'
        }
    },
    permanantAddress: {
        flatNo: 'A76767',
        streetAddress: 'Spine Road',
        pincode: 098989,
        colonyDetails: {
            colonyNo: 1,
            streetName: 'Colnol stree'
        }
    }
}

var objectkeysonly = Object.keys(myColuguesDetails);

// Object.keys(myColuguesDetails).forEach((item)=>{
//     console.log(myColuguesDetails[item])
// })

// Object.entries() => It will represent obejct keys and values both in array format.
Object.entries(myColuguesDetails);

// Object.values() => It will represent value only;


// hasOwnProperty => Use to check property is available in object or not. If available it will return true else return false.

myColuguesDetails.hasOwnProperty('name');
// resutl => true

myColuguesDetails.hasOwnProperty('name1');
//result => false


// Array methods: 

var empDetails = [
    {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "first_name": "George",
        "last_name": "Wong",
        "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
        "id": 4,
        "email": "eve.holt@reqres.in",
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
        "id": 5,
        "email": "charles.morris@reqres.in",
        "first_name": "George",
        "last_name": "Morris",
        "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
        "id": 6,
        "email": "tracey.ramos@reqres.in",
        "first_name": "George",
        "last_name": "Ramos",
        "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }
]

// at() : it will return index array element.
//at(0) : It will give me 0 element from array.

// concat: concat will use to concation of multiple array. It will never modified the original array. It create a new array while use concat method.

// forEach: This is method as well we can consider as a looping constraint. This will modified the original array. This will iterate every elements from array.

// length: This method will represent the array length. This is also use to make 0 element or blank array. We can able to check in array data are present or not. Using of length we can picked some records from array list.

// map : this method is used to iterate the array element as well it will modified the element also. This method is generated a new array. Map will always return value we need to use a return keyword for the result. In conditional statment return keyword is important. Map has been create a new scope so for accessing those we will use a return statment. It is impact the original array also. 

// pop: This method will use to remove array element from the last postion. It is modified the original array. It will always removed the last element.

// push: This method is used to pushed element into the array. Push method always added element in the last position of the array. Whiled pushed the element array returns the length of array. Also its modified the original array.

// shift: This method is used to remove element from first position. It is modfiying the original array also. 

// unshift: Add element at first position of the array. It is modifying the original array. While unshift it will return modified length of array.

// slice: slice will use to pick element from arrays. there are 2 parameters will use to pick those element. start => this parameter help to give a array start index number. end => will use to give end index number of array. It will pick between record of start and end point. This method never modify the original array.

// splice: This method will use to remove elements from array. It will be use two parameters 
// start: This parameter indicate the starting point from where we need to remove the elements.
// deleteCount: How many elements want to delete from array.
// How much element has been deleted it will return and able to store in another variable
// This method are impact the original array.

// sort: This method will used to do record in ascending or descending order. Sort will perform 2 kind of iteration. Sort will modify original array.

// filter: This method is used to filter the element from array based on conditions. It will created new array and return result into that new array. This method never impact the original array.