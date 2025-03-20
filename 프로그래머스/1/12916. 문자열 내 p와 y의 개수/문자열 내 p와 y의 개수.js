function solution(s){
    var s = s.toUpperCase();
    var p = 0;
    var y = 0;
    for(var i = 0; i < s.length; i++) {
        if(s.charAt(i) === 'P') {
            p += 1;
        } else if(s.charAt(i) === 'Y') {
            y += 1;
        }
    }
    
    return (p === y) || (p === 0 && y === 0) ? true : false;
}