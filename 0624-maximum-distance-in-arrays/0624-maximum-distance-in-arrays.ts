function maxDistance(arrays: number[][]): number {
    let max = -10000;
    let min = 10000;
    let head = 0;
    const array = [];

    while (head < arrays.length) {
        for (let i = 0; i < arrays[head].length; i++) {
            min = Math.min(min, arrays[head][i]);
            max = Math.max(max, arrays[head][i]);
        }
        array.push([min, max])
        max = -10000; 
        min = 10000;
        head++;
    }

    let result = 0;
    let currentMin = array[0][0];
    let currentMax = array[0][1];

    for (let i = 1; i < array.length; i++) {
        result = Math.max(
            result,
            currentMax - array[i][0],
            array[i][1] - currentMin
        );

        currentMin = Math.min(currentMin, array[i][0]);
        currentMax = Math.max(currentMax, array[i][1]);
    }

    return result;
};