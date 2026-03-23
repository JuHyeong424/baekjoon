function hasGroupsSizeX(deck: number[]): boolean {
    const newMap = new Map<number, number>();

    if (deck.length === 1) return false;

    for (const num of deck) {
        if (newMap.has(num)) {
            newMap.set(num, Number(newMap.get(num)) + 1);
        } else {
            newMap.set(num, 1);
        }
    }

    const newArray = [...newMap.values()];
    console.log(newArray)

    const evenArray = newArray.filter(value => value % 2 === 0);
    if (newArray.length === evenArray.length) return true;

    const min = Math.min(...newArray);
    if (min === 1) return false;

    const minArray = [];
    for (let i = 2; i <= min ; i++) {
        if (min % i === 0) minArray.push(i);
    }

    console.log(minArray);

    for (let i = 0 ; i < minArray.length; i++) {
        let isValid = true;
        for (let j = 0; j < newArray.length; j++) {
            if (newArray[j] % minArray[i] !== 0) {
                isValid = false;
                break;
            }
        }
        if (isValid) return true;
    }

    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < minArray.length; j++) {
            if (newArray[i] % minArray[j] !== 0) return false;
        }
        if (newArray[i] % min !== 0) return false;
    }

    return true;
};