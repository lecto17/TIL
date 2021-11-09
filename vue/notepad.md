* vue project 하며 겪는 실수들을 올립니다.

 - line을 읽을 수 없다는 문제

   - slot 태그에 closing 태그(/) 안 넣어 발생한 문제

 - 함수의 return 값으로 값이 아닌 fucntion native code가 return 되는 문제

   - toUppercase()에 괄호를 안 붙여줘서 발생한 문제

 - 컴포넌트를 rendering 하지 못하는 문제

   1. vue에서는 Camel Casing 된 컴포넌트 명을 자동으로 kebab case로 바꿔주는 것을 몰랐서 발생한 문제

   ex) MBWorkFrame 이란 컴포넌트는 template 영역에서 m-b-work-frame으로 변환된다.

   2. 컴포넌트에서 무한 import를 발생하는 경우

     - modal 컴포넌트에서 Overlay 컴포넌트를 import 했는데, Overlay 컴포넌트에서 다시 Modal 컴포넌트를 import 하고 있는 상황으로 발생한 문제. Overlay 컴포넌트에서 modal 컴포넌트 import  하는 부분 삭제 후 정상 작동하였다.

 - vue 파일명 변경했을 때 import 관련 발생하는 문제

   cf) 참고- https://soobindeveloper8.tistory.com/356

   1. jsconfig.json 파일에 "forceConsistentCasingInFileNames" : false 옵션 추가

   2. VS code Off 했다가 on
