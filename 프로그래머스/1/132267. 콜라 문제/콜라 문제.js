function solution(a, b, n) {
    var answer = 0;
    
    while (n >= a) {
        const get = Math.floor(n / a) * b;
        answer += get;
        n = get + n % a;
    }
    
    return answer;
}