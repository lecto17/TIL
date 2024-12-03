* peerDependencies

  - 일반적으로 dependency는 내가 만든 모듈에서 사용하는 패키지들을 지정하는 반면, peerDependencies는 반대로 내가 만든 모듈이 다른 모듈과 함께 동작할 수 있다는 호환성을 표시하는 것

  - 자신이 만든 모듈이 라이브러리의 모든 버젼이 아닌 특정 버젼에서만 동작하게 되는 경우, 이러한 정보를 표시해야하는데 이 때, 사용하는 것이 peerDependencies 이다.


* optinalDependencies

  - 사용을 원하는 모듈이지만, 없거나 설치가 실패해도 npm의 패키지 설치 과정이 중단되지 않도록 하려면, optinalDependencies를 사용한다.

  - 이때 버전을 포함한 패키지 이름 혹은 url dependencies와 같은 방식으로 기재한다.

  - 의존성 모듈이 없는 경우를 대비한 개발을 할 때 사용하는 것이 좋다.

  ex) 모듈이 없는 경우, 특정 로직을 작동시킬 수 있도록 처리하는 것이 좋다.

  - optionalDependencies에 있는 패키지들은 dependencies에 같은 이름이 있으면 덮어쓰게 되므로 한쪽에만 기재하는 것이 좋다.


