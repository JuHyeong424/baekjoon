function solution(number, limit, power) {
    var answer = 0;
    
    const array = [];
    for (let i = 1; i <= number; i++) {
        let count = 0;
        
        for (let j = 1; j <= i; j++) {
            if (i%j === 0) count++;
        }
        
        array.push(count);
    }
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= limit) {
            answer += array[i]
        } else if (array[i] > limit) {
            answer += power;
        }
    }
    
    return answer;
}