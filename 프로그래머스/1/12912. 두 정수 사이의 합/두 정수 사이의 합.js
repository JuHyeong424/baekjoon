function solution(a, b) {
    var result = 0;
    
    if (a > b) {
        var c = a;
        a = b;
        b = c;
    }
    
    for(var i = a; i <= b; i++) {
        result += i;
    }
    
    return result;
}