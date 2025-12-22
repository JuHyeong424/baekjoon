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

    for (let c of input) {
        count[c.charCodeAt(0) - 97]++
    };

    let result = '';
   
    for (let i = 0; i < count.length; i++) {
        if (count[i] > 4) {
            result += String.fromCharCode(i + 97);
        }
    }

    return result || 'PREDAJA';
}
