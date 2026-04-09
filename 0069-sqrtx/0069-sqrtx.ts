function mySqrt(x: number): number {
    let left = 1;
    let right = x;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const pow = mid * mid;
        if (pow === x) {
            return mid;
        } else if (pow > x) {
            right = mid - 1;
        } else if (pow < x) {
            left = mid + 1;
        };
    }
    return right;
};