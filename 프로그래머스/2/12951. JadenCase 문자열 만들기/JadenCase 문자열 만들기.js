function solution(s) {
    let arr = s.split(' ');
    
    for(let i=0;i<arr.length;i++) {
        arr[i] = arr[i].toLowerCase();
        if(arr[i].charAt(0) >= 'a' && arr[i].charAt(0) <= 'z') {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
    }
    return arr.join(' ');
}