function solution(n, computers) {
    const visited = new Set();
    const stack = [];
    let count = 0;
    
    for (let i = 0; i < computers.length; i++) {
        if (visited.has(i)) continue;
        
        stack.push(i);
        visited.add(i);
        
        count++;
        
        while (stack.length > 0) {
            const value = stack.pop();
            
            for (let j = 0; j < computers[value].length; j++) {
                if (computers[value][j] === 1 && !visited.has(j)) {
                    stack.push(j);
                    visited.add(j);
                }
            }
        }
    }
    
    return count;
}