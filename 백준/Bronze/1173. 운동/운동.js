const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', (line) => {
    input = line.split(' ').map(Number);
}).on('close', () => {
    const result = fineMinTime(input);
    console.log(result);
})

function fineMinTime(input) {
    const min = input[1];
    let totalCount = 0;
    let exerciseCount = 0;

    if (input[2] - input[1] < input[3]) {
        return -1;
    }

    while (exerciseCount < input[0]) {
        if (input[1] + input[3] <= input[2]) {
            input[1] += input[3];
            exerciseCount++;
        } else {
            if (input[1] - input[4] < min) {
                input[1] = min;
            } else {
                input[1] -= input[4];
            }
        }
        totalCount++;
    }

    return totalCount;
}
