const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');


const numbers = [];

// 
// const numbers = Array(9).fill().map((v, i) => i + 1);
for (let n = 1; n <= 9; n ++) {
    // numbers배열에 끝에서부터 (1~9) 추가
    numbers.push(n);
}

const answer = [];
// 3번 반복
for (let n = 0; n <= 3; n ++) {
    // 0 ~ 8의 랜덤 수
    // 아래에서 splice로 삭제하기때문에 배열의 길이가 항상 9가 아니다.
    // numbers배열의 length로로 설정해주어서 0~8, 0~7, 0~6...의 랜덤수를 뽑아낸다.
   const index = Math.floor(Math.random() * numbers.length);

   // answer배열끝에 numbers(1~9수)에서 index(numbers.length의 랜덤)번째 요소를 추가
   answer.push(numbers[index]);

   // numbers배열의 index(numbers.length의 랜덤)번째에 있는(방금 answer에 추가한) 요소를 1개 삭제
   numbers.splice(index, 1); 
}
console.log(answer);


const tries = [];
function checkInput(input) {
    
    if (input.length !== 4) {
        return alert(`4자리 숫자를 입력해 주세요.`)
    }

    // 만약 input의 길이가 4가 아니면
    // Set은 중복을 허용하지 않는 특수한 배열
    // new Set('1231')을 하면 Set 내부에는 '1,2,3'만 들어감
    if (new Set(input).size !== 4) {
        return alert(`중복되지 않게 입력해 주세요.`)
    }
    // 기존에 시도했던 값을 tires에 넣어두고 includes로 검사
    if (tries.includes(input)) {
        return alert('이미 시도한 값입니다.')
    }
    return true;
}

$form.addEventListener('submit', (event) => {
    // submit을 해도 form에 설정된 action으로 넘어가지 않게해주는 메서드
    event.preventDefault();
    // input에 들어있는 값을 가져온다.
    const value = $input.value;
    // submit을 하면 input을 초기화
    value.value = '';
    // input의 값을 검사하기위해 checkInput을 호출
    const valid = checkInput(value);

    // 만약 checkInput에서 조건을 충족하지못하면 콜백함수 종료
    if (!valid) return;

    // 정답배열을 문자열로 변환. input의 값과 같다면
    if (answer.join('') === value) {
        // longs의 text로 홈런!
        $logs.textContent = '홈런!';
        // 콜백함수 종료
        return;
    }

    // tires.length(시도횟수)가 9번이 넘어가면
    if (value == 1234) {
        //            message에 새로운 TextNode 생성 answer.join('') (정답을 문자열로 전환)
        const message = document.createTextNode(`패배! 정답은 ${answer.join('')}입니다!`)
        // $logs(div)의 최후미에 message(TextNode)를 추가
        $logs.appendChild(message);
        // 콜백 함수 종료
        return;
    }

    // n 스트라이크 n 볼인지 검사
    let strike = 0;
    let ball = 0;
    // 정답의 길이만큼 반복
    for (let i = 0; i < answer.length; i++) {
        // input에 들어온 값이
        const index = value.indexOf(answer[i]);
    }
})


