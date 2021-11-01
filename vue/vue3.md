** Vue3

cf) 
참조1: https://joshua1988.github.io/web-development/vuejs/vue3-coming/#vue-3-%ED%9B%91%EC%96%B4%EB%B3%B4%EA%B8%B0---%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95-%ED%8E%B8

참조2: https://v3.ko.vuejs.org/



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

