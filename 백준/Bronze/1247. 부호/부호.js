const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', line => 
    input.push(line)
).on('close', () => {
    console.log(findPlace(input));
});

function sign(sum) {
    if (sum === 0n) return '0';
    if (sum > 0n) return '+';
    return '-';
}

function findPlace(input) {
    let idx = 0;
    let result = '';

    for (let t = 0; t < 3; t++) {
        const N = Number(input[idx++]);
        let sum = 0n;

        for (let i = 0; i < N; i++) {
            sum += BigInt(input[idx++]);
        }

        result += sign(sum) + '\n';
    }

    return result.trim();
}
