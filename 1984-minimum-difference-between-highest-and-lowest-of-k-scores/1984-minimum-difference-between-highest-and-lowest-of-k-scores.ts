function minimumDifference(nums: number[], k: number): number {
    if (k === 1) return 0;

    const arrayNums = nums.sort((a,b) => b - a);
    let result = arrayNums[0] - arrayNums[k - 1];
    let index = 1;

    while (index + k <= nums.length) {
        let max = nums[index];
        let min = nums[index + k - 1];
        if (result > max - min) result = max - min;
        index +=1;
    }

    return result;

    return result;
};