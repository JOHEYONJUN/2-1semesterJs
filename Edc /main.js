const form = document.querySelector("#form");
const input = document.querySelector("#input");
const button = document.querySelector("#button");


// 중복없는 랜덤값 4개를 만든다. (정답)

const answer = [];

while (answer.length < 4) {
    const value = Math.floor(Math.random() * 10);
    if (answer.includes(value)) {
        continue;
    }
    else {
        answer.push(value);
    }
};
// 시도한 숫자를 저장
const tries = [];


const checkInput = (inputValue) => {
    // 4자리가 아닐 경우
    if (inputValue.length !== 4) {
        return alert("4자리를 입력해주세요.");
    }
    // 중복된 숫자가 있을 경우
    // 중복이 없는 유사배열 Set에 inputValue를 담아 4가되지 못한다면 중복이 있다는 뜻
    if (new Set(inputValue).size !== 4) {
        return alert("중복된 숫자가있습니다.")
    }
    // 이미 입력했을 경우
    if (tries.includes(inputValue)) {
        return alert("이미 입력한 숫자입니다.")
    }
    return true;
}

// 정답을 비교하는 이벤트 생성 (submit)

form.addEventListener('submit', (e) => {
    // submit 리퀘스트를 보내지않음
    e.preventDefault();
    
    // input값에 대해 검사
    const inputValue = input.value;
    input.value = '';
    
    const bolChecked = checkInput(inputValue);
    
    if (!bolChecked) return;
    

    tries.push(inputValue);
})