function groupAnagrams(strs: string[]): string[][] {
    const visited = new Set();
    const result = [];

    const sorted = strs.map(str => str.split('').sort().join(''));

    for (let i = 0; i < strs.length; i++) {
        if (visited.has(i)) continue;
        const same = [strs[i]];

        let sameCount = 0;
        for (let j = i + 1; j < strs.length; j++) {
            if (visited.has(j)) continue;
            if (sorted[i] === sorted[j]) {
                same.push(strs[j]);
                visited.add(i);
                visited.add(j);
                sameCount += 1;
            }
        }

        visited.add(i);
        result.push(same);
    }
    return result;
};