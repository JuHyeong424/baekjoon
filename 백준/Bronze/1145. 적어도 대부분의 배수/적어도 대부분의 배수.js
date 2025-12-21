const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', (line) => {
    input = line.split(' ').map(Number);
}).on('close', () => {
    const result = findMultiple(input);
    console.log(result);
})

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function findMultiple(input) {
    let min = Infinity;

    for (let i = 0; i < 5; i++) {
        for (let j = i + 1; j < 5; j++) {
            for (let k = j + 1; k < 5; k++) {
                const cur = lcm(lcm(input[i], input[j]), input[k]);
                min = Math.min(min, cur);
            }
        }
    }

    return min;
}
