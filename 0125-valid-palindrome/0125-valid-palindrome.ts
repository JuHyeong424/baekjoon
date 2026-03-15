function isPalindrome(s: string): boolean {
    const notReverse = getInput(s);
    const reverse = getReverseString(s);
    if (reverse === notReverse) return true;
    return false;
};

function getInput(s: string): string {
    let notReverse = "";
    let char = '';

    for (let i = 0; i < s.length; i++) {
        char = s[i].toLowerCase();

        if (char >= "a" && char <= "z" || char >= "0" && char <= "9") notReverse += char;
    }

    return notReverse;
}

function getReverseString(s: string): string {
    let reverse = "";

    for (let i = s.length - 1; i >= 0; i--) {
        let getChar = s[i].toLowerCase();

        if (getChar >= "a" && getChar <= "z" || getChar >= "0" && getChar <= "9") reverse += getChar;
    }

    return reverse;
}