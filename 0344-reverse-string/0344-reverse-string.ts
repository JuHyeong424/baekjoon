/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const reverseArray = s.reverse().join('');
    console.log(reverseArray);
};