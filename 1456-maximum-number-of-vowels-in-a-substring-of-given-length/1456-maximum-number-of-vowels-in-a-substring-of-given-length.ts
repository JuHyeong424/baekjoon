function maxVowels(s: string, k: number): number {
    let count = 0;

    for (let i = 0; i < k; i++) {
        if ('aeiou'.includes(s[i])) {
            count += 1;
        }
    }

    let result = count;

    for (let i = 1; i <= s.length - k; i++) {
        if ('aeiou'.includes(s[i - 1])) count -= 1;
        if ('aeiou'.includes(s[i + k - 1])) count += 1;
        result = Math.max(result, count);
        console.log(count);
    }
    
    // while (start + k <= s.length) {
    //     const subString = s.slice(start, start + k)
    //     console.log(subString);

    //     let count = 0;
    //     for (let i = 0; i < subString.length; i++) {
    //         if (subString[i] === 'a' || subString[i] === 'e' || subString[i] === 'i' || subString[i] === 'o' || subString[i] === 'u') count += 1;
    //     }
        
    //     result = Math.max(result, count);
        
    //     start++;
    // }
    return result;
};