function solution(participant, completion) {
    let map = new Map();
    
    for(let name of participant) {
        map.set(name, (map.get(name) || 0) + 1);
    };
    
    for(let name of completion) {
        map.set(name, map.get(name) - 1);
    }
    
    for([name, key] of map) {
        if(key > 0) return name;
    }
}