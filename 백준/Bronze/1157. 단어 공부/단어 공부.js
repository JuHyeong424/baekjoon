const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', (line) => {
    input = line.trim().toLowerCase().split('');
}).on('close', () => {
    const result = findMostAlphabet(input);
    console.log(result);
})

function findMostAlphabet(input) {
    let count = new Array(26).fill(0);

    input.forEach((value) => {
        count[value.charCodeAt(0) - 97]++;
    });

    const max = Math.max(...count);
    const maxIndexes = count
        .map((v, i) => v === max ? i : -1)
        .filter(i => i !== -1);

    if (maxIndexes.length > 1) return '?';

    return String.fromCharCode(maxIndexes[0] + 65);
}
