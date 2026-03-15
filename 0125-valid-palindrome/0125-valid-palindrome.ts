function isPalindrome(s: string): boolean {
    const regexString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reverse = regexString.split('').reduce((rev, char) => char + rev, '');
    if (regexString === reverse) return true;
    return false;
};
