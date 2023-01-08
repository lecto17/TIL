* for in / for of 차이

  <img width="184" alt="image" src="https://user-images.githubusercontent.com/53415000/211200903-6c91428b-5b9f-4e47-bbfd-e2612bf370c4.png">


* js 메모리 누수

  cf) https://ui.toast.com/posts/ko_20210611 글을 정리한 내용입니다.

  - 웹 패이지가 멈추는 경우, 원인이 무엇일까 라는 질문을 받으면 어떠한 답변을 할 수 있을까

    - 네트워크 요청이 너무 많아 데이터 전송 속도가 느려지는 지 확인한다. 이는 캐싱으로 처리하여 해결 가능하다.

    - 특정 리소스의 번들이 너무 클 수 있기에, 해당 번들을 분할하여 해결한다.

    - 많은 루프를 돌면서 메인 스레드를 오래 점유하고 있지는 않은지 자바스크립트 코드를 검토한다.

    - 브라우저가 특정 프레임에 너무 많은 것을 렌더링한 문제일 수 있다. 

    - 페이지 렌더링 프로세스 중에서 너무 많은 리페인트와 리플로우가 일어난다. 

  - 메모리 누수로 인해 페이지 로딩 속도에 문제의 원인이 된다. 
  
  #### 스택 메모리와 힙 메모리

    - 자바스크립트 메모리는 단순 변수에 사용되는 스택 메모리와 복잡한 객체에 사용되는 힙 메모리로 구분된다.

    - 단순 변수들은 원시타입이라고 불리며 String, Number, Boolean, Null, Undefined, Symbol, Bigint 등이 있다. <br/> 복잡한 객체는 참조 데이터 타입이라고 하며, Object, Array, Function 등이 있다.
  
  #### 자바스크립트의 가비지 컬렉션

    - 가비지 컬렉션은 가비지 데이터를 수집하는데, 작동 매커니즘은 수동과 자동 두가지 방식으로 나뉜다.

    - c와 c++은 수동 정리 매커니즘을 사용한다. 개발자가 직접 메모리를 할당하고 필요가 없어지면 해당 메모리를 비워줘야 한다. 반면 자바스크립트는 자동 정리 매커니즘을 사용한다. 모든 것을 자동으로 처리하기에 얼마나 많은 메모리를 할당하고 비우는지 신경 쓸 필요가 없다. <br /> 하지만 그렇다고 메모리 관리에 신경을 쓸 필요가 없는 것은 아니다. 

    - 일반적으로 전역 변수는 자동으로 정리되지 않는다. 



* generator (제네레이터)

  - 함수의 흐름을 중간 제어할 수 있다. 함수의 흐름을 멈추게 할 수 있다.

  ```
    const gen = function* () {}

    gen() // gen {<suspended>}

    gen().next() // {value: undefined, done: true}

    cons gen1 = function* () {
      console.log(1);
      yield;
      console.log(2);
      yield 4;
    }

    const generator = gen1();

    generator.next(); // 1 {value: undefined; done: false;}출력하고 멈춤.
    generator.next(); // 2 {value: 4; done: false;} 출력하고 멈춤.
    generator.next(); // {value: undefined; done: true;} 출력하고 멈춤.

  ```

* 메시징 시스템

  - 분산형 아키텍처에서의 메시징 시스템이란 용어는 네트워크를 통한 정보 교환을 용이하게 하기 위한 솔루션, 패턴 및 일련의 아키텍처를 의미.

  - 메시지는 목적의 따라 3가지 유형의 메시로 구분. (명령 메시지, 이벤트 메시지, 도규먼트 메시지)

  - 명령 메시지

    - 수신 측에서 어떤 동작이나 작업을 수행하도록 하는 것

    - 원격 프로시저 호출(RPC) 시스템, 분산된 연산 수행, 데이터를 요청하데 사용

    - RESTful HTTP 호출이 이 명령의 예시.

  - 이벤트 메시지

    - 다른 컴포넌트에 무엇인가가 발생했음을 알리는데 사용

    - 일반적으로 이벤트의 유형을 포함, 때로는 컨텍스트, 주제 같은 세부적인 정보도 포함

    - 브라우저에서 롱폴링(long polling)이나 WebSocket을 통하여 데이터가 변경되거나 일반적인 시스템의 상태가 변화되었을 때 서버로부터 알림을 받기 위해 이벤트 메시지를 사용

    - 이벤트의 사용은 시스템의 모든 노드를 동일한 페이지에서 유지할 수 있도록 하기에 매우 중요하다.

  - 도큐먼트 메시지

    - 컴포넌트와 시스템 간의 데이터 전송을 의미

    - 도큐멘트 메시지와 명령 메시지와 구별되는 주요 특징은 수신자에게 데이터를 어떻게 처리할지 알려주는 정보가 메시지에 포함되어 있지 않다는 것이다.

    - 이벤트 메시지와의 주요한 차이는 주로 발생한 특정한 사건과 연관성이 없다는 것이다.

  - 비동기 통신

    - 동기 통신에 비해 더 적은 리소스를 사용하고 더 나은 병렬처리를 수행할 수 있다.

    - 메시지를 저장한 이후, 즉시 혹은 일정한 시간 지연 후에 전달할 수 있다.

    - 메시징 시스템에서는 메시지 큐란 컴포넌트를 통하여 메시지를 송신자와 수신자 간의 통신을 중재하고 메시지가 대상에 전달되기 전에 메시지를 저장한다.

  - 메세지 전달 방식(Peer-to-peer / Broker)

    - P2P 방식

      - 수신자에게 직접 p2p 방식으로 전달되는 것.

      - 모든 노드는 메시지를 수신자에게 직접적으로 전달하기에 노드가 수신자의 주소와 포트를 알아야하고 프로토콜과 메시지 형식을 이해하고 있어야 한다. 브로커는 이러한 복잡함으로부터 자유롭다.

  - 브로커 방식

    - 중앙 중계 시스템을 통해 수신자에게 전달되는 방식.

    - 각 노드는 완전히 독립적이며, 다른 노드에 대한 세부 정보를 직접 알지 못하더라도 수 많은 피어들과 통신할 수 있다.

    - 브로커는 다른 통신 프로토콜 간의 브리지 역할을 할 수도 있다. (ex, RabbitMQ 브로커, AMQP, MQTT, STOMP를 지원하여 여러 어플리케이션에서 서로 다른 프로토콜로 통신이 가능하도록 한다.)

<br/>

* 고차함수

   ```
    const onClick = () => () => {
       ...
    }

    위 코드는 아래의 코드와 동일하다 

    const onClick = () => ()=> {
       return () => {
          ...
       };
    }
   ``` 

  - 고차함수를 사용할때 event를 어디다가 넣어야 할 지(1번 혹은 2번??) 고민일때 함수의 return 값으로 대치해서 생각하면 편하다.
   
   ```
    const onClick = (1) => (2) => {
       console.log(e.target);
    }

    document.querySelector("#header").addEventListener('click', onClick())

   ```

  -> onClick의 return 값으로 대체해볼것, 만약 1번 자리에 event 객체가 있었다면, 아래 코드와 같아진다.

    ```
     document.querySelector("#header").addEventListener('click', () => {
        console.log(e.target);
     })

     event 객체가 없는데, event 객체에 접근하는 오류가 생긴다. 만약 2번 자리에 event 객체가 있었다면, 아래 코드와 같아지고 이게 맞는 코드이다.

     document.querySelector("#header").addEventListener('click', (e) => {
        console.log(e.target);
     })

    ```

<br />

* encodeURI()

  - 인터넷 주소에서 사용하는 :(semi-colon), ;(colon), /(slash), =, ?, & 등을 제외하고 인코딩하는 함수이다.

  - encodeURIComponent() : 모든 문자를 인코딩하는 함수이다.

  ex)'hello?yo u'라는 글자를 encodeURI(), encodeURIComponent() 했을 때의 차이가 있다. 첫번째는 hello?yo%20u 두번째는 hello%3Fyo%20u와 같은 결과가 출력된다.

<br />

* Object.Entries()

  - return 값: 지정된 객체 자체의 열거 가능한 문자 속성 [key, value] 쌍의 배열

  ```
     const rspCoord = {
	 바위: '0',
	 가위: '-142px',
	 보: '-284px',
     }
     
     const RSP = () => {
     	const [imgCoord, setImgCoord] = useState(rspCoord.바위);

	const computerChoice = (imgCoord) => {
	 return Object.entries(rspCoord).find((v) => {
	    return v[1] === imgCoord
	 })[0];
     	}

     	...

     	computerChoice(imgCoord);

     }

  ```


* Event Bubbling

  - html 특성 상, 자식 요소에서 발생한 event는 부모에서도 발생하게 된다

    가령, 아래와 같은 코드 구조가 있고, td에서 발생하는 event가 있을 경우, tr에서도 event가 발생하고, table에서도 발생하게 되고, body에서도 발생하게 된다. 이 현상이 event bubbling 이라고 한다. 이 bubbling이 있어야 하는 이유는 td 태그 내에 span 태그가 있다고 가정하고 이때 td를 클릭한 경우 이벤트를 발생시키게 해놓았는데, span 태그를 클릭하여 td에 걸어놓은 event 발생이 안되는 문제를 위해 존재한다고 한다.

  - event capturing: 부모에서 발생한 event가 자식에게 까지 내려오는 현상. 보통 event capturing은 팝업 닫기를 구현할 때 쓴다고 한다. 팝업의 바깥 쪽 영역을 클릭하여 팝업창이 닫히게끔 하는 용도로 사용된다. 팝업의 바깥쪽 영역은 팝업의 부모이고 이 부모에서 발생한 이벤트를 팝업창으로 전달하여 팝업창을 꺼지게끔 하면 된다고 한다.

    ```
      <body>
         <table>
	    <tr>
	       <td></td>
	    </tr>
	 </table>
      </body>
    ```


<br/>
* Event Deligation

  ```
  <!DOCTYPE html>
	<html>
	<head>

	</head>
	<body>
	    <div class="menu">
		<button class="menu-btn" data-value="1">
		    <img class="icon" src="/src/assets/aImage.png" >
		    <span class="btn-label">button A</span>
		</button>
		<button class="menu-btn" data-value="2">
		    <img class="icon" src="/src/assets/bIage.png" >
		    <span class="btn-label">button B</span>
		</button>
		<button class="menu-btn" data-value="3">
		    <img class="icon" src="/src/assets/cImage.png" >
		    <span class="btn-label">button C</span>
		</button>
	    </div>    
	</body>
	</html>

   ```


이벤트를 걸어줄 때, 요소 하나 하나마다 addEventListener를 통해 걸게 되면, 성능이 안좋게 된다.

따라서 event를 걸어줄 요소들의 부모에 event를 걸어주면, 성능을 향상 시킬 수 있다. 즉, event를 걸어줄 요소들의 부모로 event 처리를 위임하는 것이다.

위에 코드에서는 각 button 들에 addEventListener를 등록하는 것이 아니라 menu라는 클래스를 갖는 부모 div element에 event를 등록하는 것이다.

하지만 이러한 경우, 아래의 상황을 처리해야한다.
부모에 이벤트를 걸어줬기 때문에, 그 부모 내에서 어떤 자식요소(어떤 버튼)를 클릭했는지를 구분할 수 있는 작업이 필요하다. 구분할 수 있는 방법으로는 event 객체의 target 속성을 확인하면 된다. 참고로 event 객체의 currentTarget 속성은 event가 걸려있는 요소를 출력하게 된다, eventHandler 안에서는 currentTarget과 this는 동일한 것을 나타내게 되어 있다. addEventListener를 호출하도록 한 객체를 출력한다. 곧, addEventListener가 걸려있는 객체를 출력한다.

event.target을 통해 자식들을 구분할 수 있었지만, 자식 내에 가령 span 태그나 img 태그 같은 요소들이 있을 때, 그 요소를 클릭하면 어떤 자식인지를 구분해주는 것이 아니라, 자식 내에 span 태그 와 같은 내부에 있는 요소를 출력하게 된다.

위 코드와 같은 경우, 어떤 버튼인지를 구분할 수 있어야 하는데, 어떤 버튼인지를 구별하는 것이 아닌 버튼 내에 자식 요소를 가르키게 된다.(출력하게 된다.) 

 

그래서 위와 같은 문제를 해결하는 방법으로는 2가지 방법(css, script)이 있다.

 

첫번째 css를 사용하는 경우, pointer-events: none 속성을 적용시킨다. 어떤 버튼인지를 구별하기 위해 버튼 내에 있는 자식 요소들에게 pointer-events: none을 적용시킨다. 위 코드의 경우 button 하위에 있는 span, img 태그에 해당 속성을 적용시키면 된다.

둘째, script를 사용할 경우, 아래와 같은 코드를 추가하여 진행하면 된다.

	<script>
        const menu = document.querySelector(".menu");
        function clickHandler(event) {
            let elem = event.target;
            while(!elem.classList.contains("menu-btn")) {
                elem = elem.parentNode;

                // menu-btn 바깥 영역이면서, menu 클래스 내부 영역을 클릭했을 경우
                // undefined의 classList를 접근하는 에러를 막기 위해
                if (elem.nodeName === 'BODY') {
                    elem = null;
                    return ;
                }
            }
        }
    </script>
 

cf) 위 코드에서 element에 custom tag로 data-value를 넣어줬다. 'data-'로 시작하는 커스텀 태그를 넣어줬을 경우, 해당 element의 dataset 속성에 value라는 값이 저장된다. 따라서 e.target.dataset.value로 접근하면 각 버튼의 data-value 값을 접근할 수 있다.

 

이렇게 css와 script로 문제를 처리할 수 있을 경우, 보통 css로 깔끔하게 처리하면 되지만, css로 처리할 경우, pointer-events: none 속성을 적용한 하위 내 모든 자식영역에서는 clickEvent가 발생하지 않는 점을 유의해야 한다고 한다.

 

script로 처리할 경우, 좋은 점으로는 동적으로 element가 생성되는 상황에 이벤트 리스너를 따로 추가적으로 구현하지 않아도 된다는 점이다. 

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

