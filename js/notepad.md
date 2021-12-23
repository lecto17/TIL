* js 기초

  * for문 없이 배열 생성하기

    - 5개 짝수 배열 만들기

      1. Array(5).fill(0).map((el, idx) => i+2);

      2. Array.from({ length: 5}, (v, i) => i); // v는 각 원소(undefined), i는 인덱스
      
      이하 부터는 stackoverflow 지식인들이 배열 만드는 방법...

      1. Array.from(Array(5).keys()) // [0, 1, 2, 3, 4]

      2. [...Array(5).keys()] // [0, 1, 2, 3, 4]

      3. let N = 5; Array.apply(null, {length: N}).map(Number.call, Number)

      4. (N개의 무작위 배열 만드는 방법) let N = 5; Array.apply(null, {length: N}).map(Function.call, Math.random); // [0.7082694901619107, 0.9572225909214467, 0.8586748542729765, 0.8653848143294454, 0.008339877473190427]

   <br/>
   2번까지는 이해가 됬는데, 3번 부터는 설명을 적어놓아야 할 것 같다..(그리고 for문 안써서 배열 만드는게 뭔가 멋져 보이고 효율적이라는 생각을 했는데,, 아래 설명을 적으면서 괜히 복잡하게 배열을 만드는 건 아닌지, 그래서 더 효율이 떨어지는 건 아닌지 고민하게 됬다.. 까불지 말고 그냥 for문으로 배열 만드는 것도 괜찮을 것 같다)

   Number.call(undefined, N)은 Number(N)과 동일하다고 한다. Number(N)은 N을return 해준다.

   그리고 Array.apply(null, [undefined, undefined])는 Array(undefined, undefined)와 동일하다고 한다. Array(undefined, undefined)는 2개의 원소가 각각 undefined인 배열이다.

  이 다음 설명은.. 오늘은 도저히 안될 것 같고, 내일 21년 이브날에 기필코 작성해야겠다.. 

cf) https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
cf) https://stackoverflow.com/questions/50478967/what-is-array-mapfunction-call-number

