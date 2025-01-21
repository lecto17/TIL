## 일렉트론
![Image](https://github.com/user-attachments/assets/4efa56bc-d624-4b87-954f-fe5f1eac8074)

### 작동 방식
 - 일렉트론에는 두가지 프로세스 존재: 메인(Main) 프로세스와 렌더러(Renderer) 프로세스.
 - 일렉트론 앱은 단 하나의 메인 프로세스를 가지며, Node.js 기반으로 동작하고 여러 렌더러 프로세스들을 관리한다.
 - 각각의 렌데러 프로세스는 서로 독립적으로 작동한다.
 - 메인 프로세스는 ipcMain 이라는 IPC 모듈을 통해, 렌더러 프로세스는 ipcRenderer 라는 IPC 모듈을 통해 메인 프로세스와 렌더러 프로세스가 통신이 이뤄지도록 한다.
   ![Image](https://github.com/user-attachments/assets/d3fbd2b0-4e36-4b0e-94af-e9ebaba5bb3b)
   
 - IPC(Inter-Process Communication)란 프로세스간(Main <-> Renderer) 통신을 의미
 - IPC는 `on`을 통해 메시지 또는 이벤트를 수신하고, `send`를 통해 메시지 또는 이벤트를 전달한다.
 - ipcMain에서는 `send`가 아닌 reply로 회신하거나, webContents의 send를 사용하여 회신한다.

### 구성 요소
 - 화면을 그리기 위해선 '렌더러 프로세스'를 생성해야하는데, 이 렌더러 프로세스는 대표적으로 BrowserWindow 객체를 사용하여 생성한다.
```
  const { BrowserWindow } = require('electron');
  const win = new BrowserWindow({ width: 800, height: 600 });
```

 - BrowserWindow 객체는 여려 속성들을 제공하는데, 그중 webContents라는 것이 있다.
 - 이 webContents는 EventEmitter를 상속받기 때문에 렌더러 프로세스에서 발생하는 여러 이벤트를 감지할 수 있다.

 - 화면을 그리는 또다른 방법으로 BrowserView 객체를 사용하는 것이다. 
 - 위에서 언급했던 BrowserWindow는 하나의 윈도우 창을 의미하며, 렌더러 프로세스에서의 가장 큰 단위이다.
 - 경우에 따라 BrowserView를 사용하지 않고, BrowserWindow만으로도 프로그램을 충분히 구성 가능하다.
 - 그런데..!! 하나의 윈도우 안에서 여러 영역을 나눠 표현해야하는 경우, 'BrowserView'를 사용할 수 있다.
 - BrowserWindow를 통해 렌더러 프로세스를 생성하는 경우에는 높이, 넓이를 설정해야하지만 BrowserView는 높이, 넓이, BrowserView를 그릴 BrowserWindow의 특정 위치 또한 지정해줘야한다.

### 프로세스 간 상태 공유
 - 하나의 윈도우(BrowserWindow) 안에 여러 개의 뷰(BrowserView)를 구성한다는 것은 하나의 화면에 여러 개의 브라우저를 띄우는 것과 동일하다. 
 - 하지만 각각의 뷰는 독립적으로 존재하기에 A뷰의 상태 값은 B뷰에서는 알 수 없다.
 - 특정 뷰의 상태 값 혹은 상태 값의 변화는 자신을 제외한 다른 뷰에 전달하는 동작을 통해 공유한다.
 - 각각의 렌더러 프로세스는 독립적으로 동작하기 때문에, BrowserWindow와 BrowserView 같은 렌더러 프로세스 간의 직접적인 통신이 불가능하다.
   ![Image](https://github.com/user-attachments/assets/f461be3e-27c8-4eb3-9713-30e24ab47274)
   
 - 이러한 상황으로 인해 뷰 간의 상태 값을 공유하기 위해선 메인 프로세스를 사용해야 한다.
   ![Image](https://github.com/user-attachments/assets/5d00a417-3543-4bb3-9f4b-0a46865c06a0)
