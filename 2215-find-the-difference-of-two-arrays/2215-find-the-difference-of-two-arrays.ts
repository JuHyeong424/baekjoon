// 1에는 있지만 2에는 없는거, 2에는 있지만 1에는 없는거
function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const array1 = [...set1].filter((value) => !set2.has(value));
    const array2 = [...set2].filter((value) => !set1.has(value));

    return [array1, array2];
};