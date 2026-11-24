function findCircleNum(isConnected: number[][]): number {
    const visited = new Set();
    const stack = [];
    let count = 0;

    for (let i = 0; i < isConnected.length; i++) {
        if (visited.has(i)) continue;

        count++;
        visited.add(i);
        stack.push(i);

        while (stack.length > 0) {
            const value = stack.pop();

            for (let j = 0; j < isConnected.length; j++) {
                if (isConnected[value][j] === 1 && !visited.has(j)) {
                    stack.push(j);
                    visited.add(j);
                }
            }
        }
    }
    return count;
};