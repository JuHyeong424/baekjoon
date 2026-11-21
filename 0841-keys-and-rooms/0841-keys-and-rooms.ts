function canVisitAllRooms(rooms: number[][]): boolean {
    const visited = new Set();
    const stack = [0];

    while (stack.length > 0) {
        const vertex = stack.pop();

        if (!visited.has(vertex)) {
            visited.add(vertex);
        }

        const neighbors = rooms[vertex];
        for (let i = 0; i < neighbors.length; i++) {
            if (!visited.has(neighbors[i])) {
                stack.push(neighbors[i])
            }
        }
    }

    return visited.size === rooms.length
};