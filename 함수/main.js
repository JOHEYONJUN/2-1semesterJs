// let numOne = '';
// let operator = '';
// let numTwo = '';

// // 읽기전용 연산자 input요소
// const $operator = document.querySelector('#operator');
// // 읽기전용 결과표시 input요소
// const $result = document.querySelector('#result');

// // 숫자 클릭 이벤트 발동시 실행할 함수
// const onClickNumber = (e) => {
//     // operator변수가 비어있는가? (No)
//     if (operator) {
//         // numTwo에 값이 없을 때
//         if (!numTwo) {
//             // 결과input.value를 비운다.
//             $result.value = '';
//         }
//         // numTwo에 이벤트target.textContent를 대입 (target은 이벤트가 실제 발동한 요소)
//         numTwo += e.target.textContent;
//         $result.value += e.target.textContent;
//     }
//     // operator변수가 비어있는가? (Yes)
//     else {
//         numOne += e.target.textContent;
//     }
//     // result.value(결과 Input요소의 value)에 대입
//     $result.value += e.target.textContent;
// };


// document.querySelector("#num-0").addEventListener("click", onClickNumber);
// document.querySelector("#num-1").addEventListener("click", onClickNumber);
// document.querySelector("#num-2").addEventListener("click", onClickNumber);
// document.querySelector("#num-3").addEventListener("click", onClickNumber);
// document.querySelector("#num-4").addEventListener("click", onClickNumber);
// document.querySelector("#num-5").addEventListener("click", onClickNumber);
// document.querySelector("#num-6").addEventListener("click", onClickNumber);
// document.querySelector("#num-7").addEventListener("click", onClickNumber);
// document.querySelector("#num-8").addEventListener("click", onClickNumber);
// document.querySelector("#num-9").addEventListener("click", onClickNumber);

// // 연산자가 클릭되었을때 발동할 함수
// const onClickOperator = (op) => () => {
//     // numOne에 값이 있으면
//     if(numOne) {
//         // operator에 클릭된 연산자를 대입
//         operator = op;
//         // 연산자input.value에 클릭된 연산자를 대입
//         $operator.value = op;
//     }
//     // numOne에 값이 없으면
//     else {
//         alert('숫자를 먼저 입력하세요.')
//     }
// }

// document.querySelector('#plus').addEventListener('click', onClickOperator('+')); 
// document.querySelector('#minus').addEventListener('click', onClickOperator('-')); 
// document.querySelector('#divide').addEventListener('click', onClickOperator('*')); 
// document.querySelector('#multiply').addEventListener('click', onClickOperator('/')); 

// document.querySelector('#calculate').addEventListener('click', () => {}); 
// document.querySelector('#clear').addEventListener('click', () => {}); 

let numOne = '';
let operator = '';
let numTwo = '';

// 읽기전용 연산자 input요소
const $operator = document.querySelector('#operator');
// 읽기전용 결과표시 input요소
const $result = document.querySelector('#result');

// 숫자 클릭 이벤트 발동시 실행할 함수
const onClickNumber = (e) => {
    // 2. 순서도 상으로 operator가 비어있는것이 더 빠르기때문에
    // operator변수가 비어있는가? (Yes)
    if (!operator) {
        numOne += e.target.textContent;
        $result.value += e.target.textContent;
        // 절차를 마무리하면 return으로 함수 종료
        return;
    }
    // 3. operator가 존재하지 않을 경우에만 아래 코드가 실행 (else가 필요없어짐)
    
    // numTwo가 비어있는가? (Yes) // result input을 비워준다.
    if (!numTwo) {
        $result.value = '';
    }
    // operator에 값이 있고 numTwo가 비어있으면 값을 넣으면 ''으로 초기화되고 아래에서 값을 대입
    numTwo += e.target.textContent;
    // 화면에 표시
    $result.value += e.target.textContent;
};


document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

// 연산자가 클릭되었을때 발동할 함수
const onClickOperator = (op) => () => {
    // numOne에 값이 있으면
    if(numOne) {
        // operator에 클릭된 연산자를 대입
        operator = op;
        // 연산자input.value에 클릭된 연산자를 대입
        $operator.value = op;
    }
    // numOne에 값이 없으면
    else {
        alert('숫자를 먼저 입력하세요.')
    }
}

document.querySelector('#plus').addEventListener('click', onClickOperator('+')); 
document.querySelector('#minus').addEventListener('click', onClickOperator('-')); 
document.querySelector('#divide').addEventListener('click', onClickOperator('/')); 
document.querySelector('#multiply').addEventListener('click', onClickOperator('*')); 

document.querySelector('#calculate').addEventListener('click', () => {
    // // numTwo에 값이 있으면
    // if (numTwo) {
    //     // 선택된 연산자
    //     switch (operator) {
    //         case '+':
    //             // parseInt로 형변환한 numOne과 numTwo를 더해 결과value에 대입
    //             $result.value = parseInt(numOne) + parseInt(numTwo);
    //             break;
    //         case '-':
    //             $result.value = parseInt(numOne) - parseInt(numTwo);
    //             break;
    //         case '*':
    //             $result.value = parseInt(numOne) * parseInt(numTwo);
    //             break;
    //         case '/':
    //             $result.value = parseInt(numOne) / parseInt(numTwo);
    //             break;
    //         default:
    //             break;
    //     }
    // }
    // else {
    //     alert('숫자를 먼저 입력하세요.');
    // }

    // numTwo에 값이 있으면 
    if (numTwo) {
        $result.value = eval(numOne + operator + numTwo);
    }
    else {
        alert('숫자를 먼저 입력하세요.')
    }
}); 
document.querySelector('#clear').addEventListener('click', () => {
    
}); 

