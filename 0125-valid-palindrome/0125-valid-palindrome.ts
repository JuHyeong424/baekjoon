function isPalindrome(s: string): boolean {
    const regexString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let i = 0;
    let j = regexString.length - 1;

    while(i < j) {
        if (regexString[i] !== regexString[j]) return false;
        i++;
        j--;
    }
    return true;
};
