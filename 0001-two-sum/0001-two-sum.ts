function twoSum(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1;

    while(true) {
        if (nums[left] + nums[right] === target) {
            return [left, right];
        }
        right -= 1;
        if (left === right) {
            left += 1;
            right = nums.length - 1;
        }
    }
};

