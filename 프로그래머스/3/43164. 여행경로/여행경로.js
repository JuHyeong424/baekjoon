function solution(tickets) {
    tickets.sort((a, b) => a[1].localeCompare(b[1]));
    const visited = Array(tickets.length).fill(false);
    const route = ["ICN"];
    
    function dfs(current, count) {
        if (count === tickets.length) return true;
        
        for (let i = 0; i < tickets.length; i++) {
            if (visited[i]) continue;
            if (current !== tickets[i][0]) continue;
            
            visited[i] = true;
            route.push(tickets[i][1]);
            
            if (dfs(tickets[i][1], count + 1)) {
                return true;
            }
            
            visited[i] = false;
            route.pop();
        }
        return false;
    }
    
    dfs(route[0], 0);
    
    return route;
}