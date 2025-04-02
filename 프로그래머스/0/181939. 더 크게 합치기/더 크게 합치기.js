function solution(a, b) {
    const string_a = a.toString();
    const string_b = b.toString();
    
    if(string_a + string_b > string_b + string_a) {
        return Number(string_a + string_b);
    } else {
        return Number(string_b + string_a);
    }
}