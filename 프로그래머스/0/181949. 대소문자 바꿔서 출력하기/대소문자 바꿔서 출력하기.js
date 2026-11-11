const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        if (char < 97) {
            result += String.fromCharCode(char + 32);
        }
        if (char >= 97) {
            result += String.fromCharCode(char - 32);
        }
    }
    console.log(result);
});