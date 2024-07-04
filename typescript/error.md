## 타입스크립 관련 에러 작성 모음

### Operator '+' cannot be applied to types 'Number' and 'Number'.

  - 숫자 타입인 값을 연산하다 위와 같은 에러가 출려되었다.

  - 숫자 타입은 Number 타입과 number 타입으로 나뉘는데, Number 타입은 `non-primitive type`이기에 더하기 연산(+, 다른 연산도 마찬가지)이 불가능하다.

  - 대신 number라는 `primitive type`으로 연산을 진행해야 한다.

  - cf) 숫자 타입에 대해서 정수로만, 양수로만 입력가능하게 하는 방법 
    
    - https://velog.io/@vraimentres/ts-integer

    - But, 실무에서는 사용하기 어려운 컨셉. 의도된 기능을 정확하게 구현하지 못하기에, 다시금 validation하는 과정이 필요한 상황이라고 한다..
