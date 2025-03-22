function solution(num_list) {
    let even_count = 0;
    let odd_count = 0;
    let result = [];
    for(let i=0;i<num_list.length;i++) {
        if(num_list[i] % 2 === 0) {
            even_count++;
        } else {
            odd_count++;
        }
    }
    result.push(even_count);
    result.push(odd_count);
    return result;
}