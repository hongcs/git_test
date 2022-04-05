// 코딩의 시작과 끝, 디버깅 | 실력있는 개발자의 필수 무기
// https://www.youtube.com/watch?v=IwC-BVM2_YQ

function sum(num) {
    let total = 0;
    for ( let i = 0; i < num; i++){
        total  += i;
        printTotal(total);
    }
    return total;
}

function printTotal(num) {
    console.log("예상하지 못함")
}

const result = sum(2);
console.log(result);