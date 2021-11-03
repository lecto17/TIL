* tailwind 속성

   - mx-4: margin을 x축으로만 준다.

      - margin을 x축으로만(left, right) 준다.

      - 4: 0.25 * 4 => 1rem

        ex) mx-5: 1.25rem (margin-right, margin-left에만)


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
