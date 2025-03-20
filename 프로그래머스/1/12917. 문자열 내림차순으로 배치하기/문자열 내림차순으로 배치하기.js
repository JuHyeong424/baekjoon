function solution(s) {
    var arr = [];
    var a = "";
    for(var i = 0; i < s.length; i++) {
        arr[i] = s.charAt(i);
    }
    s = arr.sort().reverse().join();
    
    return s.replaceAll(',', '');
}