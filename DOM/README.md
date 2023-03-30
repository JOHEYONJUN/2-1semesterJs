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