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
// button 쿼리 선택 -> 이벤트 추가 (click시) -> console.log('버튼 클릭') 출력
// document.querySelector('button').addEventListener('click', () => {
//     console.log('버튼 클릭');
// });
// ---

// // onClickButton 호출 시 console 출력
// const onClickButton = () => {
//     console.log('버튼 클릭');
// };
// // $button에 button 쿼리 선택
// const $button = document.querySelector('button');
// // $button에 이벤트 추가 -> 클릭 시 onClickButton 호출
// $button.addEventListener('click', onClickButton);


// // 익명함수의 매개변수(event)가 '이벤트 객체'를 의미 
// // target -> 이벤트를 발생시킨 객체를 반환
// // type -> 	이벤트의 이름을 반환
// const onInput = (event) => {
//     console.log('글자 입력', event.target.value);
// };
// // input 태그를 선택;
// const $input = document.querySelector('input');
// // input(글자 입력)시 onInput함수(입력 시 '글자 입력'과 event객체(입력 값)을 반환.
// $input.addEventListener('input', onInput);

// ---

// // 입력받은 값을 Number로 형 변환
// const number = Number(prompt('몇 명이 참가하나요?'));
// // button태그를 선택
// const $button = document.querySelector('button');
// // input태그를 선택
// const $input = document.querySelector('input');
// // 함수
// const onClickButton = () => {
      
// };
// // 함수
// const onInput = () => {

// };
// // 선택한 버튼 태그 클릭 시 -> onClickButton 호출
// $button.addEventListener('click', onClickButton);
// // 선택한 input 태그 입력 시 -> onInput 호출
// $input.addEventListener('input', onInput);

// ---

// 입력받은 값을 Number로 형 변환
const number = Number(prompt('몇 명이 참가하나요?'));
// button태그를 선택
const $button = document.querySelector('button');
// input태그를 선택
const $input = document.querySelector('input');
// id="word"인 태그를 선택
const $word = document.querySelector('#word');
// id="order"인 태그를 선택 (현재 순서)
const $order = document.querySelector(`#order`);
// 제시어
let word;
// 현재 단어
let newWord;


// 함수
const onClickButton = () => {
    // 제시어가 비어있는가?


      if(!word) {
        // 비어있다.
        word = newWord; // 입력한 단어를 제시한 단어로
        // 위에서 정의된 word를 화면에 제시어로 표시
        $word.textContent = word;
        // order변수에 참가자 문자열을 order에 Number로 저장
        const order = Number($order.textContent);

        // 현재 순서 + 1 > 참가자 수 -> number보다 크면 1번 순서로 돌아감
        if (order + 1 > number) {
          $order.textContent = 1;
        }
        // 현재순서 + 1을 해줘서 순서를 넘김
        else {

          $order.textContent = order + 1;
        }
      }

      


      // 비어 있지 않다.
      else {
        // 입력한 단어가 올바른가?
        if (word[word.length - 1] === newWord[0]) {
          // 올바르다
          word = newWord; // 현재 단어를 제시어에 저장
          $word.textContent = word; // 화면에 제시어 표시
          // order변수에 참가자 문자열을 order에 Number로 저장
          const order = Number($order.textContent);

          // 현재 순서 + 1 > 참가자 수 -> number보다 크면 1번 순서로 돌아감
          if (order + 1 > number) {
            $order.textContent = 1;
          }
          // 현재순서 + 1을 해줘서 순서를 넘김
          else {
            $order.textContent = order + 1;
          }
          alert('올바른 단어입니다.')
        }

        else {
          // 올바르지 않다.
          alert('올바르지않습니다.')
        }
      }
};


// 함수
const onInput = (event) => {
    // 입력하는 단어를 현재 단어로
    newWord = event.target.value;
};
// 선택한 버튼 태그 클릭 시 -> onClickButton 호출
$button.addEventListener('click', onClickButton);
// 선택한 input 태그 입력 시 -> onInput 호출
$input.addEventListener('input', onInput);