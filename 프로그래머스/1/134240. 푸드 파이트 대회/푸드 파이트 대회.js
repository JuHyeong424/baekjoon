function solution(food) {
    var answer = '';
    const resultMap = new Map();
    
    for (let i = 1; i < food.length; i++) {
        let current = food[i]
        if (current % 2 !== 0) {
            current = current - 1;
        }
        resultMap.set(i, current / 2);
    }
        
    for (let i = 1; i < food.length; i++) {
        answer += String(i).repeat(resultMap.get(i))
    }

    answer += '0';
    answer += answer.slice(0, answer.length - 1).split('').reverse().join('');
    
    return answer;
}