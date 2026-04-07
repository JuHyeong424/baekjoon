/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let left = 1;
        let right = n;

        while (true) {
            const mid = Math.floor((left + right) / 2);

            if (isBadVersion(mid) && !isBadVersion(mid - 1)) return mid;
            if (!isBadVersion(mid) && isBadVersion(mid + 1)) return mid + 1;

            if (!isBadVersion(mid)) {
                left = mid + 1;
            } else if (isBadVersion(mid)) {
                right = mid - 1;
            };
        }
    };
};