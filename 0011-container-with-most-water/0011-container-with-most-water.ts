function maxArea(height: number[]): number {
    let start = 0;
    let end = height.length - 1;
    let max = 0;
    
    while (start < end) {
        const startHeight = height[start];
        const endHeight = height[end];
        const h = Math.min(startHeight, endHeight);
        const w = end - start;
        const rect = w * h;
        max = Math.max(max, rect);
        
        if (startHeight < endHeight) {
            start++;
        } else {
            end--;
        }
    }

    return max;
};