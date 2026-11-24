function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const result = [];
    potions.sort((a, b) => a - b);

    for (let spell of spells) {
        let left = 0;
        let right = potions.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (potions[mid] * spell < success) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        result.push(potions.length - left);
    }

    // for (let spell of spells) {
    //     let left = 0;
    //     let count = 0;

    //     while (true) {
    //         if (left === potions.length) {
    //             result.push(0);
    //             break;
    //         }
    //         const sum = spell * potions[left];

    //         if (sum >= success) {
    //             for (let i = left; i < potions.length; i++) {
    //                 count += 1;
    //             }
    //             result.push(count);
    //             break;
    //         } else {
    //             left++;
    //         }
    //     }
    // }
    return result;
};