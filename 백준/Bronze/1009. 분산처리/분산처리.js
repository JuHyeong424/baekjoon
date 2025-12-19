const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let lineCount = 0;
let totalCount = 0;

rl.on('line', (line) => {
    if (lineCount == 0) {
        totalCount = parseInt(line);
    } else {
        const lineInput = line;
        input.push(lineInput);
    }
    
    lineCount++;

    if (lineCount > totalCount) {
        rl.close();
    }
}).on('close', () => {
    const result = division(input).join('\n');
    console.log(result);
});

function division(input) {
    let total = [];
    for (let i = 0; i < input.length; i++) {
        const [first, second] = splitArray(input[i]);
        const result = powLastDigit(first, second);
        total.push(result);
    }
    return total;
};

function splitArray(input) {
    const [first, second] = input.split(' ');
    return [first, second];
};

function powLastDigit(first, second) {
    let result = 1;
    let firstNumber = first % 10;

    for(let i = 0; i < second; i++) {
        result = (result * (firstNumber)) % 10;    
    }

    if (result === 0) {
        result = 10;
    }

    return result;
}
