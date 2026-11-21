function nearestExit(maze: string[][], entrance: number[]): number {
    const visited = new Set([entrance.join(',')]);
    let distance = 0;
    const queue: [[number, number], number][] = [[[entrance[0], entrance[1]], distance]];
    let head = 0;
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    while (head < queue.length) {
        const [[y, x], distance] = queue[head++];

        for (let [dy, dx] of directions) {
            const ny = y + dy;
            const nx = x + dx;
            
            // 범위를 벗어났는지
            if (ny < 0 || ny >= maze.length || nx < 0 || nx >= maze[0].length) continue;

            // 벽인지
            if (maze[ny][nx] === '+') continue;

            // 이미 방문했는지
            if (visited.has(`${ny},${nx}`)) continue;
            visited.add(`${ny},${nx}`);
            
            // 출구인지
            if (nx === 0 || nx === maze[0].length - 1 || ny === 0 || ny === maze.length - 1) return distance + 1;

            // queue에 처리
            queue.push([[ny, nx], distance + 1]);
        }
    }

    return -1;
};