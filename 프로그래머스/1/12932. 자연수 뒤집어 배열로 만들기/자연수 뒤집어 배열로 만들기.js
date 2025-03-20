function solution(n) {
    var arr = String(n).split('');
    arr = arr.reverse().map(m=>+m);
    return arr;
}