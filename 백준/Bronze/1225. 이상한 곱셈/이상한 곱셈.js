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
    const arr1 = input[0].split('').map(Number);
    const arr2 = input[1].split('').map(Number);

    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            sum += arr1[i] * arr2[j];
        }
    }

    return sum;
}
