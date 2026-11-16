function solution(name, yearning, photo) {
    var answer = [];
    
    const nameYearingMap = new Map();
    
    for (let i = 0; i < name.length; i++) {
        nameYearingMap.set(name[i], yearning[i]);
    }
    
    for (let i = 0; i < photo.length; i++) {
        let sum = 0;
        photo[i].forEach((value) => {
            const yearing  = nameYearingMap.get(value);
            if (yearing) {
                sum += yearing;
            }
        })
        answer[i] = sum;
    }
    
    return answer;
}