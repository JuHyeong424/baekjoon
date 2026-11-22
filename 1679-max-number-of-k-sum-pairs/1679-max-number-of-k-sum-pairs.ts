function maxOperations(nums: number[], k: number): number {
    let left = 0;
    let right = nums.length - 1;
    let count = 0;
    nums.sort((a, b) => a - b)

    while (left < right) {
        const leftNum = nums[left];
        const rightNum = nums[right];
        const sum = leftNum + rightNum;

        if (sum === k) {
            count += 1;
            left += 1;
            right -= 1;
        } else if (sum < k) {
            if (leftNum < rightNum) {
                left += 1;
            } else {
                right -= 1;
            }
        } else if (sum > k) {
            if (leftNum < rightNum) { 
                right -= 1; 
            } else {
                left += 1;
            }
        }
    }

    return count;
};