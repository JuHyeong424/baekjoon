function divisorSubstrings(num: number, k: number): number {
    const stringNum = String(num);
    let count = 0;

    for (let i = 0; i < stringNum.length; i++) {
        let sub = "";
        for (let j = 0; j < k; j++) {
            sub += stringNum[i + j];
        }
        if (num % Number(sub) === 0) count++;
    }

    return count;
};