const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', (line) => {
    input = line.split(' ');
}).on('close', () => {
    const result = strangeMultiple(input);
    console.log(result);
})

function strangeMultiple(input) {
    const sum1 = [...input[0]].reduce((a, c) => a + Number(c), 0);
    const sum2 = [...input[1]].reduce((a, c) => a + Number(c), 0);

    return sum1 * sum2;
}
