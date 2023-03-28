
let currentWord = "사과";
let timeLeft = 10;
let timerId = null;

function startTimer() {
document.getElementById("timer").textContent = timeLeft;
timerId = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
    clearInterval(timerId);
    document.getElementById("result").textContent =
        "제한 시간이 초과되었습니다. 재도전 버튼을 눌러주세요!";
    document.getElementById("retry-button").style.display = "block";
    } else {
    document.getElementById("timer").textContent = timeLeft;
    }
}, 1000);
}

function checkKorean(str) {
const koreanRegex = /^[가-힣]+$/;
return koreanRegex.test(str);
}

function checkWrongInput(str) {
const jamoRegex = /[ㄱ-ㅎㅏ-ㅣ]/;
return jamoRegex.test(str);
}

function checkAnswer() {
const userInput = document.getElementById("user-input").value;
if (!checkKorean(userInput)) {
    alert("한글만 입력해주세요.");
    return;
}
if (checkWrongInput(userInput)) {
    alert("자음, 모음만 입력하셨습니다.");
    return;
}
if (currentWord.slice(-1) !== userInput.charAt(0)) {
    document.getElementById("result").textContent =
    "오답입니다. 다시 시도해주세요.";
    return;
}
currentWord = userInput;

document.getElementById("start-word").textContent = currentWord;
document.getElementById("user-input").value = "";
document.getElementById("result").textContent = "";
}

function retryGame() {
location.reload();
}

startTimer();

