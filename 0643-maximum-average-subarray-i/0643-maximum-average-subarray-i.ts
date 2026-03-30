function findMaxAverage(nums: number[], k: number): number {
    let maxAverage = -Infinity;
    let start = 0;

    while (start < nums.length - k + 1) {
        let isMax = 0;

        for (let i = start; i < start + k; i++) {
            isMax += nums[i];
        }
        const isMaxAverage = isMax / k;
        if (isMaxAverage > maxAverage) maxAverage = isMaxAverage;
        start += 1;
    }
    return maxAverage;
};