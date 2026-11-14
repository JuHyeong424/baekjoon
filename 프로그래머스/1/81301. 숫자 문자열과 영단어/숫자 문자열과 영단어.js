const DATA = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const NUMBER = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function solution(s) {
    DATA.forEach((value, index) => {
        const isSame = s.includes(value);
        if (isSame) {
            s = s.replaceAll(value, NUMBER[index]);
        }
    })
    
    return Number(s);
}