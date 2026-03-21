function isIsomorphic(s: string, t: string): boolean {
    const newMap = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        if (newMap.has(s[i]) && newMap.get(s[i]) !== t[i]) return false;
        newMap.set(s[i], t[i]);
    }

    const mapArray = [...newMap.values()];
    const newSet = new Set(mapArray);
    if (mapArray.length !== newSet.size) return false;
    return true;
};