/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const width = right - left;
        const square = h * width;
        max = Math.max(max, square);
        if (height[left] > height[right]) {
            right -= 1;
        } else {
            left += 1;
        }
    }
    return max;
};