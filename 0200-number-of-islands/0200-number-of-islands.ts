function numIslands(grid: string[][]): number {
    const visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0));
    
    let count = 0;

    function dfs(y, x) {
        if (y < 0 || y >= grid.length || x < 0 || x >= grid[y].length || visited[y][x] === 1) return;

        if (grid[y][x] === '0') {
            visited[y][x] = 1;
        }

        if (grid[y][x] === '1') {
            visited[y][x] = 1;
            dfs(y-1, x);
            dfs(y+1, x);
            dfs(y, x-1);
            dfs(y, x+1);
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1' && visited[i][j] === 0) {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
};