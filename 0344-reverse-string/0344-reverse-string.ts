/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const empty = s[right];
        s[right] = s[left];
        s[left] = empty;

        left++;
        right--;
    }

    console.log(s);
};