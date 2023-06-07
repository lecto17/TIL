## git clone 시 동일 repo 다른 branch clone 할 때

  * https://icerabbit.tistory.com/69

    - 위 사이트에서 소개된 내용대로 -b 옵션으로 브랜치에 있는 내용을 가져오되 repo의 이름을 다른 이름으로 재지정해주면 같은 repository의 다른 브랜치의 내용을 local로 가져올 수 있다.

    ```
      eg)
      
        1) git clone git:url~~

	2) git clone -b git:url~~ DIR_NAME 

    ```

## git reset --hard 명령어로 파일 날려버린 일..

  * 특정 시점으로 파일을 전부 되돌리려고 하여 위 명령어를 실행했다.

    - 결과, 특정 시점으로 프로젝트를 돌렸지만, 작업 중이던 파일들도 깨끗이 사라졌다....

    - 이러한 참사를 되돌리고자 검색 중, git reflog 명령어로 HEAD 목록을 확인하고 그 목록 중에 원하는 시점의 HEAD 번호로 git reset --hard(지웠던 내용을 다시 지우는 꼴)를 통해 복구할 수 있다고 한다.

    - 하지만, 이 방법이 유효하려면 commit이 되어 있어야 한다는 전제가 있다..

    - 결국, commit 이 되지 않은 파일이 날아간 상황에서 해당 파일들을 복구할 수 있는 방법이 없었다..

    - 그러다 vscode에 자체적으로 지원하는 TIMELINE 기능으로 특정 파일들에 대해 저장된 내역을 확인할 수 있다는 동료의 말을 듣고 날아갔던 파일들을 복구할 수 있었다.

    - 함부로 git reset --hard 사용하지 말 것, 커밋을 자주할 것..
