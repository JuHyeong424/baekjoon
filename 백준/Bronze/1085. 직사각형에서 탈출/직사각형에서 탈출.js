const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', (line) => {
    input = line.split(' ');
}).on('close', () => {
    input = input.map(Number);
    const result = getMinDistance(input);
    console.log(result);
})

function getMinDistance(input) {
    return Math.min(Math.abs(input[0] - input[2]), Math.abs(input[1] - input[3]), input[0], input[1]);
}
