function pivotIndex(nums: number[]): number {
    let leftSum = 0;
    let totalSum = nums.reduce((acc, cur) => cur += acc, 0);

    for (let i = 0 ; i < nums.length; i++) {
        const rightSum = totalSum - leftSum - nums[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
};