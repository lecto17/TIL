[ 모든 것이 HTTP ]

* 모든 것이 HTTP(HyperText Trasfer Protocol)

 - html 같은 hyper-text (문서 간의 링크를 연결한 것)를 전송하는 프로토콜로 시작

 - 그러나 지금은 텍스트 뿐만 아니라 이미지, 영상, 음악, 파일, JSON&XML(서버끼리 통신할 때 전송하는 것) 등 다양한 것들, 모든 데이터의 형태를 HTTP를 통해 보낼 수 있다.

 - TCP 프로토콜을 직접 연결해서 데이터를 보내는 경우는 거의 없다, 게임 서버나 특수한 경우에는 그렇게 한다. 

 - 모바일 게임 같은 경우, HTTP 프로토콜로도 개발되고 있다.
 
<br/>

* HTTP 역사

 - HTTP/1.1 버젼에서 현재에서 사용되는 상당 부분이 이때 만들어짐. 가장 많이 사용하고, 우리에게 가장 중요한 버전이다. 따라서 HTTP1.1 버젼을 잘알아둬야 한다.

* 기반 프로토콜

 - TCP: HTTP/1.1, HTTP/2 // 이 두버젼은 TCP 프로토콜 위에서 동작한다.

 - UDP: HTTP/3 // HTTP/3버젼은 UDP 기반으로 개발이 되어 있다.

 Q. TCP가 안전하고 좋은 것 아닌가?

 A. TCP는 3 way hand-shake, 많은 양의 데이터, 속도가 빠르지 않은 매커니즘이란 특성을 갖고 있기에 이것을 UDP 프로토콜 위에 Application level에서 성능을 최적화하도록 하기 위해 설계된 것이 HTTP3

<br/>

* HTTP 특징

 - 클라이언트 서버 구조 // 

 - 무상태 프로토콜(stateless), 비연결성 // 

 - HTTP 메시지 // 통신할 떄 HTTP 메시지를 사용한다.

 - 단순함, 확장가능 //
 

* 클라이언트 서버 구조
* Stateful, Stateless
* 비연결성(connectionless)
* HTTP 메세지
