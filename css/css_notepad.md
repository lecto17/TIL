** css 상식 

 - 첫글자에만 CSSS로 색상 넣기

 ::first-letter 의사 클래스로 첫글자만의 색상을 넣을 수 있다.

 cf) 의사 클래스: CSS에서 의사클래스는 선택하고자 하는 HTML 요소의 특별한 '상태(state)'를 명시할 때 사용한다.


 그런데 내가 원한 건 마지막 글자에만 색상을 넣는 것이였기에, first-letter의 반대 속성인 last-letter 같은 의사클래스를 찾아보았는데,, 존재하지 않았다..

 이를 해결하기 위해서 unicode-bidi: bidi-overide로 텍스트 방향(좌->우, eg) cake )을 반대 방향(우->좌, eg) ekac)으로 설정한다. 이 때, direction: rtl; 과 함께 설정해야한다. 이렇게 하여서 거꾸로 된 단어의 첫번째 글자에 속성을 적용하고 이 글자를 위 속성으로 뒤집게 되면 마지막 글자에 CSS를 적용하는 효과를 얻을 수 있다.

 그런데.. 내가 css로 색상을 넣고 싶었던 문자는 * 이 별표 친구였는데, * 친구는 좀 뭔가 이상했다.. 

 'title *' 에서 * 에 색상을 넣기 위해 '* eltit'의첫 글자에 색상을 넣은 후 뒤집으려고 했으나.. 색상 적용이 생각처럼 되지 않았다. * 는 띄어쓰기 없이 다른 글자가 붙어 있어야 *와 그 글자의 색삭을 변경할 수 있었다.. 결론적으론 * 하나에만 색상을 적용할 수 없었다..

 그러다 ::after 의사 클래스를 찾아보게 됬고, ::after { content: "*"; color: red; }로 적용하여 원하는 상황을 만들 수 있었다.

 css는 참 재밌다.. 진심이다..


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



