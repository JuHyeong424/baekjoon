function solution(n) {
    let arr = String(n).split('');
    arr = arr.reverse().map(a => Number(a));
    return arr;
}