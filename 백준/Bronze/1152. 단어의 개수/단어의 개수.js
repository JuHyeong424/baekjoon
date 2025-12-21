const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', (line) => {
    input = line.trim().split(' ');
}).on('close', () => {
    const result = countWord(input);
    console.log(result);
})

function countWord(input) {
    return input.filter(value => value !== '').length;
}
