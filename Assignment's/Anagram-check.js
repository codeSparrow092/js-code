const input1 = "mary";
const input2 = "army";

if(input1.length == input2.length){
    if(input1.split("").sort().join("") === input1.split("").sort().join(""))
    {
        console.log("ANAGRAM!!")
    }
    else{
        console.log("Not a anagram!!");
    }
}
else{
    console.log("NOt match!!!")
}