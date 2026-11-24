function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const answer = image[sr][sc];
    
    if (answer === color) return image;

    function dfs(y, x) {
            if (y < 0 || y >= image.length || x < 0 || x >= image[y].length || image[y][x] !== answer) {
                return;
            }

            if (image[y][x] === answer) {
                image[y][x] = color;
                dfs(y+1, x)
                dfs(y-1,x)
                dfs(y, x+1)
                dfs(y, x-1)
        }
    }

    dfs(sr, sc);

    return image;
};