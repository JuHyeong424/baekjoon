function moveZeroes(nums: number[]): void {
    const array = nums.filter((value) => value !== 0);
    const zero = nums.length - array.length;

    for (let i = 0; i < zero; i++) {
        array.push(0);
    }

    nums.splice(0, nums.length, ...array);
}