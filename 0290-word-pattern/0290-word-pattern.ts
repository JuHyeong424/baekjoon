function wordPattern(pattern: string, s: string): boolean {
    const newMap = new Map<string, string>();
    const splitArray = s.split(" ");

    if (pattern.length !== splitArray.length) return false;

    for (let i = 0; i < splitArray.length; i++) {
        if (newMap.has(pattern[i]) && newMap.get(pattern[i]) !== splitArray[i]) return false;
        newMap.set(pattern[i], splitArray[i]);
    }

    const mapArray = [...newMap.values()];
    const newSet = new Set(mapArray);

    if (mapArray.length !== newSet.size) return false;
    return true;
};