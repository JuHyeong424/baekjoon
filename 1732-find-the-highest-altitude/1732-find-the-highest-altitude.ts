function largestAltitude(gain: number[]): number {
    let lat = 0; // -5 -4 1 1 
    let max = 0; // 0 0 1 1
    for (let value of gain) {
        lat += value;
        max = Math.max(max, lat);
    }
    return max;
};