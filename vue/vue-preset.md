** vue preset (참조 - https://vuedal.tistory.com/6)

    - vue CLI 프리셋이란 미리 정의된 옵션과 플러그인을 포함하는 JSON 객체

    - vue create로 프로젝트를 생성할 때마다 프롬프트 창으로 옵션과 플러그인을 설정하는데 매번 할 필요 없이 프리셋으로 만들어 놓고 재사용하면 된다.

    - 프리셋 데이터를 보고 플러그인 generator가 프로젝트 파일들을 생성

    - Remote Presets

      - git 저장소에 프리셋을 퍼블리시하고 다른 개발자들과 공유 가능

      - 저장소에는 다음 파일들을 포함할 수 있다.
      
        1. preset.json: (필수) 프리셋 데이터를 가진 파일

        2. generator.js: Generator가 프로젝트 파일들을 주입하거나 수정한다.

        3. prompts.js: prompts 파일은 generator를 위한 설정들을 가지고 있다.

      - git 저장소에 저장된 프리셋은 다음 명령어로 사용 가능

        `vue create --preset username/repo my-project`
