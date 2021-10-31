** vue-chart

참조: https://jeongwooahn.medium.com/vue-js-%EC%97%90%EC%84%9C-%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%B0%A8%ED%8A%B8-%EC%B6%94%EC%B2%9C-4390f704bc7b


참조한 블로그에서 추천하는 차트 라이브러리 선택 기준

 1. 필요한 모듈만 사용할 수 있는 경우

   - 좋은 차트 라이브러리일 수록 라이브러리의 무게↑

   - 쪼개서 사용할 수 있는 경우 라이브러리의 무게가 무거워도 OK

   - SPA 프로젝트의 경우 규모가 커질 때 무거워지는 형상에 민감

   - 특정화면에서 필요한 특정 모듈만 가져다 사용하는 것이 Good


 2. 사용자 생태계가 큰 경우

   - 개발하는 과정 중, 특히 커스텀하여 사용하는 중 발생하는 이슈 해결에 용이


 3. 지원하는 차트 형태가 많지 않아도 차트의 설정과 옵션을 섬세하게 조정할 수 있는 경우


* 추천 library

 1. Chart.js(http://www.chartjs.org/)

   - 무료/완전 오픈 소스

   - JS/HTML5/Canvas 기반

   - 캔버스 기반으로 빅데이터  처리에 용이

   - 사용에 용이

   - 필요한 모듈만 사용 가능

   - 반응형 지원


 2. Google Charts(https://developers.google.com/chart/interactive/docs/)

   - 무료

   - JS/HTML5/SVG기반

   - 필요한 모듈만 사용 가능

   - Vue-google charts에서 반응형 지원

