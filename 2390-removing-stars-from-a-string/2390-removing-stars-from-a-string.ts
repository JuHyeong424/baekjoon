function removeStars(s: string): string {
    let array = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (s[i] === '*') {
            array.pop();
            continue;
        }
        array.push(char);
    }
    return array.join('');
};