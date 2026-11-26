function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const dist = Array.from({ length: rows }, () => Array(cols).fill(-1));
    
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    
    const queue = [[0, 0]];
    let head = 0;
    dist[0][0] = 0;
    
    while (head < queue.length) {
        const [r, c] = queue[head++];
        
        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];
            
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
            if (maps[nr][nc] === 0) continue;
            if (dist[nr][nc] !== -1) continue;
            
            dist[nr][nc] = dist[r][c] + 1;
            queue.push([nr, nc]);
        }
    }
    
    return dist[rows-1][cols-1] === -1 ? -1 : dist[rows-1][cols-1] + 1;
    
}