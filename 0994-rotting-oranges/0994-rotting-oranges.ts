function orangesRotting(grid: number[][]): number {
    // 배열을 돌면서 2 위치를 찾는다.
    // 2 위치의 동서남북 위치에 1이 있다면 1을 2로 바꾼다.
    // 2로 바뀐 위치들을 큐에 넣고 다시 반복한다.
    const visited = new Set();
    const queue = [];
    let count = 0;
    let noFresh = true;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, count]);
            }
            if (grid[i][j] === 1) noFresh = false;
        }
    }

    if (noFresh) return 0;

    while (queue.length > 0) {
        let [y, x, index] = queue.shift();
        if (visited.has(`${y}, ${x}`)) continue;
        visited.add(`${y}, ${x}`);

        index += 1;

        if (y + 1 < grid.length && grid[y + 1][x] === 1 && !visited.has(`${y+1}, ${x}`)) {
            grid[y + 1][x] = 2;
            queue.push([y + 1, x, index])
            count = index;
        }
        if (y > 0 && grid[y - 1][x] === 1 && !visited.has(`${y-1}, ${x}`)) {
            grid[y - 1][x] = 2;
            queue.push([y - 1, x, index]);
            count = index;
        }
        if (x +  1 < grid[y].length && grid[y][x + 1] === 1 && !visited.has(`${y}, ${x + 1}`)) {
            grid[y][x + 1] = 2;
            queue.push([y, x + 1, index]);
            count = index;
        }
        if (x > 0 && grid[y][x - 1] === 1 && !visited.has(`${y}, ${x - 1}`)) {
            grid[y][x - 1] = 2;
            queue.push([y, x - 1, index]);
            count = index;
        }
    }

    // console.log(grid)

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                count = -1;
                break;
            }
        }
    }
    
    return count;
};