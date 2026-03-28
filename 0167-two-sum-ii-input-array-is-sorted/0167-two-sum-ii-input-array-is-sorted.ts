function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (true) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            break;
        } else if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        }
    }

    return [left + 1, right + 1];
};