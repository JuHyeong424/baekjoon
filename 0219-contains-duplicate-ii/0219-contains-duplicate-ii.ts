function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const newSet = new Set(nums);

    // 중복이 없다면 false
    if (newSet.size === nums.length) return false;

    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        const arr = nums.slice(i, k+1);
        const set = new Set(arr);
        if (arr.length !== set.size) return true;
        k++;
    }

    return false;
};