/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const stack = [];

    for (let current of intervals) {
        if (stack.length === 0) {
            stack.push(current);
            continue;
        }

        const prev = stack[stack.length - 1];

        if (prev[1] >= current[0]) {
            prev[1] = Math.max(prev[1], current[1]);
        } else {
            stack.push(current);
        }

    }

    return stack;
};