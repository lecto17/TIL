* console.log와 console.dir

  [console.log]

    - 요소를 HTML과 같은 트리 구조로 출력

    - DOM 요소에 대해 특별한 처리를 제공

  [console.dir]

    - 요소를 JSON과 같은 트리 구조로 출력

    - Dom 요소에 대한 특별한 처리를 제공하지 않는다.

<br/>
* JSON(JavaScript Object Notation)

  - 데이터를 표시하는 포맷

  - 자바스크립트로부터 파생되어 js 구문의 형식을 따르지만, 독립적인 데이터형 포맷이다, 따라서 c, c++, java, python 등 다양한 pl에서 활용가능

  - key: value 형식으로 포맷이 정해져 있으며, 주로 비동기 브라우저/서버통신을 위해 사용된다.

  - JSON.parse(): JSON 포맷으로 되어 있는 문자열을 JSON 객체로 변환시킨다. JSON.parse(문자열) 

  cf) JSON.parse() return 값은 Object / 이로 인해 JSON.parse()의 결과는 늘 객체형태라고 생각했는데, JSON.parse(JSON.stringify([a, b, c]))의 결과값은 [a, b, c], 배열이다.

  - JSON.stringify(): 인수로 전달받은 자바스크립트 객체를 문자열로 변환하여 반환.

  - JSON.toJSON(): js의 Date 객체의 데이터를 JSON 형식의 문자열로 변환하여 반환. 따라서 Date.prototype 객체에서만 이 메서드를 사용할 수 있다.



* Array.prototype.slice()
  
  - slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.

	```
	  ex) 
	    let a = ['aa', 'bb'];
	    let b = a.slice();

	    console.log(b); // ['aa', 'bb']
	    
	    b[0] = 'xx';
	    console.log(b); // ['xx', 'bb']
	    console.log(a); // ['aa', 'bb']
	```

  - <b>begin(첫 인자)</b>

    - slice의 첫시작으로(begin) 음수가 들어왔을 경우, 배열의 끝에서부터의 길이를 나타낸다.

    - begin이 배열의 길이보다 큰 경우, 빈 배열을 return

    - begin이 undefined인 경우, 0번 인덱스부터 slice

    ```
      sthArray.slice(-2); // 배열에서 마지막 두개의 element 추출
    ```

  - <b>end(두번째 인자)</b>

    - 음수 인덱스는 배열의 끝에서부터의 길이를 나타낸다. 예를 들어 slice(2, -1)는 세번째(=2번 인덱스)부터 끝에서 두번째 요소까지 추출한다.

    - end가 생략되면 slice()는 배열의 끝까지(arr.length) 추출한다.

    - end 값이 배열의 길이보다 크면, slice()는 배열의 끝까지 추출한다.

* 일급 함수란 ?

  - 함수를 다른 변수와 동일하게 다루는 언어는 <b>일급 함수</b>를 가졌다고 말한다.
  
  - 함수를 값으로 담을 수 있어 변수에 함수를 값으로 넣기도 한다.
  
  - 함수의 전달인자로 함수를 전달할 수 있다.

    ```
      const temp = function() {
          console.log("it's temp");
      }
      
      temp(); // 변수를 사용한 호출, 'it's temp' 출력
      
      const hello = function() {
          return function() {
              console.log("HELLO")
          }
      }
      
      hello()(); // "HELLO" 출력
      
      function add(a) {
          return function(b) {
              return a + b;
          }
      }
      
      let sum10 = add(10);
      sum10(20); // 30 출력
    ```


* 순수 함수란 ?

  - 순수함수의 조건
  
    1. 함수의 전달인자로 동일한 인자가 들어갈 때마다 동일한 결과값이 나와야 한다. (= 같은 입력을 받은 경우, 같은 출력을 반환)
    2. side-effect(부수적인 효과)가 발생해서는 안된다.
    3. return 값을 통해서만 소통한다.
    4. 평가 시점이 중요하지 않다. 순수함수가 아닌 경우에 동일 인자를 넣어도 다른 결과값이 나오는 상황에서 어떤 시점에 함수를 평가할지는 중요하지만 순수함수의 경우는 동일 인자가 입력되면 언제나 동일 결과가 출력되기에 평가시점을 따질 필요가 없다.
    
    ```
     //순수함수
     function add(a, b) {
       return (a + b);
     }
     
     //순수함수 X
     let c = 10;
     function sum(a, b) {
        return (a + b + c);
     }
     
     console.log(10, 20); // 40 출력
     
     c = 5;
     console.log(10, 20); // 35 출력
     
     -> 동일 인자이지만, 결과값이 다르다
     
     부수적인 효과: 함수에서 디스크에 값을 저장하거나 외부 변수의 값을 변경하는 경우를 뜻한다.     
    ```


* for문 없이 배열 생성하기

  - 5개 짝수 배열 만들기

    `1. Array(5).fill(0).map((el, idx) => i+2);`

    `2. Array.from({ length: 5}, (v, i) => i); // v는 각 원소(undefined), i는 인덱스`

    <br/>
    이하 부터는 stackoverflow 지식인들이 배열 만드는 방법...

    `1. Array.from(Array(5).keys()) // [0, 1, 2, 3, 4]`

    `2. [...Array(5).keys()] // [0, 1, 2, 3, 4]`

    `3. let N = 5; Array.apply(null, {length: N}).map(Number.call, Number)`

    `4. (N개의 무작위 배열 만드는 방법) 
    let N = 5; Array.apply(null, {length: N}).map(Function.call, Math.random); 
    // [0.7082694901619107, 0.9572225909214467, 0.8586748542729765, 0.8653848143294454, 0.008339877473190427]`

  <br/>
  2번까지는 이해가 됬는데, 3번 부터는 설명을 적어놓아야 할 것 같다..(for문 안써서 배열 만드는게 뭔가 멋져 보이고 효율적이라는 생각을 했는데,, 아래 설명을 적으면서 괜히 복잡하게 배열을 만드는 건 아닌지, 그래서 더 효율이 떨어지는 건 아닌지 고민하게 됬다.. 까불지 말고 그냥 for문으로 배열 만드는 것도 괜찮을 것 같다)

  Number.call(undefined, N)은 Number(N)과 동일하다고 한다. Number(N)은 N을return 해준다.

  그리고 Array.apply(null, [undefined, undefined])는 Array(undefined, undefined)와 동일하다고 한다. Array(undefined, undefined)는 2개의 원소가 각각 undefined인 배열이다.

  이 다음 설명은.. 오늘은 도저히 안될 것 같고, 내일 21년 이브날에 기필코 작성해야겠다.. 

  cf) https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n

  cf) https://stackoverflow.com/questions/50478967/what-is-array-mapfunction-call-number

