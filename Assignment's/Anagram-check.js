const but1 = document.querySelector("#but1")
but1.addEventListener("click", function checkAnagram(){
    const val1 = document.querySelector("#t1").value;
    const val2 = document.querySelector("#t2").value;
    console.log(`t1: ${val1} and t2: ${val2}`);

    if(val1.split("").sort().join("") === val2.split("").sort().join("")){
    alert(`STRINGS ARE ANAGRAM.`)
    }else{
        alert(`NOT A ANAGRAM !!`)
    }
})
