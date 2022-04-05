// 자바스크립트 배우기전 꼭 봐야할 영상 | 자바스크립트의 역사와 현재 그리고 미래 (JavaScript, ECMAScript, JQuery, Babel, Node.js)
// https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2
// 자바스크립트 11. 비동기 처리의 시작 콜백 이해하기, 콜백 지옥 체험
// https://www.youtube.com/watch?v=s1vpVCrT8f4

'use strict';

//JavaScript is synchronous.
// Execute the code block by orger after hoisting
// hoisting:var, function declaretion

console.log('1');
console.log('2');
console.log('3');


console.log('11');

setTimeout(function(){
    console.log('22');
}, 10000);

// setTimeout(() => console.log('222'), 10000);


console.log('13');

// Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));


// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 20000);

// Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                ( id === 'ellie' && password === 'dream') ||
                ( id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 20000);

    }
    getRoles(user, onSuccess, onError) {}


    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if ( user === 'ellie') {
                onSuccess({ name: 'cllie', role: 'admin'});
            } else{
                onError(new Error('no access'));
            }
        }, 10000)
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password,  
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(
                    'Hello ${userWithRole.name), you have a ${userWithRole.role} role'
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);