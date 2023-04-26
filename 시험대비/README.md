## 스프레드구문
- 배열의 [] 대괄호가 없어진다 생각하면 편함


```js
const a = [1, 2, 3, 4, 5];
console.log('sasa', 'sa sa', 'sasa', 'sa');
console.log(a); // [1, 2, 3, 4, 5]
console.log(...a); // 1, 2, 3, 4, 5
```
- 문자열을 분리할때도 사용

```js
console.log('감자튀김먹고싶다') // 감자튀김먹고싶다
console.log(...'감자튀김먹고싶다') // 감 자 튀 김 먹 고 싶 다
```