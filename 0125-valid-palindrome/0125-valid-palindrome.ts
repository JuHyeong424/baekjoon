function isPalindrome(s: string): boolean {
    const regexString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reverse = regexString.split("").reverse().join("");
    console.log(regexString);
    console.log(reverse)
    if (regexString === reverse) return true;
    return false;
};
