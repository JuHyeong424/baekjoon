/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const array = [];
    let index = 0;

    while (index <= nums.length - k) {
        let sum = 0;
        for (let i = index; i < index+k; i++) {
            sum += nums[i];
        }
        array.push(sum / k);
        index++;
    }
    return Math.max(...array);
};