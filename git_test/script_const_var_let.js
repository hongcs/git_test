/** var */
/** 선언한 변수 확인(미리 선언해야 함) -> 호이스팅 */
// console.log(a)  /** a 할당하기 전 */
var a = 1
console.log(a)
/* var은 전연변수와 지역변수 경계가 확실하지 않음 */ 

var a = 2
function foo () {
    var b = 1
}
console.log(a)

for ( var i = 1; i<5 ; i++){
    console.log(i)
}
/** 함수만 지역변수로 호이스팅이 됨 */

var a = 1
console.log(a)

var a = 2
console.log(a)

/* es6 2015년 js upgrade */
/* let */

/** var은 오류가 발생하지 않으나 let는 오류 발생 */
// let a = 1
// console.log(a)

// let a = 2
// console.log(a)

for ( let i = 1; i<5 ; i++){
    console.log(i)
}

console.log(i)