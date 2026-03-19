function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const set = new Set<number>();

    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        // 윈도우 크기 유지
        if (right - left > k) {
            set.delete(nums[left]);
            left++;
        }

        // 중복 체크
        if (set.has(nums[right])) {
            return true;
        }

        set.add(nums[right]);
    }

    return false;
}