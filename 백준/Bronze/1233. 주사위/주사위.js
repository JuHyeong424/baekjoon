const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', (line) => {
    input = line.split(' ').map(Number);
}).on('close', () => {
    const result = sumOfDice(input);
    console.log(result);
})

function sumOfDice(input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    
    let count = new Array(sum + 1).fill(0);

    let first = new Array(input[0]).fill(0);
    let second = new Array(input[1]).fill(0);
    let third = new Array(input[2]).fill(0);

    for (let i = 0; i < input[0]; i++) {
        first[i] = (i + 1);
    }

    for (let i = 0; i < input[1]; i++) {
        second[i] = (i + 1);
    }

    for (let i = 0; i < input[2]; i++) {
        third[i] = (i + 1);
    }

    let result = [];

    for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length; j++) {
            for (let k = 0; k < third.length; k++) {
                result.push(first[i] + second[j] + third[k]);
            }
        }
    }

    for (let i = 0; i < result.length; i++) {
        count[result[i]]++;
    }

    let max = Math.max(...count);

    return count.findIndex(n => n === max);
}
