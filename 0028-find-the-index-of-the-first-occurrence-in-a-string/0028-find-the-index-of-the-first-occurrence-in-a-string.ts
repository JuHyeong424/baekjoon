function strStr(haystack: string, needle: string): number {
    let p1 = 0;
    const haystackLength = haystack.length;
    const needleLength = needle.length;

    while (true) {
        if (haystackLength - needleLength < p1) {
            p1 = -1;
            break;
        }
        const sliceHaystack = haystack.substr(p1, needleLength);
        if (sliceHaystack === needle) break;
        p1++;
    }

    return p1;
};