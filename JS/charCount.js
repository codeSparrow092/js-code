let str = "sparrow";
let char = 'r';
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
        count++
    }
}
console.log(`number of ${char} in ${str} is ${count}`);
