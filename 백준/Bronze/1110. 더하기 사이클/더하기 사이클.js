const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = '';

rl.on('line', (line) => {
    input = line;
}).on('close', () => {
    const result = findCycleCount(input);
    console.log(result);
})

function findCycleCount(input) {
    let inputString = input;
    let count = 0;
    let sumInput = 0;
    let sumResult = 0;

    while (true) {
        sumInput = 0;

        for (let i = 0; i < inputString.length; i++) {
            sumInput += parseInt(inputString[i]);
        }

        sumResult = inputString.charAt(inputString.length - 1) + sumInput.toString().charAt(sumInput.toString().length - 1);

        count++;

        if (parseInt(sumResult) === parseInt(input)) break;

        inputString = sumResult.toString();
    }
    return count;
}
