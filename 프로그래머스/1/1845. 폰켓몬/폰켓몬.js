function solution(nums) {
    var answer = 0;
    
    const set = new Set(nums);
    const count = nums.length / 2;
    
    if (set.size <= count) answer = set.size;
    if (count < set.size) answer = count;
    
    return answer;
}