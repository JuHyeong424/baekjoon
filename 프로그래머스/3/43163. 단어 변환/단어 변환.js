function solution(begin, target, words) {
    const visited = Array(words.length).fill(false);
    const queue = [[begin, 0]];
    let head = 0;
    
    while (head < queue.length) {
        const [cur, count] = queue[head++];
        
        if (cur === target) return count;
        
        for (let i = 0; i < words.length; i++) {
            if (visited[i]) continue;
            let diff = 0;
            for (let j = 0; j < cur.length; j++) {
                if (cur[j] !== words[i][j]) diff++;
            }
            
            if (diff === 1) {
                visited[i] = true;
                queue.push([words[i], count + 1]);
            }
        }
    }
    
    return 0;
}