function solution(numbers, target) {   
    let count = 0;
    
    if (numbers.length === 0) {
        if (target === 0) {
            return 1;
        } else {
            return 0;
        }
    }
    
    const array = numbers.slice(1, numbers.length);
    count += solution(array, target - numbers[0])
    count += solution(array, target + numbers[0]);
    
    return count;
}  