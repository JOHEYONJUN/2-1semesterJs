let numOne = '';
let operator = '';
let numTwo = '';

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

// onClickNumber라는 함수를 정의
const onClickNumber = (number) => () => {
    if (operator) {
        numTwo += number;
    }
    else {
        numOne += number;
    }
    $result.value += number;
};


document.querySelector("#num-0").addEventListener("click", onClickNumber(0));
document.querySelector("#num-1").addEventListener("click", onClickNumber(1));
document.querySelector("#num-2").addEventListener("click", onClickNumber(2));
document.querySelector("#num-3").addEventListener("click", onClickNumber(3));
document.querySelector("#num-4").addEventListener("click", onClickNumber(4));
document.querySelector("#num-5").addEventListener("click", onClickNumber(5));
document.querySelector("#num-6").addEventListener("click", onClickNumber(6));
document.querySelector("#num-7").addEventListener("click", onClickNumber(7));
document.querySelector("#num-8").addEventListener("click", onClickNumber(8));
document.querySelector("#num-9").addEventListener("click", onClickNumber(9));


// document.querySelector('#num-0').addEventListener('click', () => {
//     // operator의 값이 있으면
//     if (operator) {
//         numTwo += '0';
//     }
//     // 최초엔 operator가 false
//     else {
//         numOne += '0';
//     }
//     $result.value += '0';
// }); 
// document.querySelector('#num-1').addEventListener('click', () => {
//     if (operator) {
//         numTwo += '1';
//     }
//     else {
//         numOne += '1';
//     }
//     $result.value += '1';
// }); 
// document.querySelector('#num-2').addEventListener('click', () => {
//     if (operator) {
//         numTwo += '2';
//     }
//     else {
//         numOne += '2';
//     }
//     $result.value += '2';
// }); 
// document.querySelector('#num-3').addEventListener('click', () => {
//     if (operator) {
//         numTwo += '3';
//     }
//     else {
//         numOne += '3';
//     }
//     $result.value += '3';
// }); 
// document.querySelector('#num-4').addEventListener('click', () => {
//     if (operator) {
//         numTwo += '4';
//     }
//     else {
//         numOne += '4';
//     }
//     $result.value += '4';
// }); 
// document.querySelector('#num-5').addEventListener('click', () => {
//     if (operator) {
//         numTwo += '5';
//     }
//     else {
//         numOne += '5';
//     }
//     $result.value += '5';
// }); 
// document.querySelector('#num-6').addEventListener('click', () => {
//     if (operator) {
//         numTwo += '6';
//     }
//     else {
//         numOne += '6';
//     }
//     $result.value += '6';
// }); 
// document.querySelector('#num-7').addEventListener('click', () => {
//     if (operator) {
//         numTwo += '7';
//     }
//     else {
//         numOne += '7';
//     }
//     $result.value += '7';
// }); 
// document.querySelector('#num-8').addEventListener('click', () => {
//     if (operator) {
//         numTwo += '8';
//     }
//     else {
//         numOne += '8';
//     }
//     $result.value += '8';
// }); 
// document.querySelector('#num-9').addEventListener('click', () => {
//     if (operator) {
//         numTwo += '9';
//     }
//     else {
//         numOne += '9';
//     }
//     $result.value += '9';
// }); 
document.querySelector('#plus').addEventListener('click', () => {}); 
document.querySelector('#minus').addEventListener('click', () => {}); 
document.querySelector('#divide').addEventListener('click', () => {}); 
document.querySelector('#multiply').addEventListener('click', () => {}); 
document.querySelector('#calculate').addEventListener('click', () => {}); 
document.querySelector('#clear').addEventListener('click', () => {}); 

