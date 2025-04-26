function solution(absolutes, signs) {
    return absolutes.reduce((acc, abs, i)=>acc+(abs*(signs[i] ? 1 : -1)), 0)
}