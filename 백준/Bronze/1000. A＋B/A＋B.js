const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    const numbers = line.split(' ').map(Number);
    input.push(...numbers);
}).on('close', () => {
    const result = sum(input)
    console.log(result);
});

function sum(input) {
    let total = 0;
    for (let num of input) {
        total += num;
    }
    return total;
};
