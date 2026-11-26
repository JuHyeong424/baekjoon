function solution(prices) {
    const stack = [];
    const result = [];
    let head = 0;
    
    while (result.length < prices.length) {
        const a = prices[head];
        
        for (let i = head + 1; i < prices.length; i++) {
            if (a <= prices[i]) {
                stack.push(prices[i])
            } else {
                stack.push(prices[i]);
                break;
            }
        }
        // console.log(stack);
        
        result.push(stack.length);
        
        while (stack.length !== 0) stack.pop();
        
        head++;
    }
    
    return result;
}