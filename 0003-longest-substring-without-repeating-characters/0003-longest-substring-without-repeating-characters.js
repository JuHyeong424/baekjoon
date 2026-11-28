/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let left = 0;
    let max = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (map.has(char)&& left <= map.get(char)) {
            left = map.get(char) + 1;
        }

        map.set(char, right);
        max = Math.max(max, right - left + 1);
    }

    return max;

    return max;
};