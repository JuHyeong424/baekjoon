/*
충돌하는 조건
앞이 양수, 뒤가 음수일 때
1. 절대값이 큰 쪽이 살아남음
2. 같으면 둘 다 죽음  
*/

function asteroidCollision(asteroids: number[]): number[] {
    const stack = [];
    
    for (let asteroid of asteroids) {
        let destroyed = false;

        if (stack.length === 0) {
            stack.push(asteroid);
            continue;
        }

        while (stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0) {
            const stackSize = Math.abs(stack[stack.length - 1]);
            const asteroidSize = Math.abs(asteroid);

            if (stackSize < asteroidSize) {
                stack.pop();
            } else if (stackSize === asteroidSize) {
                stack.pop();
                destroyed = true;
                break;
            } else {
                destroyed = true;
                break;
            }
        }

        if (!destroyed) stack.push(asteroid);
    }

    return stack;
};