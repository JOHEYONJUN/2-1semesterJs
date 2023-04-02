var addTwoNumbers = function(l1, l2) {
  
    let a = [];
    let b = [];

    a = l1.reverse().toString();
    // 배열 뒤집기
    l1.reverse();
    l2.reverse();

    // 문자열로 전환
    l1.toString();
    l2.toString();

    // a배열에 l1배열 문자열 요소를 순서대로 더해준다.
    for(let i = 0; i < l1.length; i++ ){
        a += l1[i];
    };

    // b배열에 l2배열 문자열 요소를 순서대로 더해준다.
    for(let j = 0; j < l2.length; j++ ){
        b += l2[j];
    };

    // a, b 문자열 배열을 숫자로 변경 -> c에 담는다
    let c = Number(a) + Number(b);

    // c를 문자열로 변경 유사배열객체에 담아준다.
    const str = String(c);

    // mapfn (배열의 모든 element를 숫자로 변경) 을 정의해준다.
    const mapfn = (arg) => Number(arg);

    // str을 배열로 전환 메서드 체이닝으로 미리정의해둔 mapfn을 이용해 새로운 배열을 반환 reverse로 한번 뒤집어준다.
    const newArr = str.split('').map(mapfn).reverse();

    return newArr;

};


let q = [9,9,9,9,9,9,9];
let p = [9,9,9,9];

let abc = addTwoNumbers(q, p);


console.log(abc);