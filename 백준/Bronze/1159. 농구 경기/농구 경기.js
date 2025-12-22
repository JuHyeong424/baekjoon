const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];
let totalLines = 0;
let currentLines = 0;

rl.on('line', (line) => {
    if (totalLines === 0) {
        totalLines = Number(line);
        return;
    }

    input.push(line[0]);
    currentLines++; 

    if (currentLines > totalLines) {
        rl.close();
    }
}).on('close', () => {
    const result = findPlayer(input);
    console.log(result);
})

function findPlayer(input) {
    const count = new Array(26).fill(0);

    input.forEach((value) => {
        count[value.charCodeAt(0) - 97]++;
    });

    const max = Math.max(...count);

    if (max < 5) return 'PREDAJA';

    const maxIndexes = count
        .map((value, index) => value > 4 ? index : -1)
        .filter((value) => value !== -1);
    
    let result = '';

    for (let i of maxIndexes) {
        result += String.fromCharCode(i + 97);
    }
   
    return result;
}
