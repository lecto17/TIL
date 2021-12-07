**vue project 하며 겪는 실수들을 올립니다.**

 - line을 읽을 수 없다는 문제

   - slot 태그에 closing 태그(/) 안 넣어 발생한 문제
   <br/>

 - 함수의 return 값으로 값이 아닌 fucntion native code가 return 되는 문제

   - toUppercase()에 괄호를 안 붙여줘서 발생한 문제
   <br/>

 - 컴포넌트를 rendering 하지 못하는 문제

   1. vue에서는 Camel Casing 된 컴포넌트 명을 자동으로 kebab case로 바꿔주는 것을 몰랐서 발생한 문제

   ex) MBWorkFrame 이란 컴포넌트는 template 영역에서 m-b-work-frame으로 변환된다.

   2. 컴포넌트에서 무한 import를 발생하는 경우

     - modal 컴포넌트에서 Overlay 컴포넌트를 import 했는데, Overlay 컴포넌트에서 다시 Modal 컴포넌트를 import 하고 있는 상황으로 발생한 문제. Overlay 컴포넌트에서 modal 컴포넌트 import  하는 부분 삭제 후 정상 작동하였다.
   <br/>

 - vue 파일명 변경했을 때 import 관련 발생하는 문제

   cf) 참고- https://soobindeveloper8.tistory.com/356

   1. jsconfig.json 파일에 "forceConsistentCasingInFileNames" : false 옵션 추가

   2. VS code Off 했다가 on
  <br/>

 - 최초 컴포넌트 로드할 때 페이지 버튼이 출력되지 않다가, 다음 페이지 버튼 클릭할 경우, 숫자로 된 페이지가 출력되는 문제.. 
 
   - computed 속성으로 페이지를 만들도록 되었는데, 이 때 computed 함수 내에서 사용되는 데이터를 pager-control 컴포넌트에서 pageCount 라는 props를 total로(:total="pageCount") 내려 페이지를 표시하도록 만들었다. 그런데 이 pageCount는 list 값(list 내 데이터 갯수가 변화될 때, pageCount 값도 재계산 된다)이 변동됨에 따라, 재계산되는 변수였는데, 이 값의 변화를 pager-control 컴포넌트에서 인식을 못하는 상황이였다. 이 문제는 pager-control 컴포넌트에서 props로 전달받는 total 변수를 watch값으로 설정하여 해당 변수의 값 변경을 캐치해서 page 계산을 하는 resetList()를 호출했어야 하는데, 해당 watch()에서 resetList 함수 이름만 써놓아서 발생한 문제(resetList()가 아닌, resetList..).
