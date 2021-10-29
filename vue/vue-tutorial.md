** 프론트 엔드 개발자를 위한 Vue.js 입문서

cf)캡틴판교: https://joshua1988.github.io/web-development/vuejs/vuejs-tutorial-for-beginner/#mvvm-%ED%8C%A8%ED%84%B4%EC%9D%B4%EB%9E%80

 - MVVM 패턴


 - 부모와 자식 컴포넌트 관계

   -> 위에서 아래로는 데이터(props)를 내리고 / 아래에서 위로는 이벤트를 올린다.(event emit)

   -> 각각의 컴포넌트는 자체의 스코프를 가지고 있어 다른 컴포넌트의 값을 바로 참조할 수 없기에 "'상위' 컴포넌트에서 '하위' 컴포넌트로 내리는 데이 터 속성"을 프롭스(props)라고 한다.


 - Event Bus

   -> 상위-하위 관계가 아닌 컴포넌트 간의 통신을 위해 Event Bus를 활용

   ex) 

   eventBus.$emit("refresh", 10); // 이벤트를 발생시킬 컴포넌트에서 $emit() 호출

   eventBus.$on("refresh", (data) => {
	console.log(data); // 10
   }) // 이벤트를 받을 컴포넌트에서 $on() 이벤트 수신


 - Vue Routers

   -> 뷰 코어 라이브러리와 함께 공식 라이브러리로 지원.

   -> Vue 라우터는 기본적으로 '루트 URL'/#/'라우터 이름'의 구조로 되어 있다.

   -> 여기서 '#' 값을 제외하고 싶으면 mode 속성을 추가한다.

   ex) new VueRouter({
   	mode: 'history'	
       })


 - Nested Routers(**): (솔직히 뭐라 하는지 모르겠어서 다시한번 훑을 것..!)라우터로 화면을 이동할 때 네스티드 라우터를 이용하여 지정된 하위 컴포넌트를 표시할 수 있다. 이 때 컴포넌트의 구조는 가장 큰 상위의 컴포넌트가 하위의 컴포넌트를 포함하는 Parent - Child 형태와 같다.


 - Named Views(**): 특정 URL로 이동했을 때 여러 개의 컴포넌트를 동시에 표시할 수 있는 방법이다.


 - Nested Router VS Named Views

   * Nested Router: 특정 URL에 지정된 1개의 컴포넌트가 여러 개의 하위 컴포넌트를 갖는 것

   * Named View: 특정 URL에 여러 개의 컴포넌트를 영역 별로 지정하여 렌더링하는 것

   cf)참조: https://joshua1988.github.io/web-development/vuejs/vuejs-tutorial-for-beginner/#mvvm-%ED%8C%A8%ED%84%B4%EC%9D%B4%EB%9E%80


 - Axios

   -> Vue에서 가장 많이 사용하는 HTTP 통신 라이브러리

   -> Promise 기반으로 간결한 코드 작성에 용이


 - Vue Template

   -> 템플릿: 뷰로 화면을 조작하기 위해 제공되는 문법

   -> 뷰 인스턴스에서 관리하는 데이터를 화면에 연결하는 '데이터 바인딩'과 화면 조작을 편하게 할 수 있는 '디렉티브'로 나뉜다.


 - Directive 

   -> HTML 태그의 속성에 v- 접두사가 붙은 특별한 속성으로 화면의 DOM 조작을 쉽게할 수 있는 문법들을 제공한다.

 
 - Filters

   -> 화면에 표시되는 텍스트의 형식을 편하게 바꿀 수 있도록 고안된 기능
   
   -> |을 이용하여 여러개의 필터 적용 가능

   cf)참조: https://joshua1988.github.io/web-development/vuejs/vuejs-tutorial-for-beginner/#mvvm-%ED%8C%A8%ED%84%B4%EC%9D%B4%EB%9E%80


 - Vue Loader

   -> 싱글 파일 컴포넌트를 브라우저에서 실행할 수 있게 자바스크립트 파일로 변환해주는 웹팩 로더. 뷰 로더를 사용하면 아래의 장점이 있다.

     1. ES6 지원

     2. <style>과 <template>에 대한 각각의 웹팩 로더 지원 ex) sass, jade

     3. 각 .vue 컴포넌트의 스코프로 좁힌 css 스타일링 지원

     4. 웹팩의 모듈 번들링에 대한 지원과 의존성 관리가 제공됨.

     5. 개발 시 Hot Module Replacement(HMR) 지원

     cf) HMR이란: https://joshua1988.github.io/webpack-guide/devtools/hot-module-replacement.html

      - 브라우저를 새로 고치지 않아도 웹팩으로 빌드한 결과물이 웹 어플리케이션에 실시간으로 반영될 수 있게 도와주는 설정

      - 브라우저 새로 고침을 위한 LiveReload 대신에 사용할 수 있으며 웹팩 데브 서버와 함께 사용할 수도 있다.
