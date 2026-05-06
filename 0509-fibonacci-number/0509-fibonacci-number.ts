function fib(n: number): number {
    const f = [];
    f[0] = 0;
    f[1] = 1;

    if (n > 1) {
        let count = 2;
        while(count <= n) {
            f[count] = f[count-1] + f[count-2];
            count++;
        }
    }

    return f[n];
};