function solution(s) {
    var answer = [];
    
    let removeZeroCount = 0;
    let count = 0;
    
    while (s !== '1') {
        const remove = s.replaceAll('0', '');
        removeZeroCount += s.length - remove.length;
        s = remove.length.toString(2);
        count++;
    }
    
    answer.push(count, removeZeroCount);
    
    return answer;
}