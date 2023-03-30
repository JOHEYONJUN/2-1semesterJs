# DOM
 - html을 객체로 처리하기 위한 방법중 하나, tree형식으로 html의 계층 구조를 표현
 - js에서 dom사용
   - 1. html dom 객체의 선택
     - document.querySelector(선택자-selector)
     - document.querySelectorAll(선택자-selector)
     - document.getElementById('아이디명')
     - document.getElementsByTagName('태그명')
     - document.getElementsByClassName('CSS클래스명;)
     - 선택자: CSS선택자와 유사
       - #: 아이디명
       - .: 클래스명
       - 태그명
       - Parent(부모) > Child(자식)
       - P C  : 자손
       - C1 ~ C2 (형제)
   - 2. 조작/이벤트 추가

     - 태그엘리먼트.addEventListener('이벤트명',리스너함수)

     - 리스너함수
     - const 리스너함수 = (event) => {처리할 내용 코딩;}
       - event.target : 이벤트가 발생한 엘리먼트라는 의미
       - event.target.value : 이벤트가 발생한 엘리먼트가 가지고 있는 값
         - <input>, <textarea>, <select>(입력태그엘리먼트) 등에서만 사용가능
  
       - <input>, <textarea>, <select>(입력태그엘리먼트) 외의 태그들에서 값은?
         - 태그엘리먼트.textContent
         - 태그엘리먼트.innerText
         - 태그엘리먼트.innerHTML
     - const 리스너함수 = event => {처리할 내용 코딩;}
   - 3. 반영
     - 태그엘리먼트.appendChild(추가할 태그 엘리먼트)
   - 입력태그엘리먼트.focus();
     - 해당되는 입력창에 포커스를 부여
     - 반대로 입력태그엘리먼트.blur() : 포커스 해제
<br>

# BOM
 - 브라우저에서 사용할 수 있는 객체
 - window 객체
   - 생략가능
   - 
   - document 객체
   - navigation 객체
   - location 객체
   - history 객체
   - 
   - 메서드들
     - 사용자로부터 입력받기
     * alert('화면에 표시할 내용') -> 알려줌
       * 확인 버튼 : 반환값 -> undefined

     * prompt('화면에 표시할 내용') -> 입력받음
       * 확인/취소버튼
       * 반환값: 사용자 입력값 또는 null

     * confirm('화면에 표시할 내용') -> 확인받음
       * 확인/취소