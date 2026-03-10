function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        const findNum = target - nums[i];

        if (map.has(findNum) && map.get(findNum) !== i) return [i, map.get(findNum)];
    }
};

