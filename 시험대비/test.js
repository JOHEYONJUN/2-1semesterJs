// const number = Number(prompt('몇 명이 참가하나요?'));
// const $input = document.querySelector('input');
// const $button = document.querySelector('button');
// const $word = document.querySelector('#word');
// const $order = document.querySelector('#order');
// let word; // 제시어
// let newWord; // 현재단어

// const onClickButton = () => {
//     // 제시어가 비어있거나 입력한 단어가 올바른가?
//     if (!word || word[word.length - 1] === newWord[0]) {
//         word = newWord; // 입력한 단어를 제시어로
//         $word.textContent = word; // 화면에 제시어 표시
//         // order에 참가자 넣음
//         const order = Number($order.textContent);
//         // 만약 전체참가자 보다 현재 참가자 + 1 이 더 높으면
//         if (order + 1 > number) {
//             // 1번 참가자로 돌아감
//             $order.textContent = 1;
//         }
//         else {
//             // 아니라면 참가자를 다음순서로 넘김 참가자 + 1
//             $order.textContent = order + 1;
//         }
//     }
//     // 비어있지 않으면
//     else {
//         alert('올바르지 않은 단어입니다!');
//     }
    
//     $input.value = '';
//     $input.focus();
    
// }

// const onInput = (e) => {
//     newWord = e.target.value;
// }

// $button.addEventListener('click', onClickButton);
// $input.addEventListener('input', onInput);


// 끝말잇기
// 몇명 참가할지 물어보기
const number = Number(prompt('몇명이서 하니?'));
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $button = document.querySelector('button');
const $order = document.querySelector('#order');

let word; // 제시어
let order = 1; // 순서(1번)
// 버튼 클릭
$button.addEventListener('click', () => {
    let inputValue = $input.value; // 클릭할때마다 input의 value를 저장
    // 입력한 단어를(정확할 시) 제시어로 변경하기
    if (!word || word[word.length - 1] === inputValue[0]) {
        word = inputValue;
        $word.textContent = word;
        // 참가자를 리셋시키기
        if (number > order) {
            order += 1;
            $order.textContent = order;
        }
        else {
            order = 1;
            $order.textContent = order;
        }
    }
    else {
        alert('정확하게 입력하세요.')
    }
    $input.value = '';
    $input.focus();
})

