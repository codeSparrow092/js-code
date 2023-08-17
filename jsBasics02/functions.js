// function => Multiple kind of statement or execution perform based on user input or automatically excution in specific reason. For excution function need to call or user input require.

// user input will be worked based on event perform by the user

// syntax=> function(){} 

var storedParentDetails;

var objectData = {
    empOne: {
        name: 'emp1',
        phone: 212113
    },
    empTwo: {
        name: 'emp2',
        phone: 98765
    },
    empThree: {
        name: 'emp3',
        phone: 43325
    }
}
var tblEle = document.getElementById('tbleEmp');

function mathCalc() {
    // var result = 100 * 10;
    // console.log("function block", result);
    for (var i in objectData) {
        var trEle = document.createElement('tr');
        var trChild = "<td>" + objectData[i].name + "</td><td>" + objectData[i].phone + "</td>";
        trEle.innerHTML = trChild;
        tblEle.appendChild(trEle);
    }
}

// mathCalc();


// Types of function =>

// Anonymous function => This function don't have any kind of name. Only using function keyword we will perform the statment or actions. We store this type function into a variable. This function also carried some kind of data

var anonytest = function(){console.log("This is anonymous function test", 123 + 987)};

var test1 = function(){console.log("This is anonymous function test", 123 + 987)};

var test2 = function(){console.log("This is anonymous function test", 123 + 987)};


// Callback function => this will called a function based on series or unorder series.

// return => is used to exposed execution part of function. This will termination the statement on the same where return has been mentioned. Also return is used break scope of function.

function one(){
//   console.log("callback test one")
  return 100;
}

function two(){
    // console.log("callback test two");
    return 200;
}
function resultFun(){
    return one() + two();
}

// console.log("resultFun", resultFun());


// scope => scope are defined within the code block itself.
// Private scope => 

// Public scope => 

var publicVariable = "This is public var value"; // Example of public scope

{
    // this brace have there own scope
    // Private scope
    test: 'my name'
}

if(true){ 
    // if block own scope
    // Private scope
    var checkscope = "If block have there own scope"
}

for(var i =0; i < 4; i++){
    // this is for loop own scope
    // Private scope
    // console.log(i)
}

function scopeCheck(){
    // function own scope
    // Private scope
    var myownway = "I am property of function";
    console.log("publicVariable => ", publicVariable)
    // console.log("privte myownway => ", myownway);
    // return myownway
}

// console.log("myownway", myownway);
// scopeCheck();

// Self invoking functions => this function will excute itself. This function will be use to get call without any kind of name or use inputs. For advertisement popup purpose or some time while script load we need to execute a specific code or popups.


(function(param1){
    for(var i =0; i < 4; i++){
        console.log(param1)
    }
})("test parmas");


// Inner private function => Function are defined in another function within ther private scope.


function parentfunc(){

    function childOne(){
        // console.log("child one called")
        return 100;
    }

    function childTwo(){
        // console.log("childTwo called")
        return 200
    }

    // console.log("I am in parent function scope");
    return childOne() * childTwo();
}

storedParentDetails = parentfunc();

// Function return another function

function returnChild(){

    return function childOne(){
        // console.log("I am returnning from parent")
    }
    
}

var testIt = returnChild();

// Function will rewrite themself => Function will rewrite itself. It will use same name for inner private function. Or we can store using same name varible of the particular function.

function test(){
    test = function(){
        console.log("Checking function can rewrite");
    }
}

console.log(test());

var test = function() {
    function someSetup(){
    var setup = 'done';
    }
    function actualWork() {
    alert('Worky-worky');
    }
    someSetup();
    return actualWork;
   }();
















