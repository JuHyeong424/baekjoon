function letterCombinations(digits: string): string[] {
    const info: Record<string, string[]> = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };

    const digit = digits.split(''); // [2, 3]
    const selected = [];
    const result = [];

    function backtrack(index) {
        if (selected.length === digit.length) {
            const selectedToString = selected.toString().replaceAll(',', '');
            result.push(selectedToString);
            return;
        }

        const letters = info[digit[index]]; // ['a', 'b', 'c']
        
        for (const letter of letters) {
            selected.push(letter);
            backtrack(index + 1);
            selected.pop();
        }
    }

    backtrack(0);

    return result;
};

