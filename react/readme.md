* useReducer

  - useState의 대체함수

  - (state, action) => newState의 형태로 reducer를 받고 dispatch 메서드와 짝의 형태로 현재 state를 반환.

  - 다수의 하윗값을 포함하는 복잡한 정적 로직을 만드는 경우, 다음 state가 이전 state에 의존적인 경우, 보통 useState보다 useReducer를 선호한다.

  - useReducer는 자세한 업데이트를 트리거하는 컴포넌트의 성능을 최적화할 수 있게 하는데, 이것은 콜백 대신 dispatch를 전달할 수 있기 때문이다.

<br />

* npm outdated: 프로젝트에 설치되어 있는 라이브러리의 현재 버젼과 최신 버젼을 보여준다. 주기적으로 해당 명령어를 실행하여 버전 업데이트를 할 수 있도록 하는 것이 좋다.

<br />
* redux

  - 액션과 리듀서가 서로 다른 파일에 정의되어 있을 수 있는데, 이럴 경우 개발하는데 불편하다. 그래서 리듀서와 액션 관련 코드들을 하나의 파일에 몰아서 작성하는 것을 'Ducks 패턴'이라고 한다. 

  - Ducks 패턴을 따를 때는 액션의 이름에 접두사를 넣는다. 이렇게 하여 다른 모듈과 액션 이름이 중복되는 것을 방지할 수 있다.

  - 프리젠테이셔널 컴포넌트: 리덕스 스토어에 직접적으로 접근하지 않고 필요한 값 또는 함수를 props로만 받아와서 사용하는 컴포넌트. 주로 UI를 선언하는 것에 집중.

  - 컨테이너 컴포넌틍: 리덕스 스토어의 상태를 조회하거나, 액션을 디스패치할 수 있는 컴포넌트를 의미. HTML 태그를 사용하지 않고 다른 프레젠테이셔널 컴포넌트들을 불러와서 사용한다.

  - useSelector: 리덕스 스토어의 상태를 조회하는 Hook

  - useDispatch: 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook.

  - connect함수: 컨테이너 컴포넌트를 만드는 방법. But useSelector, useDispatch가 워낙 편하여 해당 함수를 사용할 필요없어짐. 이 함수는 HOC(Higher-Order Component)이다. 이는 리액트 컴포넌트를 개발하는 하나의 패턴이고, 컴포넌트의 로직을 재활용할 때 유용한 패턴이다. HOC의 용도는 "컴포넌트를 특정 함수로 감싸서 특정 값 또는 함수를 props로 받아와서 사용할 수 있게 해주는 패턴"이다.

  ```
    export default connect(
	mapStateToProps, 
	mapDispatchToProps
    )(CounterContainer)
    위 코드는 아래와 동일하다.

    const enhance = connect(mapStateToProps, mapDispatchToProps);
    export default enhance(CounterContainer);
  ```

<br />
* useEffect()

  - useEffect() 함수에 async를 붙여서 사용할 수 없다?

    -> async/await 함수는 Promise 객체를 return 하기때문에 부수효과 함수가 될 수 없다고 한다. 

    -> 부수효과 함수는 함수만 return할 수 있으며, 반환된 함수는 부수효과 함수가 호출되기 직전과 컴포넌트가 사라지기 직전에 호출된다.

    => useEffect 훅에서 async/await 함수를 사용하는 한 가지 방법은 부수효과 함수 내에서 async/await 함수를 만들어서 호출하는 것이라고 한다.


<br />
* 부수효과 함수란?

