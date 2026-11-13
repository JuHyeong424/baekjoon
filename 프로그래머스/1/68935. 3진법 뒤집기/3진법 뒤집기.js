function solution(n) {
    var answer = n;
    
    let result = '';
    while (answer > 0) {
        result += String(answer % 3);
        answer = Math.floor(answer / 3);
    }
        
    let reverseResult = 0;
    
    for (let i = result.length - 1; i >= 0; i--) {
        reverseResult += Number(result[i]) * Math.pow(3, result.length - i - 1);
    }
    
    return reverseResult;
}