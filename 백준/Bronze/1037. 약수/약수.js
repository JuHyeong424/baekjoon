const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];
let totalLines = 0;
let currentLines = 0;

rl.on('line', (line) => {
    if (currentLines === 0) {
        totalLines = parseInt(line);
    }

    for (let i = 0; i < totalLines; i++) {
        const inputArray = line.split(' ').map(Number);
        input[i] = inputArray[i];
        currentLines++;
    }

    if (currentLines > totalLines) {
        rl.close();
    }
}).on('close', () => {
    const result = findMultiple(input);
    console.log(result);
})

function findMultiple(input) {
    if (input.length === 1) return input[0] ** 2;

    let min = input[0];
    let max = input[0];

    for (let num of input) {
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }

    return min * max;
}
