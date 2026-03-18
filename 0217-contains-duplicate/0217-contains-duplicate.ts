function containsDuplicate(nums: number[]): boolean {
    const newSet = new Set(nums);
    if (nums.length !== newSet.size) return true;
    return false;
};