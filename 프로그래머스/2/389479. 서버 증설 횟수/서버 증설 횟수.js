/*
사람이 m명 늘때마다 서버 1대 추가 필요
m명 미만이면 서버 증설 불필요
nxm 이상 (n+1)xm 명 미만이면 최소 n대의 서버 운영 중
서버는 k시간 동안 운영. 5일때 10시에 증설한 서버는 10~15시에만 운영
하루 동안 모든 게임 이용자가 게임을 하기 위해 서버를 최소 몇 번 증설해야 하는지
*/

function solution(players, m, k) {    
    let counter = 0;
    let timer = [];
    for (let i = 0; i < players.length; i++) {
        timer = timer.filter((num) => num !== i)
        
        if (players[i] >= m) {
            const add = Math.floor(players[i]/m);
            if (timer.length >= add) continue;
            const need = add - timer.length 
            counter += need;
            for (let j = 0; j < need; j++) {
                timer.push(i + k);
            }
        }
    }
        
    return counter;
}