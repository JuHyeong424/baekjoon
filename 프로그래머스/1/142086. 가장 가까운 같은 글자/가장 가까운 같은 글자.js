function solution(s) {
    var answer = [];
    const lastIndexMap = new Map();
    const array = [...s];
    
    for (let i = 0; i < array.length; i++) {
        const current = array[i]
        if (lastIndexMap.has(current)) {
            answer[i] = i - lastIndexMap.get(current);
        } else {
            answer[i] = -1;
        }
        lastIndexMap.set(current, i);
    }
    
    return answer;
}