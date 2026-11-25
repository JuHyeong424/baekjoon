function allPathsSourceTarget(graph: number[][]): number[][] {
    const result = [];
    const stack = [];

    function dfs(index) {
        stack.push(index);

        if (index === graph.length - 1) {
            result.push([...stack]);
            stack.pop();
            return;
        }

        for (let j = 0; j < graph[index].length; j++) {
            dfs(graph[index][j]);
        }

        stack.pop();
    }

    dfs(0);

    return result;
};