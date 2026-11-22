function uniqueOccurrences(arr: number[]): boolean {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (!(map.get(arr[i]))) {
            map.set(arr[i], 1);
        } else if (map.get(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    
    const set = new Set();
    for (let value of map.values()) {
        set.add(value);
    }

    if (map.size !== set.size) return false;

    return true;
};