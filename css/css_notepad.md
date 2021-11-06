** css 상식 

 - box-shadow 속성

    속성에 매칭되는 값이 헷갈린다.. 암기!

    `box-shadow: 10px 7px 5px black;`

     /* 

      * x축으로 10px 이동 

      * y축에서 7px 이동 

      * 흐림 정도(blur-radius)는 5px

      * 선 색은 black

     */


 - rem, em 속성 (출처: https://www.codingfactory.net/10748)

    em: 상위 요소를 기준으로 상대적으로 크기를 정한다.

    `<style>`
    
    &nbsp;&nbsp; `html { font-size: 16px; }`
    
    &nbsp;&nbsp; `body { font-size: 1.5em; }`
    
    &nbsp;&nbsp; `.a { font-size: 2.0em; }`
    
    `<style>`
    
    `<body>`
    
    &nbsp;&nbsp; `<p class="a">TEXT</p>`
    
    `</body>`
    
    => 'TEXT' 란 글자의 크기는 16px * 1.5 * 2.0 = 48px이 된다.
    
    <br/>

    rem: 문서의 최상위 요소, 즉 html 요소의 크기의 배수로 크기를 정한다.
    
    위 .a 클래스의 font-size를 2.0rem으로 변경하면 글자크기는 16px * 2 = 32px이 된다.

    <br/>

    cf) html 요소 크기의 기본값은 웹브라우저 설정에서 정한 글자 크기이다. 보통 16px 이다.



