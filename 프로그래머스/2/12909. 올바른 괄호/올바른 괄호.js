function solution(s){
    let sum = 0;
    
    for(a of s) {
        sum += a === '(' ? 1 : -1;
        if(sum < 0) return false;
    }
    return sum === 0 ? true : false;
}