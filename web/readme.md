* Crontab이란?

  ```
  시스템 관리자는 보안이나 시스템의 관리 등을 위해 주기적으로 동일한 작업을 반복 수행해야함.

cron이란 리눅스에서 특정 시각에 명령이나 프로그램이 수행되도록 하는 리눅스용 작업 스케줄러이다.
미리 구성된 시간에 실행되도록 작업을 할당하는 스케줄링 도구가 크론이다.
이것으로 일정한 간격으로 시스템에서 수행될 일들을 자동화 할 수 있다.
  ```


* 지디웹

  - 참가방법: https://www.gdweb.co.kr/sub/process.asp

  - 위 사이트에서 소개하는 내용을 중점적으로 사이트를 만들어야 할 것 같다.


* encodeURI, encodeURIComponent 차이

  - encodeURI는 알파벳, 0~9의 숫자,  ; , / ? : @ & = + $ #    - _ . ! ~ * ' ( )를 제외한 문자를 인코딩(이스케이프 처리)

  - encodeURIComponent는 알파벳,0~9의 숫자 - _ . ! ~ * ' ( ) 를 제외한 문자를 이스케이프 처리

  -> 두 함수의 차이는 <b>/ ? : @ & = + $ # 도 이스케이프 처리를 해버리는 지 여부</b>에 있다.

  - & ? 와 같이 uri에서 특수한 기능을 하는 문자는(eg, ?는 uri에서 query string을 의미함) 인코딩하면 안되므로 path 전체를 인코딩할 때는 encodeURI를 사용.

  파라미터 값에 & 등의 특수문자가 값으로 들어갈 때는 인코딩해줘야 하기에, 파라미터 값에는 encodeURIComponent 사용

  ```
    const name = "co&ding"; // uri 파라미터 name으로 들어갈 값
    const uri = "http://javascript.com?name=" + encodeURIComponent(name) // 파라미터 값만 인코딩
  ```

  cf)

    - 인코딩: 어떤 네트워크에서도 사용할 수 있게 문자를 코드(ASCII, 유니코드 등)로 변환하는 것

    - 이스케이프: 문자열을 인코딩하는 것

* 애드온(add-on)

  cf) https://documenies.com/10

* 도메인 샤딩(domain sharding)

  - sharding: 조각, 파편을 뜻한다.

  - resource를 여러 개의 domain으로 나누어 저장하여, page load time을 향상시키는 일종의 트릭 혹은 방법이다.

  - 여러 개의 domain으로 나누어진 리소스를 다운받기 때문에 browser는 더 많은 리소스를 한번에 더 많이 받을 수 있다.

  - Domain sharding을 적용하는 이유는 대부분의 web browser가 한 개의 domain에 대해 active connection을 제한하기 때문이다.
  
  - 정적 파일(이미지, css, js 등)의 로딩 속도를 개선하는 방법으로 여러 개의 서브 도메인을 생성해 정적파일을 병렬로 가져온다고 한다.

  - 이러한 도메인 샤딩의 등장 배경은 HTTP/1.x 버젼에서 도메인 하나 당 동시에 요청할 수 있는 개수 제한이 있었기 때문이라고 한다.

  - 최신 브라우저들은 보통 한 도메인에 약 6개의 동시 다운로드를 제공한다. 이 갯수를 초과하는 페이지의 경우, 갯수를 6으로 나눈 도메인에 리소스를 뿌려두면, parallel하게 리소스들을 다운받을 수 있다.

  - Domain sharding이 항상 좋은 것은 아니다. performance loss를 유발하기도 한다.

  - web browser는 DNS loopup을 추가 domain에 대해서 수행해야하고, 각 domain에 대해서 connection을 유지해야 한다. 그래서 최초 initial load time은 기렁질 수 있다.

  - 2~4 개의 domain이 최적의 비율이라고 한다. 따라서 무조건 많은 domain이 좋은 것은 아니다.

  - SPDY는 제한없는 동시 요청이 가능하기 때문에, domain sharding을 해결할 수 있다. SPDY를 정식 지원하기 전까지는 domain sharding이 효율적일 수 있으나, SPDY를 도입하면서부터는 overhead 문제로 오히려 domain sharding을 제거하는 것이 추천된다.

  cf)

    https://wonism.github.io/domain-sharding/

    https://aroundck.tistory.com/5153


<br/>

* GNB, LNB란?

  - GNB, LNB, FNB 는 매장에서 고객들이 자주 찾는 물건을 눈에 잘 띄는 위치에 배치해 빠른 구매를 이끌어내듯이, 웹 사이트에서 고객이 찾는 카테고리를 빠르게, 어디서나 확인할 수 있도록 하는 구성을 뜻한다.

  - GNB(Global Navigation Bar)

    - 웹 사이트 전체에 동일하게 적용되는 네비게이션 바

    - 보통 웹사이트 최상단에 위치하며 어떤 페이지를 클릭해도 동일하게 보여진다.

    - 웹사이트가 제공하는 모든 서비스를 표현하며, 직관적으로 구성하는 것이 좋다.

  - LNB(Local Navigation Bar)

    - GNB를 클릭하거나 호버 했을 때 나오는 하위 카테고리 리스트

  - FNB(Foot Navigation Bar)

    - GNB와 동일하게 모든 웹페이지 가장 하단에 위치한 내비게이션 바

<br/>

  cf) SNB(Side Navigation Bar): 왼쪽 혹은 오른쪽에 위치하며, 메인 메뉴, 서브메뉴를 제외한 기타 메뉴로 구성하여 사이드 메뉴라고 할 수 있다.

<br/>

* webpack5 module federation

  - module federation은 여러 분리된 빌드들이 하나의 앱을 구성할 수 있는 Webpack5의 새로운 기능이다.

  - 하나의 앱이 <b>다른 빌드에 있는 코드를 동적으로 실행</b>시킬 수 있는 기술이다.

  - micro-frontends의 근간이 되는 기술이기도 하다.

  - 특정 빌드가 remote 앱이 되고 그 앱에서 다른 빌드들을 동적으로 불러와 사용할 수 있다. remote는 꼭 특정한 하나의 빌드만 될 수 있는 것이 나이고, federated된 모든 빌드들이 remote가 될 수 있다. 즉 <b>양방향(bidirectional)</b>으로 module federation이 가능하다. 가령 a 빌드에서 b 빌드에 있는 코드를 실행시킬 수 있고, b빌드에서도 a빌드에 있는 코드를 실행시킬 수 있다.

  cf) federated 란?
    
    - https://medium.com/curg/%EC%97%B0%ED%95%A9-%ED%95%99%EC%8A%B5-federated-learning-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EC%B1%8C%EB%A6%B0%EC%A7%80-b5c481bd94b7
    
    - https://module-federation.github.io/blog/get-started

<br/>

* CLS(Cumulative Layout Shift)란?

  - CLS(누적 레이아웃 이동)는 페이지의 전체 수명 동안 발생하는 모든 예기치 않은 레이아웃 이동에 대해 가장 큰 레이아웃 이동 점수 버스트를 뜻한다. // 사용자에게 발생하는 레이아웃 이동(layout shift) 빈도를 측정

  - 방문자에게 콘텐츠가 얼마나 불안정한 지 측정하는 사용자 경험 측정 항목 및 웹 페이지의 성능 측정 지표이다.

  - 레이아웃 이동은 시각적 요소가 렌더링된 프레임에서 다음 프레임으로 위치를 변경할 때마다 발생한다.

  - 뷰포트에서 이동한 콘텐츠의 양과 영향을 받은 요소가 이동한 거리를 확인하여 점수로 표시한다.(CLS 점수, 좋은 사용자 환경을 제공하려면 사이트의 CLS 점수가 0.1 미만이여야 한다.)

  - 레이아웃 이동이 발생하는 원인

    * 치수가 없는 이미지

    * 크기가 없는 광고, 삽입 및 iframe

    * 동적으로 삽입된 컨텐츠

    * FOIT / FOUT을 유발하는 웹 글꼴

    * DOM을 업데이트하기 전에 네트워크 응답을 기다리는 작업

  cf)

  * https://wit.nts-corp.com/2020/12/28/6240

  * https://web.dev/i18n/ko/cls/

<br/>
* 메시지 브로커, 이벤트 브로커의 차이

  [ 메세지 브로커 ]

    - 이벤트 브로커로 역할을 할 수 없다.

    - 미들웨어 아키텍처에서 사용된다. (미들웨어는 서비스하는 애플리케이션들을 효율적으로 연결한다. ex, 메시징 플랫폼, 인증 플랫폼, 데이터베이스 등)

    - 메세지 브로커에 있는 큐에 데이터를 보내고 받는 프로듀서와 컨슈머를 통해 메세지를 통신하고 네트워크를 맺는 용도로 사용

    - 메세지를 받아서 처리하고 나면 즉시 또는 짧은 시간 내에 삭제되는 구조이다.

    - 레빗엠큐, 레디스 큐

  [ 이벤트 브로커 ]

    - 메시지 브로커로 역할을 할 수 있다.

    - 이벤트 또는 메시지라고 불리는 이 레코드(장부)를 딱 하나만 보관

    - 인덱스를 통해 개별 액세스를 관리한다.

    - 업무상 필요한 시간동안 이벤트를 보존할 수 있다.

    - 카프카, aws의 키네시스


이벤트 브로커는 서비스에 나오는 이벤트를 마치 DB에 데이터를 저장하듯 이벤트 브로커의 큐에 저장한다.

이렇게 데이터를 저장함으로써 얻는 장점이 있다.

1. 단일 진실 공급원으로 사용할 수 있다.
2. 장애가 발생했을 때, 장애가 일어난 지점부터 재처리할 수 있다.
3. 많은 양의 실시간 스트림 데이터를 효과적으로 처리할 수 있다는 특징이 있다. 

이벤트 브로커로 클러스터를 구축하면 이벤트 기반 마이크로 서비스 아키텍쳐로 발전하는데 아주 중요한 역할을 할 뿐만 아니라 메세지 브로커로서도 사용할 수 있다.

<br />

* stateless VS statefull

  - stateless

    - stateless 프로세스, 어플리케이션은 과거 트랜잭션에 대한 정보 또는 참조가 저장되지 않는다.

    - 스테이트리스 애플리케이션은 하나의 서비스 또는 기능을 제공하며, 콘텐츠 전달 네트워크(CDN), 웹, 프린트 서버를 사용해 단기 요청을 처리한다.

    - 가령 검색창에 질문을 입력하고 엔터키를 누르는 형식으로 진행되는 온라인 검색이 대표적이다.

    - 트랜잭션이 우발적으로 중단되거나 종료되면 새롭게 시작하면 된다.

    - 스테이트리스 트랜잭션은 단일 요청에 대해 하나의 응답이 나온다.

  <br/>

  - statefull

    - 스테이트풀 프로세스, 어플리케이션은 온라인 뱅킹이나 이메일처럼 여러번 반환될 수 있다.

    - 스테이트풀은 이전 트랜잭션의 컨텍스트에 따라 수행되며, 현재 트랜잭션이 이전 트랜잭션에서 발생한 상황에 영향을 받는다. 이러한 이유로 스테이트풀 어플리케이션은 사용자에게 받은 요청을 처리할 때마다 같은 서버를 사용한다.

    - 스테이트풀 트랜잭션은 컨텍스트와 내역이 저장되기에 중단되어도 중단된 곳부터 다시 시작할 수 있다.
