function solution(n) {
    var c = '수박';
    if(n % 2 !== 0) {
        return c.repeat(n / 2) + '수';
    } else {
        return c.repeat(n / 2);
    }
}