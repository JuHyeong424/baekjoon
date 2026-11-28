/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let left = 0;
    let max = 0;

    while (left < s.length) {
        if (s.length === 1) {
            max = 1;
            break;
        }

        for (let i = left + 1; i < s.length; i++) {
            set.add(s[left]);
            const right = s[i];

            if (!set.has(right)) {
                set.add(right);
            } else {
                break;
            }
        }
        max = Math.max(max, set.size);
        set.clear();
        left += 1;
    }
    return max;
};