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
    const result = division(input)
    console.log(result);
});

function division(input) {
    let total = input[0];
    for (let i = 1; i < input.length; i++) {
        total /= input[i];
    }
    return total;
};
