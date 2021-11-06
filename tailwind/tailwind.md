* tailwind 속성

   - tailwind8 버전: cf) https://tailwindcss.com/docs/just-in-time-mode

   - bottom-full

   - inset-x-0

   - justify-end <=> justify-content: flex-end

    컨테이너 최하단으로 정렬(오른쪽으로도 정렬을 할 수 있나 봄)

    https://ipex.tistory.com/entry/CSS3-flex-Box-justifycontent-alignitems

    ![flex-end_start_center](/uploads/bac98ba87ee35a451b3d8703c39326a4/flex-end_start_center.png)

   - space-(between, around, evenly, stretch)차이

   cf) https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content

   - object-cover

   - col-start-(), col-end-(), row-start-(), row-end-() 해석..

   - flex-shrink-0: 자동으로 아이템 너비가 축소되지 않기 위한 것.

    cf) https://blogpack.tistory.com/863

   - flex-basis

    cf) https://developer.mozilla.org/ko/docs/Web/CSS/flex-basis

   - aspect-ratio: https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio

    /* offset-x | offset-y | blur-radius | *`spread-radius`* | color */

     `box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);`

     `<spread-radius>`:   

     1px는 length 값입니다. 양수 값은 그림자가 더 커지고 확산하며, 음수 값은 그림자가 줄어듭니다. 기본값은 0(그림자와 요소 크기 동일)입니다.

   - mx-4: margin을 x축으로만 준다.

      - margin을 x축으로만(left, right) 준다.

      - 4: 0.25 * 4 => 1rem

        ex) mx-5: 1.25rem (margin-right, margin-left에만)
   
   - tailwind 클래스 예시
   
     /* width */

      w-full <=> width: 100%

      w-screen <=> width: 100vw;

      w-min <=> width: min-content;

      w-max <=> width: max-content;

      <br/>

     /* height */

      h-full <=> height: 100%

      h-screen <=> height: 100vh;

      <br/>

   - tailwind.config.js 설정 파일
      

   - tailwind css 세팅

      - `npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`을 통해 tailwind 설치

      - postCSS8을 아직 지원하지 않기에 postCSS 버전7을 지정하여 설치

   - tailwind purge 사용하기

      - tailwind는 17만 줄 이상으로 작성되어 있어 3.5MB 크기

      - 이러한 환경으로 인해 purge 플러그인을 기본적으로 내장

      - purge는 HTML 파일에서 사용하지 않는 클래스들을 CSS 파일에서 제거해 주는 역할

      - purge는 tailwind에 내장된 플러그인을 사용해도 되고, PostCSS 플러그인으로 설치하여 사용해도 가능

   - tailwind와 postCSS의 관계

      - tailwind CSS에는 CSS 파일을 처리하고 사용된 지시문과 tailwind 구성에 따라 tailwind CSS 코드가 삽입되었는지 확인하는 빌드 프로세스가 필요

      - 빌드 프로세스를 설정하는 한 가지 옵션으로 PostCSS를 사용 가능

      - PostCSS는 JavaScript로 CSS를 변환하는 도구이며 플러그인과 함께 작동하여 tailwindCSS PosttCSS 플러그인을 사용하여 tailwindCSS 처리 단계를 쉽게 수행 가능

   - postCSS

   - autoprefixer

      - CSS 코드를 구문 분석하고 공급 업체 접두사(..?)를 추가한다.

   <br/>
