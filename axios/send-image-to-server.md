* FormData

client에서 업로드한 사진을 서버로 전송하는 업무를 하며 오랜 시간을 빼앗겨 해당 업무 내용을 정리하고 넘어가려고 한다.

진행했던 작업 내용은, 사용자가 업로드한 이미지와 각종 텍스트 데이터(문의 내용)를 서버로 넘기는 것이였다.

그런데 특이하게도, post로 데이터를 넘겼어야 하는데, 이미 프로젝트 내에서 post로 넘겨야할 데이터들을 get으로 넘기고 있었고, 이러한 이유가 cors 문제로 get으로 넘기고 있다는 말을 들었다. 그래서 post로 보내야할 데이터들을 get으로도 보낼 수 있다는 것을 알게 되었다.

그래서 사용자가 업로드한 이미지와 텍스트 데이터(문의 내용)를 get으로 전달하려고 했다. 그래서 file 객체인 이미지들을 서버로 넘기기 위해서는 base64 형태로 변환 후에 보내야 한다는 것을 듣고, 해당 형태로 변환 후 서버에 전달하였다.

하지만 이떄, 414 Request-URI Too Large 라는 에러를 받게 되었는데, get으로 요청하는 URI가 너무 길어서 발생하는 문제였다. 

이에 대한 해법으로는 서버에서 받는 URI 길이를 늘려주는 것이였다. 8k까지 늘려줘서 받으면 왠만한 것들을 커버된다고 하였는데, 내가 보내는 파일은 1MB 여서 이 방법으로는 택도 없다는 것을 알게 되었다.

<br/>
참고사이트)
  
  - cf) https://dreamsh19.github.io/nginx/Nginx-414-Request-URI-Too-Large/

  - cf) https://blog.asamaru.net/2015/12/02/nginx-414-request-uri-too-large/

  - cf) https://sub0709.tistory.com/175

<br/>
이후 서버 담당자 분께 post로 요청할 때 발생하는 이슈에 대해 말씀드렸고, 이 작업을 하기 위해서 js 내장 객체인 FormData를 사용하면 된다는 것을 알게 되었다. 이 formData에 이미지만 append하여 보냈던 적이 있는데, 이 formData에 서버로 보낼 데이터 전부를 append하여 axios.post(url, formData, { headers: { "Content-Type": "multipart/form-data" } })로 보내 위 문제를 해결할 수 있었다.

<br/><br/>
참고사이트)
  
  - cf) https://stackoverflow.com/questions/54519998/upload-multiple-file-with-vue-js-and-axios

<br/>
 * FormData란?
<br/><br/>
  MDN 정의
  
  <i>FormData 인터페이스는 form 필드와 그 값을 나타내는 일련의 key/value 쌍을 쉽게 생성할 수 있는 방법을 제공합니다. 또한 XMLHttpRequest.send() (en-US) 메서드를 사용하여 쉽게 전송할 수 있습니다. 인코딩 타입이 "multipart/form-data"로 설정된 경우, form에서 사용하는 것과 동일한 포맷을 사용해야 합니다.</i>
  
  FormData는 ajax로 폼 전송을 가능하게 해주는 객체이다. 서버로 파일이나 이미지를 전송할 때 비동기로 전송(페이지 전환 없이)하고 싶은 경우에 FormData를 사용한다고 한다. HTML5의 <form> 태그를 대신하여 전송 방식은 ajax의 비동기 방식을 사용하고 전송 데이터 포맷은 json이 아닌 form의 포맷이라고 할 수 있다고 한다.
 
참고사이트)
  
  - cf) has/get/getAll/keys/values/entries/delete 와 같은 FormData 함수
  
  - cf) https://inpa.tistory.com/136
  
  - cf) https://2ham-s.tistory.com/307

<br/>
이 FormData에 API 서버에서 필수적으로 받는 데이터들을 key, value 형태로 담아 서버에 보내주어 위 작업을 해결할 수 있었다.

 eg) 
    
    let formData = new FormData();
    formData.append('API에서 받는 키', 해당하는 값);
    
    -> formData.append('userIdx', 12);

formData에 정상적으로 값들이 들어갔는지 확인하기 위해서는 아래의 코드로 확인하면 알 수 있었다.

  formData 내에 정상적으로 데이테가 append 됬는지 확인하는 방법)

    for (let k of formData.entries()) { // for문 안에 있는 조건은 let k of formData 와 같은 표현이라고 한다.
       console.log(k[0], ', ', k[1]);
    }

