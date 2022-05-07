<b>react를 하며 겪은 실수들을 올립니다.</b>

* removeEventListener 관련

  - useEffect에서 조건에 따라 listener를 추가하고 삭제해줘야 했었는데, 아무리 removeEventListener를 해도 삭제 되지 않는 상황이였다. 

  ```
  const someFunc = () => {
     ...
  };

   useEffect(() => {
      if (조건) {
        window.addEventListener("click", someFunc);
      } else {
        window.removeEventListener("click", someFunc);
      }
   }, []);
  ```

  - 찾아보니 someFunc가 동일한 함수로 인식되지 않는 것이였다. 즉 someFunc가 계속해서 생성되어 다른 함수로 인식되고 있는 상황이 문제였다.

  그래서 <b>해당 함수인 someFunc를 useCallback으로 감싸주어 함수가 재생성 되는 것을 방지하여</b> 정상적으로 이벤트를 remove 할 수 있었다.

  cf) https://owldev.netlify.app/react/removeeventlistener/
