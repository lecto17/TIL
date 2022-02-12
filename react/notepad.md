* useEffect()

  - useEffect() 함수에 async를 붙여서 사용할 수 없다?

    -> async/await 함수는 Promise 객체를 return 하기때문에 부수효과 함수가 될 수 없다고 한다. 

    -> 부수효과 함수는 함수만 return할 수 있으며, 반환된 함수는 부수효과 함수가 호출되기 직전과 컴포넌트가 사라지기 직전에 호출된다.

    => useEffect 훅에서 async/await 함수를 사용하는 한 가지 방법은 부수효과 함수 내에서 async/await 함수를 만들어서 호출하는 것이라고 한다.


<br />
* 부수효과 함수란?

