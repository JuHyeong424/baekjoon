function isPalindrome(s: string): boolean {
    const newStr = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    let i=0;
    let j = newStr.length - 1;
    while(i < j) {
        if(newStr[i] !== newStr[j] ) return false;
        else {
            i++;
            j--;
        }
    }
    return true;
};