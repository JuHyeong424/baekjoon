const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    input = input.map(Number);
    const result = findDivision(input);
    const padResult = String(result).padStart(2, '0');
    console.log(padResult);
})

function findDivision(input) {
    const dividend = input[0];
    const divisor = input[1];

    const base = Math.floor(dividend / 100) * 100;

    for (let i = 0; i < 100; i++) {
        if ((base + i) % divisor === 0) {
            return i;
        }
    }
}
