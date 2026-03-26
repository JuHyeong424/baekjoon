function sortedSquares(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n);
    
    let left = 0;
    let right = n - 1; 
    let pos = n - 1;

    while (left <= right) {
        const leftSquare = nums[left] ** 2;
        const rightSquare = nums[right] ** 2;

        if (leftSquare > rightSquare) {
            result[pos] = leftSquare;
            left++;
        } else {
            result[pos] = rightSquare;
            right--;
        }
        
        pos--;
    }

    return result;
}