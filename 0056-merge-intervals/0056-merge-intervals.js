/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];

    for (let current of intervals) {
        if (result.length === 0) {
            result.push(current);
            continue;
        }

        const prev = result[result.length - 1];

        if (current[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], current[1]);
        } else {
            result.push(current);
        }
    }

    return result;
};