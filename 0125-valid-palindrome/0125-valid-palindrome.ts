function isPalindrome(s: string): boolean {
    const regexString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reverse = regexString.split("").reverse().join("");
    if (regexString === reverse) return true;
    return false;
};
