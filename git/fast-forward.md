*Fast-forward merge(빨리감기 병합)이란?

분명.. master의 최신 기능들이 적용된 브랜치를 pull로 땡겨왔는데,,

fast-forward 라는 문구가 뜨면서 이전의 내용을 가져오지 못했던 걸까?

이 문제로 야근을 하게 되어, 이 문제를 집고 넘어가보려고 한다.

문제의 상황을 아래에 첨부한다..

![image](https://user-images.githubusercontent.com/53415000/146195796-9aba8591-af2e-4889-972e-a781feaacaea.png)

문제는 분명히 master 브랜치에 병합된 최신 코드를 pull하고 내가 개발한 브랜치를 merge-request를 보냈는데.. 최신 기능이 들어가 있지 않았던 것이였다..

이 상황의 원인을 fast-forward 라고 생각했는데,, 

상황을 되돌아보면서.. fast-forward가 문제가 아니였음을 알게 됬다..

대신, 문제는 아주 기초적인.. push를 안날리고, merge-request를 한 것이였다.. pull, push를 수시로 하는 습관을 갖자..
