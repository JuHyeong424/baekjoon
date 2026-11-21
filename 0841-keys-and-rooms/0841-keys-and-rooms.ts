function canVisitAllRooms(rooms: number[][]): boolean {
    const visited = new Set();
    const stack = [0];
    const result = [];

    while (stack.length > 0) {
        const vertex = stack.pop();

        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);
        }

        const neighbors = rooms[vertex];
        for (let i = 0; i < neighbors.length; i++) {
            if (!visited.has(neighbors[i])) {
                stack.push(neighbors[i])
            }
        }
    }

    result.sort((a, b) => a - b);
    console.log(result);
    if (result.length !== rooms.length) return false;
    for (let i = 0; i < result.length; i++) {
        if (result[i] !== i) return false;
    }
    return true;
};