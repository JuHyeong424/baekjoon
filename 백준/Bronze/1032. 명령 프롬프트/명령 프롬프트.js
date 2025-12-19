const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 let input = [];
 let lineCount = 0;
 let totalLine = 0;

rl.on('line', (line) => {
    if (lineCount === 0) {
        totalLine = parseInt(line);
    } else {
        input.push(line);
    }

    lineCount++;

    if (lineCount > totalLine) {
        rl.close();
    }
}).on('close', () => {
    const result = getResult(input).join('');
    console.log(result);
});

function getResult(input) {
    let array = input[0].split('');
    let compareArray = [];
    
    for (let i = 1; i < input.length; i++) {
        currentArray = input[i].split('');
        for (let j = 0; j < currentArray.length; j++) {
            if (currentArray[j] !== array[j]) {
                array[j] = '?';
            }
        }
    }

    return array;
}