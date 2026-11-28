/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let max = 0;

    for (let value of set) {
        if (set.has(value - 1)) continue;

        let current = value;
        let length = 1;

        while (set.has(current + 1)) {
            length++;
            current++;
        }
        max = Math.max(max, length);
    }

    return max;
}