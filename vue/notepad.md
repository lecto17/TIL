**vue project 하며 겪는 실수들을 올립니다.**

 - onMounted 내에서 async 함수를 사용해서 element를 못가져와 생긴 일

   onMounted() 내에서 popup 리스트를 가져오는 함수를 async-await를 이용해 가져오게 됬다. 정확하게는 popup 리스트 가져오는 함수 내에서 store index.js의 actions 내에 있는 함수를 await store.dispatch("팝업 리스트 가져오는 함수명") 사용하였고 이후그 함수(popup 리스트를 가져오는 함수) 내부에서 html 돔을 가져와 쿠키에 설정된 정보를 바탕으로 popup을 띄우지 않도록 작업하였다. 그런데 html 돔을 가져오지 못하는 현상이 있었는데, 이유는 async 함수 내에서 돔을 조작하였기 때문이다. 따라서 async 함수 내에서 dom을 접근하는 것이 아니라, async-await 함수 내에서 로직 처리가 끝난 후 .then으로 dom을 접근할 수 있다.

 - Extraneous non-props attributes were passed to component but could not be automatically inherited 라는 warning 상황

   해당 warning은 vue 파일에 단일 루트 엘리먼트가 아닌 multi root element로 구성되어 있어 발생하였다.

   ```
     <template>
       <div></div>
       <div></div>
     </template>

     와 같이 template 밑에 복수 개의 root element가 존재하기에 발생한다.

     그런데 vue3에서 부터는 multi root element를 지원한다고 했는데, 왜 이런 warning이 발생하는지는 찾아봐야 겠다.
   ```

 - vuex
   
   분명히 회사에서는 vuex의 useStore()를 활용하여 store를 불러와 사용했는데, 내가 진행했던 프로젝트에서는 useStore()를 불러오지 못하는 상황..

   vuex 라이브러리를 설치하고 동일한 환경 세팅을 했는데, 작동이 되지 않아, vuex의 버전을 확인해보았다. 'npm i vuex'로 설치한 경우 version이 3.x 가 설치되었지만, 회사에서는 4.X를 사용하고 있었다.

   npm uninstall vuex로 삭제 후 npm i vuex@4.0.0으로 특정 버젼을 설치한 결과, 정상 작동하였다.

   - pinia: vuex 대용으로 사용되고 있는 vue 상태관리 라이브러리(참조: https://www.youtube.com/watch?v=LfWpPRId5N0)

     - pinia(피냐)의 경우, multiple data store가 존재하는 반면, vuex에서는 하나의 store만 존재. vuex submodule들이 존재하였지만, 이것들은 하나의 store를 사용하였지만, 피냐의 경우에는 각각의 submodule들이 store를 가질 수 있다고 한다. 따라서 컴포넌트 별로 필요한 store를 세분화해서 가져오는 code spliting이 가능하며, typescript 적용에 더 용이하다고 한다.

     - vuex에서는 state / mutations / actions / getters 이렇게 총 4개가 존재한 반면, pinia에서는 mutations를 제외한 3개만 존재한다고 한다. 


 - vue 개발자 도구에서 vue 탭이 활성화 되지 않는 문제

   - chrome에서 제공하는 vue-extension을 설치했지만, 개발자 도구에서 vue 탭이 활성화 되지 않았다.. (vue 탭으로 컴포넌트 관계를 명확하게 파악해서, 어디에서 문제가 있는지 확인하고 싶었는데..) 그래서 그 이유를 검색하다 보니, vue 프로젝트를 생성할 때, vue3 이상으로 생성하면 vue 탭이 활성화되지 않는다고 한다.

   심지어 지금 프로젝트는 vite로 생성한 것이기에 vue탭이 존재하지 않는 것 같다.


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

 - 객체 내 속성에 반응성 주입

   - 객체 내 속성에 반응성을 주입하여, 해당 속성의 값이 변경될 때를 이용하여 로직을 만드는 코드를 접하였다.
   
   - 그런데 정작 객체 내 속성에 반응성이 주입되지 않는 문제로 null 오류가 발생하였다.
   
   - 이 문제를 해결하기 위해 객체 내 속성을 반응성을 갖도록 생성해줘야 했다.
   
   - 참고 사이트는 아래와 같고, 간단하게 예시를 들어 다음에 볼 때 잊지 않도록 해야겠다.
   
   - 예시) useHome.js에서 정의된 userInfo 객체를 Home 컴포넌트에서 사용하며, userInfo 객체 내에 userId 속성의 변화에 따른 작동을 하려고 하는 경우
   
   ![image](https://user-images.githubusercontent.com/53415000/145215484-268f4b36-8bb9-4363-9d52-07281d6a3a2c.png)
   
     -> 객체에 reactive를 감싸주고, 사용할 객체 내 속성을 toRefs로 꺼내 반응성을 주입한다.

   
   - 참고 사이트 
   
   - 1. https://v3.ko.vuejs.org/guide/reactivity-fundamentals.html#%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%92%E1%85%A7%E1%86%BC-%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2-%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9-%E1%84%87%E1%85%AE%E1%86%AB%E1%84%92%E1%85%A2%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5-destructuring
   
   - 2. https://stackoverflow.com/questions/66504701/how-to-make-a-vue-3-object-property-reactive
