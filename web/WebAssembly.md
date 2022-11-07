<h3>[WA 소개]</h3>

* 웹은 원래 HTML, CSS, JS만 해석. But 17년 부터 WebAssembly도 해석(실행) 가능

* WA(WebAssembly)는 언어가 아닌, 브라우저에서 실행 가능한 새로운 파일 형식(.wasm)

* 평소에 쓰던 프로그랭 언어들을 .wasm 형식으로 컴파일이 가능하다. 브라우저에서는 이 .wasm 파일을 실행한다.

<br />
<b>장점</b>
  1. 다른 언어로 작성한 프로그램도 브라우저에서 실행가능(확장성)

  2. 작동속도가 빠르다. 

<br/>

<b>[브라우저가 js파일 실행할 때의 과정]</b>
javascript 파일 -> 간단한 parsing -> Bytecode로 변환(Bytecode란 기계친화적인 자바스크립트 번역본) -> 실행(interpreter가 Bytecode를 실행, 인터프리터를 "ingintion" 이라고 부른다.)

<br/>
 반복되는 코드는 최적화를 진행( Optimizer가 Optimizing을 진행한다. 기계어랑 가까운 언어로 번역). 이후 Optimizing 된 코드는 크롬 내 Turbofan이라는 것이 실행시킨다. 이로 인해 js 파일을 빠르게 실행시킨다.

그런데 optimzing된 코드를 취소해야 하는 경우가 생긴다, 가령 변수의 타입이 바뀐다거나 함수에 들어가는 전달인자의 타입, 갯수 등 변경 되는 경우가 생긴다. 그러면 optimizing 취소 작업을 하고 turbofan이 꺼지며, 다시 bytecode가 실행이 된다. 

<br/>

<b>[wasm 파일 실행 과정]</b>
크롬에서 liftoff라고 불리는 것이 wasm 파일을 실행시킨다. 컴파일된 파일을 브라우저로 js 실행될 때 파싱되고 bytecode로 변환되는 과정이 없이 작동된다. 따라서 실행시작 속도가 매우 빠르다. 그리고 turbofan이 optimizing을 해주는데 js 파일 실행 때와는 다르게 .wasm 파일은 거의 대부분의 코드를 opitmizing 할 수 있다. 그리고 optimizing 취소가 거의 없다. 따라서 안정적으로 빠른 속도를 기대할 수 있다. 무조건 .wasm 파일이 .js 파일보다 빠르게 실행되는 것은 아니다.

<br/>
wasm은 js의 대체재가 아닌, js 내 특정 코드 부분 실행이 느린 경우, 그 부분을 wasm 파일로 대체할 수 있다. 
카카오의 경우 대용량의 이미지의 보정 작업을 하는 경우, wasm을 통해 진행하면 절반 이상의 속도를 줄일 수 있다고 한다.
assemblyscript를 통해 wasm 파일을 만들어낼 수 있다.
