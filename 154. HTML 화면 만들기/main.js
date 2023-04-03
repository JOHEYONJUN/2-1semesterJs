// const number = prompt('몇 명이 참가하나요?');

// alert(number);


// const yesOrNo = confirm('확인이나 취소를 눌러보세요')

// console.log(yesOrNo);

// const number = prompt('몇 명이 참가하시나요?')

// console.log(typeof number);


// const number = prompt('몇 명이 참가하시나요');
// String -> Number 형 변환
// const realNumber = Number(number);
// console.log(typeof realNumber);

// 미리 형 변환
// const number = Number(prompt('몇 명이 참가하나요?'));

// console.log(typeof number);


// document.querySelector('선택자');


// 쿼리셀렉터
// const $input = document.querySelector('input');
// console.log($input);

// const $button = document.querySelector('button');
// console.log($button);

// 모든 button 쿼리 선택 (배열)
// const $$buttons = document.querySelectorAll('button');
// console.log($$buttons);

// 이 상태에서 button선택시 하나만 선택됨
// const $button = document.querySelector('button');
// console.log($button);

// id 쿼리 선택
// const $order = document.querySelector('#order');
// console.log($order);


// class 쿼리 선택
// const $buttons = document.querySelectorAll('.Hello');
// console.log($buttons);

// ---

// 태그에 이벤트 달기

// 화살표함수 정의 (호출 시 console에 '버튼 클릭' 출력)
// const onClickButton = () => {
//     console.log('버튼 클릭');
// };

// html의 button을 선택
// const $button = document.querySelector('button');

// button에 이벤트 추가 ('click'시, onClickButton호출)
// $button.addEventListener('click', onClickButton);

// ---
// 위 코드와 같음
document.querySelector('button').addEventListener('click', () => {
    console.log('버튼 클릭');
});
// ---

