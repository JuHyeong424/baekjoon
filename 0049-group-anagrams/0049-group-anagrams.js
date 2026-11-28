/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    const sorted = strs.map(str => str.split('').sort().join(''));

    for (let i = 0; i < sorted.length; i++) {
        if (!map.has(sorted[i])) map.set(sorted[i], []);
        map.get(sorted[i]).push(strs[i]);
    }
    
    return [...map.values()];
};