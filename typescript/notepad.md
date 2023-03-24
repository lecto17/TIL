
* type 호환

  ```
    let primitiveStr: string;
    primitiveStr = 'hello'; // OK
    primitiveStr = new String("hello"); // Error, /** Type 'String' is not assinable to type 'string'. \n 'string' is a primitive,  but 'String' is a wrapper object. Prefer using 'string' when possible. */

    let objectStr: String;
    objectStr = 'hello'; // OK
    objectStr = new String('hello'); // OK
  ```

* javascript 
  
  - 동적 타입(dynamic typed), 느슨한 타입(loosely typed) 언어

  - 변수의 타입 선언 없이 값이 할당되는 과정에서 <b>동적으로 타입을 추론(Type Inference)</b>한다는 의미

  - 동적 타입 언어는 타입 춘론에 의해 변수의 타입이 결정된 후에도 같은 변수에 여러 타입의 값을 교차하여 할당 가능

  ```
    var foo;
    console.log(typeof foo); // undefined

    
    foo = null;
    console.log(typeof foo); // object

  ```

* 타입 추론

  - 타입 선언을 생략하면 값이 할당되는 과정에서 동적으로 타입이 결정된다. 이를 타입 추론이라고 한다.


* 타입 캐스팅

  - 기존의 타입에서 다른 타입으로 타입 캐스팅하려면 as 키워드를 사용하거나 <> 연산자를 사용할 수 있다.


  ```
    const $input = document.querySelector('input[type="text"]'); // input: Element | null

    const val = $input.value; // Error, 'Element' 타입에 value라는 property가 없기 때문에. 


    => 아래와 같이 변경

    1. const $input = document.querySelector('input[type="text"]') as HTMLInputElement;

    OR

    const $input = <HTMLInputElement>document.querySelector('input[type="text"]');
  ```


  * 클래스

    - ES6 클래스는 클래스 몸체에 '메소드'만을 포함할 수 있다. 클래스 몸체에 프로퍼티를 선언할 수 없고, 반드시 생성자 내부에서 클래스 프로퍼티를 선언하고 초기화한다.

    - typescript 클래스는 클래스 몸체에 클래스 프로퍼티를 사전 선언해야 한다.

    - typescript의 클래스는 접근 제한자를 명시하지 않았을 때, 다른 클래스 기반 언어의 경우, 암묵적을 protected로 지정되어 패키지 레벨로 공개되지만, typescript의 경우, 접근 제한자를 생략한 클래스 프로퍼티와 메소드는 암묵적으로 public을 선언됨.