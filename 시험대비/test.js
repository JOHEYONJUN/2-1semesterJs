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


