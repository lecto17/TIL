
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

    - 접근 제한자는 생성자 파라미터에도 선언 가능. 접근 제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언되고 생성자 내부에서 별도의 초기화 없어도 암묵적으로 초기화가 수행된다. private 접근 제한자가 사용되면 클래스 내부에서만 참조 가능하고 public 접근 제한자가 사용되면 클래스 외부에서도 참조가 가능하다.

    - readonly가 선언된 클래스 프로퍼티는 선언 시 또는 생성자 내부에서만 값을 할당할 수 있다.

  
  * static

    - 정적 메서드(static method)는 클래스의 인스턴스가 아닌 클래스 이름으로 호출한다. 따라서 클래스의 인스턴스를 생성하지 않아도 호출할 수 있다.

    - 정적 메서는 this를 사용할 수 없다. 정적 메서드 내부에서 this는 클래스의 인스턴스가 아닌 클래스 자신을 가리킨다.

    - 정적 메서는 인스턴스로 호출할 수 없다.

    - static 키워드를 클래스 프로퍼티에도 사용할 수 있다. 정적 메서드와 마찬가지로 정적 클래스 프로퍼티는 인스턴스가 아닌 클래스 이름으로 호출하며 클래스의 인스턴스를 생성하지 않아도 호출할 수 있다.


  * 덕 타이핑(Duck typing)

    - 인터페이스를 구현하였다는 것만이 타입 체크를 통과하는 유일한 방법은 아니다. 타입 체크에서 중요한 것은 값을 실제로 가지고 있는 것이다.

    ```
        interface IDuck { // 1
	  quack(): void;
	}

	class MallardDuck implements IDuck { // 3
	  quack() {
	    console.log('Quack!');
	  }
	}

	class RedheadDuck { // 4
	  quack() {
	    console.log('q~uack!');
	  }
	}

	function makeNoise(duck: IDuck): void { // 2
	  duck.quack();
	}

	makeNoise(new MallardDuck()); // Quack!
	makeNoise(new RedheadDuck()); // q~uack! // 5


	/**
	 * typescript는 해당 인터페이스에서 정의한 프로퍼티나 메서드를 가지고 있다면 그 인터페이스를 구현한 것으로 인정한다. 이를 "덕 타이핑(duck typing) 또는 구조적 타이핑(structural typing)"이라 한다.
	 */

	interface IPerson {
	  name: string;
	}

	function sayHello(person) {
	  console.log("Hello " + person.name);
	}
	
	var me = { name: 'Lee', age: 18 };
	sayHello(me); // Hello Lee

	// 변수 me는 인터페이스 IPerson과 일치하지 않는다. 하지만 IPerson의 name 프로퍼티를 가지고 있으면 인터페이스에 부합하는 것으로 인정된다. 인터페이스는 개발 단계에서 도움을 주기 위해 제공되는 기능일 뿐 JS의 표준은 아님. 따라서 위 예제의 typescript 파일을 js파일로 트랜스파일링하면 아래와 같이 인터페이스가 삭제된다.

	function sayHello(person) {
	  console.log("Hello " + person.name);
	}

	var me = { name: 'Lee', age: 18 };
	sayHello(me); // Hello Lee
    ```

    - 선택적 프로퍼티

      - 인터페이스의 프로퍼티는 반드시 구현되어야 한다.

      - 만약 프로퍼티명 뒤에 ?를 붙이면 '선택적 프로퍼티(Optional Property)'로 해당 프로퍼티를 생략하여도 에러가 발생하지 않는다.

    - 인터페이스는 extends 키워드를 사용하여 인터페이스 혹은 클래스를 상속받을 수 있다. (복수개의 인터페이스를 상속 받을 수도 있다.

    ```
      interface IPerson {
	  name: string;
	  age?: number;
      }

      interface IDeveloper {
	 skills: string[];
      }

      interface IWebDeveloper extends IPerson, IDeveloper {}

      const webDeveloper: IWebDeveloper = {
	  name: "Lee",
	  age: 20,
	  skills: ['HTML' ,'CSS', 'JavaScript']
      }
    ```

    - 인터페페이스는 클래스를 상속받을 수 있는데, 클래스의 모든 멤버(public, protected, private)가 상속되지만 구현까지 상속하지는 않는다.

  
  * 타입 앨리어스

    - 타입 앨리어스는 새로운 타입을 정의

    - 타입으로 사용한다는 점에서 인터페이스와 유사

    - 인터페이스와는 다르게 타입 앨리어스는 원시값, 유니온 타입, 튜플 등도 타입으로 지정할 수 있다.

    ```
      type Str = "Lee"; // 문자열 리터럴로 타입 지정

      type Union = string | null; // 유니온 타입으로 타입 지정

      type Name = 'Lee' | 'Kim'; // 문자열 유니온 타입으로 타입 지정

      type Func = (() => string) | (() => void); // 함수 유니온 타입으로 타입 지정

      type Shape = Square | Rectangle | Circle; // 인터페이스 유니온 타입으로 타입 지정

      type Tuple = [string, boolean]; // 튜플로 타입 지정
      const t: Tuple = ["", ""]; // error
    ```

    - 인터페이스는 extends 혹, implements 할 수 있지만 타입 앨리어스는 불가

    - 상속을 통해 확장이 필요하다면 인터페이스

    - 인터페이스로 표현할 수 없거나 유니온 또는 튜플을 사용해야 한다면 타입 앨리어스를 사용하는 편이 유리
