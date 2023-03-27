## 조건문
### if문
 - if(조건식) {
    문장1;
    [문장2;
    ...]
  }
  else if(조건식2) {
    ...
  }...
  else if(조건식3) {
    ...
  }...
  else {
    문장1;
    문장2;
  }

### if문~else문
### if문~else문 if~else문
### 중첩 조건문 : nested condition statement
 - 조건문 내부에 조건문이 존재하는 경우
 - if {
    ..
 - }
 - if {
    ..
 - }
 - 가능한 한 중첩 조건문은 사용하지 않는 것이 좋다 (보기 어려우니까)
### switch문
# 시험에 나올수도?!?
// 시험문제에 switch를 if-else로 바꾸라 할 수 있음
 - switch(수식) {
    case 값1: // 수식의 결과값 === 값1 true인 경우
      문장들1;
      break;
    case 값2:
      문장들2;
      break;
    case 값3:
      문장들3;
      break;
    default:
      문장들n;
      break;
    }
```js
let value = "D";
switch(value) {
    case "A":
    console.log("A다");
    break;
    case "B":
    console.log("B다");
    break;
    case "C":
    console.log("C다");
    break;
    case "D":
    console.log("D다");
    break;
    default :
    console.log("암것도아님.")
}
```
#### break문
 - 반복문에서도 사용
   - block: { ~ } 형태의 코드
 - 실행block을 중단하는 문장
 - 실행의 범위
   - break문이 속해 있는 block 하나만 중단
   - for(){
      for() {
        break;
      }
    }
#### continue문
 - 중단
 - continue문이 실행되면 조건문 검사를 실행함

### 3항 연산자
 - 조건식 ? 참인경우 실행 할 문장 / 식; 거짓인 경우 실행 할 문장 / 식