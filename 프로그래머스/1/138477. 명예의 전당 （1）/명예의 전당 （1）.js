function solution(k, score) {
    var answer = [];
    
    let array = [];
    for (let i = 0; i < score.length; i++) {
        if (i < k) {
            array[i] = score[i];
            array.sort((a, b) => b - a);
        } else {
            array[i] = score[i];
            array = array.sort((a, b) => b - a).slice(0, k);
        }
        const min = array[array.length - 1]
        answer[i] = min
    }
    
    return answer;
}