function maxAreaOfIsland(grid: number[][]): number {
    const visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0));
    let max = 0;

    function dfs(y, x) {
        if (y < 0 || y >= grid.length || x < 0 || x >= grid[y].length || visited[y][x] === 1) return 0;

        let sum = 1;

        if (grid[y][x] === 0) {
            visited[y][x] = 1;
            return 0;
        }
        if (grid[y][x] === 1) {
            visited[y][x] = 1;
            sum += dfs(y - 1, x);
            sum += dfs(y + 1, x);
            sum += dfs(y, x - 1);
            sum += dfs(y, x + 1);
        }

        return sum;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1 && visited[i][j] === 0) {
                let count = dfs(i, j);
                max = Math.max(max, count);
            }
        }
    }

    return max;
};