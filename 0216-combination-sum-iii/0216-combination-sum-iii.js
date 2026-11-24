/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];
    const path = [];

    function backtrack(start, sum) {
        if (path.length === k) {
            if (sum === n) {
                result.push([...path]);
            }
            return;
        }

        for (let i = start; i <= 9; i++) {
            path.push(i);
            backtrack(i + 1, sum + i);
            path.pop();
        }
    }

    backtrack(1, 0);
    
    return result;
};
