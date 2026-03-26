function sortedSquares(nums: number[]): number[] {
    const newArray = new Array(nums.length);
    let p1 = 0; 
    let p2 = nums.length - 1;

    for (let i = newArray.length - 1; i >= 0; i--) {
        const left = nums[p1] * nums[p1];
        const right = nums[p2] * nums[p2];

        if (left > right) {
            newArray[i] = left;
            p1++;
        } else {
            newArray[i] = right;
            p2--;
        }
    }

    return newArray;
};