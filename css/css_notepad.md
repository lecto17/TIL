** css 상식 

 - 말풍선(speeech bubble) 만들기

   말풍선 메뉴를 만들고 그 위에다 메뉴 버튼들을 만드는 상황이 있었는데, 말풍선 이미지가 제플린에 이미지로 올려져 있지 않았다. 이 상황으로 말풍선 이미지를 직접 svg 파일을 만들어 진행하려고 하였는데, css로 만들 수 있다는 팀장님의 말씀을 듣고, css로 말풍선 메뉴를 만들게 되었다. <b>이미지를 만들기 전에, css로 만들 수 없는지를 먼저 확인해봐야겠다는 생각을 하게 됬다.</b>
   
  말풍선을 만들며 참고한 사이트는 아래와 같다.
   
   1. https://www.thewordcracker.com/miscellaneous/add-speech-bubbles-easy-with-css/
   
   ![image](https://user-images.githubusercontent.com/53415000/146791220-47211b7a-a99c-4db1-a1f0-4f93c9f5b766.png)

     -> 직접 말풍선 모양을 설정하면, 해당하는 css 코드를 제공한다.

   2. http://happycgi.com/16725
   
   말풍선을 css로 만들 수 있다는 것이 신기해서 코드를 짚고 넘어가보려고 한다.
   
   먼저 말풍선을 만들며, 상황을 2가지로 구분했었다.
   
     1. 말풍선에 border를 입히는 경우
     
   ![image](https://user-images.githubusercontent.com/53415000/146792071-e62eb1bf-09cb-4459-9e36-7b6f50fd7ce8.png)
     
     2. 말풍선에 border를 입히지 않는 경우
     
   ![image](https://user-images.githubusercontent.com/53415000/146791983-665c19ab-d655-4997-bc8f-d83c09e90b20.png)
   
   
   이렇게 상황을 구분한 이유가, css 코드가 달라진다는 생각을 했었고 실제로 구현한 코드를 봤을 때에도 큰 차이는 아니지만, 코드 구현에 차이가 있었다.
   
   border가 있는 경우에는 before 의사 클래스로 삼갹형의 borer를 그린 후에, after 의사 클래스로 삼각형에 배경이 되는 부분을 덧칠하는 과정으로 작업을 하였다.
   
   아래의 코드를 보며 어떻게 css로 말풍선을 만들 수 있었는지 존경(?)의 마음을 갖게 되었던 것 같다..
   
   ![image](https://user-images.githubusercontent.com/53415000/146793121-9257df62-4f34-44b9-94b6-9c52f4676ae4.png)
   
   css로 삼각형을 만드는 것이 관건인데, 이를 이해하기 위해서 다음 사이트를 참고했다. 
   
    cf) http://uxuiz.cafe24.com/wp/archives/4619
    
    위 사이트에서 말하길, border를 그릴 때 보더의 모서리 부분에 대각선으로 경계가 구분되게 된다고 한다. 이 속성을 이용해 삼각형을 만들 수 있다고 한다. 
    
    한번에 이해가 되지는 않지만, 반복해서 이 코드를 접하면서 이해해야 될 것 같다.

   

 - white-space(tailwind로 알아보는)
 
   normal

    ![image](https://user-images.githubusercontent.com/53415000/145217567-8ae8e022-5e55-4c90-bc87-70f25e8348e0.png)

 
   nowrap

    ![image](https://user-images.githubusercontent.com/53415000/145217696-e2bd6fc2-33ec-4f52-add4-aacb5d236d0a.png)

   pre

    ![image](https://user-images.githubusercontent.com/53415000/145217838-55318c6a-6c57-4a2a-9915-98378e5fcabb.png)


 - last-child

   last-child 의사 클래스로 게시글의 마지막 요소의 border-bottom-left/right-radius에 값을 주려고 했다. 하지만 의도했던 대로 되지 않아 last-child 특성에 대해 정리하고 넘어가려고 한다.
   
   문제 상황)
   
   ![image](https://user-images.githubusercontent.com/53415000/146784398-56540af0-955f-4d7d-8d3b-44c68bd300c7.png)
   
     -> 마지막 cs-article에 접근해 style을 적용하려고 했지만, .cs-article:last-child로 정의한 style이 적용되지 않았다.
     
   last-child는 부모 엘리먼트를 기준으로 last element에 접근하여 속성을 적용하게 된다. 아래의 stackoverflow에서 나와 있는 것처럼 not VERY LAST가 아닌 경우에는 속성 적용이 되지 않는다.
   
   ![image](https://user-images.githubusercontent.com/53415000/146785294-33b3dc9b-bf91-4ddb-a508-45dcb3ada07a.png)
   
   // 참고: https://stackoverflow.com/questions/18995362/last-child-not-working-as-expected

   not VERY LAST 하지 않기에 속성이 적용되지 않는다는 것은 위의 예시처럼 a태그가 속해 있는 부모 엘리먼트에 마지막 요소가 a 태그가 아닌 div 태그이기에 a:last-child에서 정의한 속성이 의도했던 a태그의 마지막 요소에 적용되지 않는다.
   
   a 태그인 것에만 접근해서 그중에 마지막 엘리먼트에 접근하겠다고 한 건데, div 태그가 있는 것과 무슨 상관이 있는 건가 생각했지만, last-child 의사클래스 작동 방식이 그렇다는걸 받아들이게 됬다. last-child 뿐 아니라, last-of-type / nth-last-child에도 위에서 말한 동일한 특성이 적용되고 있다.
   
   이 삽질로 오래동안 시간을 뺏겼지만, 결국에는 cs-article을 감싸는 wrappper 클래스를 만들어 그 wrapper 클래스의 first/last-child 에 접근하여 속성을 적용하여 문제를 해결하였다..
   
   참 재미있는 css이다.. 이러한 css 기본 내공을 쌓는게 중요하다는 생각이든다. 아래의 사이트가 기본적인 내용에 대해 자세히 나와 있어 정독하고, 정리 글을 남겨야 겠다.
   
   css 선택자 정리 잘되어있는 사이트: https://www.nextree.co.kr/p8468/


 - 첫글자에만 CSS로 색상 넣기

 ::first-letter 의사 클래스로 첫글자만의 색상을 넣을 수 있다.

 cf) 의사 클래스: CSS에서 의사클래스는 선택하고자 하는 HTML 요소의 특별한 '상태(state)'를 명시할 때 사용한다.


 그런데 내가 원한 건 마지막 글자에만 색상을 넣는 것이였기에, first-letter의 반대 속성인 last-letter 같은 의사클래스를 찾아보았는데,, 존재하지 않았다..

 이를 해결하기 위해서 unicode-bidi: bidi-overide로 텍스트 방향(좌->우, eg) cake )을 반대 방향(우->좌, eg) ekac)으로 설정한다. 이 때, direction: rtl; 과 함께 설정해야한다. 이렇게 하여서 거꾸로 된 단어의 첫번째 글자에 속성을 적용하고 이 글자를 위 속성으로 뒤집게 되면 마지막 글자에 CSS를 적용하는 효과를 얻을 수 있다.

 그런데.. 내가 css로 색상을 넣고 싶었던 문자는 * 이 별표 친구였는데, * 친구는 좀 뭔가 이상했다.. 

 title * 에서 * 에 색상을 넣기 위해 '* eltit'의첫 글자에 색상을 넣은 후 뒤집으려고 했으나.. 색상 적용이 생각처럼 되지 않았다. * 는 띄어쓰기 없이 다른 글자가 붙어 있어야만 *와 그 붙어있는 글자의 색상을 변경할 수 있었다.. 결론적으론 * 하나에만 색상을 적용할 수 없었다..

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



