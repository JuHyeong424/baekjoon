function exist(board: string[][], word: string): boolean {
    const visited = Array.from({ length: board.length }, () => Array(board[0].length).fill(0));
    
    function dfs(y, x, index) {
        if (index === word.length) return true;

        if (y < 0 || y >= board.length || x < 0 || x >= board[0].length || visited[y][x] === 1 || board[y][x] !== word[index]) return false;

        visited[y][x] = 1;

        const found = dfs(y - 1, x, index + 1) || dfs(y, x - 1, index + 1) || dfs(y + 1, x, index + 1) || dfs(y, x + 1, index + 1);

        if (!found) visited[y][x] = 0;

        return found;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
};