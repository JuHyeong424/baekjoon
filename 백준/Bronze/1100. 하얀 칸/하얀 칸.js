const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', (line) => {
    input.push(line.split('').map(arr => arr));
}).on('close', () => {
    const result = findHorseOnWhite(input);
    console.log(result);
})

function findHorseOnWhite(input) {
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (i === 0 || i % 2 === 0) {
                if (j === 0 || j % 2 === 0) {
                    if (input[i][j] === 'F') {
                        count++;
                    }
                }
            }
            if (i % 2 !== 0) {
                if (j % 2 !== 0) {
                    if (input[i][j] === 'F') {
                        count++;
                    }
                }
            }
        }
    }

    return count;
}
