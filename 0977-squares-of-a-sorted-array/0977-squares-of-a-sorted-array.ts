function sortedSquares(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= nums[i];
    }
    const newArray = [...nums];
    let p1 = 0; 
    let p2 = nums.length - 1;

    for (let i = newArray.length - 1; i >= 0; i--) {
        if (nums[p1] > nums[p2]) {
            newArray[i] = nums[p1];
            p1++;
        } else {
            newArray[i] = nums[p2];
            p2--;
        }
    }

    return newArray;
};