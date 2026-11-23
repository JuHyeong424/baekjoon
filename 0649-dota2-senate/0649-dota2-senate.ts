function predictPartyVictory(senate: string): string {
    const array = senate.split('');
    const radiant = [];
    const dire = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "R") {
            radiant.push(i);
        } else {
            dire.push(i);
        }
    }

    while (radiant.length > 0 && dire.length > 0) {
        const rIndex = radiant.shift();
        const dIndex = dire.shift();

        if (rIndex < dIndex) {
            radiant.push(rIndex + senate.length);
        } else {
            dire.push(dIndex + senate.length);
        }
    }
    
    return radiant.length > 0 ? 'Radiant' : 'Dire';
};