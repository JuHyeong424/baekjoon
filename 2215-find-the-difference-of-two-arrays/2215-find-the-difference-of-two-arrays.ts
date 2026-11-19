// 1에는 있지만 2에는 없는거, 2에는 있지만 1에는 없는거
function findDifference(nums1: number[], nums2: number[]): number[][] {
    const array1 =[];
    const array2 = [];

    for (let i = 0; i < nums1.length; i++) {
        let here = false;
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) here = true;
        }
        if (!here) array1.push(nums1[i])
    }

    for (let i = 0; i < nums2.length; i++) {
        let here = false;
        for (let j = 0; j < nums1.length; j++) {
            if (nums2[i] === nums1[j]) here = true;
        }
        if (!here) array2.push(nums2[i])
    }

    const set1 = new Set(array1);
    const set2 = new Set(array2);

    return [[...set1], [...set2]]
};