class RecentCounter {
    private queue: number[];

    constructor() {
        this.queue = [];
    }

    ping(t: number): number {
        // 1. 새로운 요청 추가
        this.queue.push(t);

        // 2. 3000ms 범위를 벗어난 요청 제거
        while (this.queue[0] < t - 3000) {
            this.queue.shift();
        }

        // 3. 현재 큐의 크기 반환
        return this.queue.length;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */