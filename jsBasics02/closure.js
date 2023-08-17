// Closure => Closure is purely related with scope in javascript. In closure inner scope never exposed untile permitted by parent. While we going to access the scope of functions that time closure are created.

var publicVariable = "Static value";

function parentFunction(){

    // Lexical scope
    var parentVariable = "I am parent variable";
    publicVariable = parentVariable;
    function childOne(){
        var childOneVariable = "I am childOneVariable";
        publicVariable = childOneVariable;
    }

    function childTwo(){
        var childTwoVariable = "I am childTwoVariable";
    }
    childOne();
}


// Parameterise or Without Parameterise function => 


function userOneDetails(){
    var firstname = "firstname";
    var lastname = "Tony";
    var phoneNumber = "12121212";

    console.log("Employee details", firstname +" "+ lastname +" "+ phoneNumber);
}

function userTwoDetails(){
    var firstname = "Albert";
    var lastname = "Iesteine";
    var phoneNumber = "987765443";

    console.log("Employee details", firstname +" "+ lastname +" "+ phoneNumber);
}

function commonFunction(firstname, lastname, id){
    console.log("Employee details", firstname +" "+ lastname +" "+ id);
}

// var employe1 = userOneDetails();
// var employe2 = userTwoDetails();

// var emp1 = commonFunction("Albert", "Eisnstien", "121212112");
// var emp2 = commonFunction("Emp 2", "Testing", "121212112");

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

for(var i=0; i < empDetails.length; i++){
    // commonFunction(empDetails[i].first_name, empDetails[i].last_name, empDetails[i].id);
}

// Without parametrise function can take parameters.


function testingWithoutParams(){
    // console.log("Logs params", arguments);
    // arguments keyword => This keyword is used to capture extra parameters of function which are not defined. Parameter will capture in array format
}

// testingWithoutParams("name", "phoneNumber", "third", "fourth"); 
// If function dont have any parameter it and while calling we passed a parameter so function will not given any kind of error it will simple avoid those parameter and run it.

function withExtraParams(param1, param2, param3){
    console.log(param1, param2, param3)
    console.log(arguments)
}

// withExtraParams("Testvalue1", "Testvalue2", "Testvalue3", "Testvalue4", "Testvalue5");


// Parameter work with different type of function =>

// anonymouse function with parameter

var mydata = function(test){
    console.log("Anonymous capture parameter", test)
}

// Self invoking =>

// (function(params1){
//     console.log("Print parameter into self invoking => ", params1);
// })("Sending value");

// function return another function with parameter => THis will call with another name function currying

function one(param1){
    return function two(param2){
        return function three(param3){
            console.log("Three function excuted")
            return param1 * param2 * param3
        }
    }
}

// Callback hell type in javascript


// Constructor function => constructor function will used for create an object. for constructor function object will create using new keyword. Javascript provide some inbuild constructor function. 

// In-build constructor => Date, Array, Number, Object, Custom. 

// Constuctor function will provide a fully reference for dev purpose.


function Hero(){ // constructor function always start with capital letter
    // this.occupation = "Ninja";

    this.occupation = "Ninja";
    this.name = "test";

    var testThisObject = {};
    console.log("This print in child",this);

    function innerfunction(){
        function childone(){
            console.log("This print in child",this)
        }
        // childone()
    }
    // innerfunction();
}

function hero(){

    var privateObj = {
        name: 'test'
    }
    this.occupation = "test"
    console.log(this)
}

// var object1 = new Hero(); // Reference will be use

// var object2 = new hero(); // Direct method will be used

// this => keword will be use to point our current object.


// Object comparison => 

var firstObject = {name:"test"};

var firstObjReferenc = firstObject;

var secondObject = {name:"test"};

// Object reference wil be match with original object. Othere wise if new object create will never match.


// Shallow Copy => Shallow copy will be copied the reference. While we make changes in reference the original one will get affected.

var shallowOne = {phoneno: '1212121'};

var phonnoRef = shallowOne;

// Deep Copy => Deep copy will never imapct the original object or value.

var deepParent = {test: "Test deep copy"};
// Will not put any connect between this two object
var deepCopyReference = {...deepParent}; // ... spread operator will make deep copy