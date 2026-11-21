function uniquePaths(m: number, n: number): number {
    const dp = Array.from({ length: m }, () => Array(n).fill(1));
    dp[0][0] = 1;

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            dp[i][j] = dp[i][j-1] + dp[i-1][j];
        }
    }
    const result = dp[m - 1][n - 1];

    return result;
};