function solution(cards1, cards2, goal) {
    var answer = '';
    
    let index = 0;
    let card1Index = 0;
    let card2Index = 0;
    while (index < goal.length) {
        if (cards1[card1Index] === goal[index]) {
            card1Index++;
            index++;
        } else if (cards2[card2Index] === goal[index]) {
            card2Index++;
            index++;
        } else {
            answer = 'No';
            break;
        }
        answer = 'Yes';
    }
    
    return answer;
}