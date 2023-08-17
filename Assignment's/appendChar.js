let str = "My first javascript program";

let newStr = "";

let arrOfStr = str.split(" ");

for(var i=0;i<arrOfStr.length;i++){
    newStr += ` @${arrOfStr[i]}`
}
console.log(newStr);