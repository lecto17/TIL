** Vue3

cf) 
참조1: https://joshua1988.github.io/web-development/vuejs/vue3-coming/#vue-3-%ED%9B%91%EC%96%B4%EB%B3%B4%EA%B8%B0---%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95-%ED%8E%B8

참조2: https://v3.ko.vuejs.org/


* Vue 3에서 짚어야할 문법들

1. 디렉티브 문법의 인자
 
   * vue3 에서 동적 인자(Dynamic Arguments) 개념 추가
   
   * 디렉티브의 대상(arguments)이 뷰 인스턴스 데이터와 연결 가능하도록 지원
     
     ex) `<a v-on:[eventName]="doSomething">...</a>` ('[ ]' 괄호 주의)
    
     여기에서 eventName에 해당하는 값이 "focus" 일 경우 위 문장은 다음과 동일하다
   
      => `<a v-on:focus="doSomething">...</a>`
  
 <br/>
 
2. 축약 문법
 
   * 디렉티브에 동적 인자를 사용할 수 있음에 따라 지원하는 축약 문법
  
     ex) 
     
      - `<a v-bind:href="imgUrl"/> => <a :href="imgUrl"/>`
      
      - `<a v-on:click="logText"/> => <a @click="logText"/>`
      
      - `<a v-bind:[myAttribute]="imgUrl"/> => <a :[myAttribute]="imgUrl"/>`
   
   <br/>
   
3. 멀티 이벤트 핸들러
  
   * 템플릿 표현식에서 특정 DOM의 이벤트를 여러 메서드로 처리 가능
  
     ex) 
     
      - `<button @click="logText($event), sayHi($event)">log</button>`
   
   <br/>
  
4. 키보드 이벤트 제어 문법 추가

<br/>

5. 컴포넌트 통신 방법 - 이벤트 에밋 인자 전달

   * 이벤트를 중개하는 메서드 작성 필요 없이 템플릿 표현식에서 이벤트를 인자와 함께 상위 컴포넌트에 전달 가능

<br/>

6. 프롭스 속성

7. 템플릿 표현식에서의 프롭스 속성 정의 축약 문법

8. 이벤트 에밋 문법

9. inheritAttrs 옵션 속성

   * 여러 FE 개발자와 협업하는 상황에서 용이한 옵션 추가
   
   * 협업 시 공통 컴포넌트를 만들어 놓고 공용으로 사용하는 경우, 위 옵션을 활용하여 공통 컴포넌트가 잘못된 방향으로 사용되는 것을 방지 가능

      ![image](https://user-images.githubusercontent.com/53415000/139872153-6938cfaa-74b7-461b-81dc-adfe0263dd6c.png)


10. v-model 문법

11. 컴포넌트 태그에서 v-model 여러 개 사용

![image](https://user-images.githubusercontent.com/53415000/139870163-a3dc3650-cfb5-4f82-b360-144a98d19da3.png)

cf)사진 참조: https://joshua1988.github.io/web-development/vuejs/vue3-coming/#vue-3-%ED%9B%91%EC%96%B4%EB%B3%B4%EA%B8%B0---%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95-%ED%8E%B8

<br/>

* 공식 문서에서 꼭 살펴볼 내용

 1. Computed Caching VS Methods


 2. Watch


 3. 클래스 바인딩


 4. 스타일 바인딩


 5. v-if와 v-show 차이점


 6. 목록 필터링 &  오더링 팁


 7. v-on 디렉티브의 이벤트 제어자(event modifiers)에 대한 예시와 설명


 8. 템플릿 표현식에 이벤트 제어자를 적용했을 때의 장점 설명


 9. 컴포넌트 등록 방식의 비교


 10. 슬롯의 렌더링 유효 범위


 11. 믹스인


 12. 뷰 템플릿 익스플로러


 13. 뷰 반응성(Reactivity) 설명

   -> 참조: https://v3.ko.vuejs.org/guide/reactivity.html#%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC-reactivity-%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A1%E1%86%AB

   -> 반응성이란 "변경"에 대한 제어를 선언적으로 수행하는 프로그래밍 패러다임
   
   (나에겐 한번에 이해를 못하는 어려운 말.. 아래 예시 참조)
   
   ![image](https://user-images.githubusercontent.com/53415000/139686559-efb64238-ec6d-4e17-affe-7ec227b3640e.png)


   -> 자바스크립트에서 이러한 반응을 하게 하려면 아래와 같이 해야한다.
     
     - 값 중 하나라도 변경되는지 여부를 감지

     - 값을 변경하는 함수가 호출되는지 추적

     - 함수를 호출하여 변경을 발생시켜 최종 값을 갱신


   -> Vue가 이러한 변경 사항을 추적하는 방법

