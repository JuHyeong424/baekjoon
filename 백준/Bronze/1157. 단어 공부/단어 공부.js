const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let input = [];

rl.on('line', (line) => {
    input = line.trim().toLowerCase().split('');
}).on('close', () => {
    const result = findMostAlphabet(input);
    console.log(result);
})

function findMostAlphabet(input) {
    let count = new Array(26).fill(0);
    let max = count[0];
    let index = 0;
    let maxCount = 0;

    for (let i of input) {
        for (let j = 0; j < alphabet.length; j++) {
            if (i === alphabet[j]) {
                count[j] += 1;
            }
        }
    }

    for (let i = 0; i < count.length; i++) {
        if (max < count[i]) {
            max = count[i];
            index = i;
        }
    }

   for (let i = 0; i < count.length; i++) {
    if (max === count[i]) maxCount++;
    if (maxCount > 1) return '?';
   }

    return alphabet[index].toUpperCase();
}
