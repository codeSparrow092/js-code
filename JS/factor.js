// find factors of the number;
let num = 15;

for (let i = 1; i < num; i++) {
    if (num % i == 0)
        console.log(`${num} is divisible by ${i}.`);
}