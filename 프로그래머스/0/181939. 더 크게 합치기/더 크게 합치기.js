function solution(a, b) {
    const string_a = a.toString();
    const string_b = b.toString();
    
    const result = (string_a + string_b) > (string_b + string_a) ? (string_a + string_b) : (string_b + string_a);
    
    return Number(result);
}