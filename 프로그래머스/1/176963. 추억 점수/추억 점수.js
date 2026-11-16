function solution(name, yearning, photo) {
    var answer = [];
    
    const nameYearingMap = new Map();
    
    for (let i = 0; i < name.length; i++) {
        nameYearingMap.set(name[i], yearning[i]);
    }
    
    for (let i = 0; i < photo.length; i++) {
        let sum = 0;
        for (let inner of photo[i]) {
            if (nameYearingMap.has(inner)) {
                sum += nameYearingMap.get(inner);
            }
        }
        answer[i] = sum;
    }
    
    return answer;
}