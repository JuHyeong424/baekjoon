function solution(n, m) {
    // 최대공약수(GCD) 계산 (유클리드 알고리즘)
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    // 최소공배수(LCM) 계산
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    // 결과 반환
    const gcdResult = gcd(n, m);
    const lcmResult = lcm(n, m);
    
    return [gcdResult, lcmResult];
}