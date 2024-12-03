* failed to push some refs to 'https://github.com/~.git' 에러

  - 위 오류는 깃헙에서 readme.md 파일을 생성한 후 local에서 pull을 안 한 상태로 작업을 진행했기 때문에 발생한다.

  - 해결방법은 아래와 같다.

  ```
    1) git push -u origin master 

    2) git pull origin master

    3) git push -f origin master // 기존의 commit 이력을 강제로 덮어씌운다
  ```
