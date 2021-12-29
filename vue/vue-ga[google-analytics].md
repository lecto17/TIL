* Vue에 GA(Google Analytics)

  프로젝트에 Google Analytics를 붙이라고 하시고, 참고하라는 사이트(https://velog.io/@bluestragglr/Vue.js%EC%97%90-Google-Analytics-%EB%B6%99%EC%9D%B4%EA%B8%B0)까지 친절하게 알려주셔서 해당 작업을 하게 되었다.

  작업을 하며 사이트에서는 vue-analytics라는 라이브러리를 사용하여 GA version 3를 붙여놓았지만, vue-analytics 라이브러리를 통해 현재 사용되는 GA 4에서 사용하는 'G-XXXXXX'라는 특성을 할 수없다고 나와 있었으며, 추후 포스팅을 한다고 하여 GA 4를 지원하는 vue 라이브러리를 다시 서칭하게 되었다.

  서칭을 하며 GA 4를 지원하는 vue-gtag 라이브러리를 확인하여 이 라이브러리를 사용하게 되었다. vue-analytics와 vue-gtag를 사용하는 방법은 크게 달라진 점은 없었고(아래 코드1,2 참고), 단지 Google Analytics 4 속성으로 추가된 'G-XXXXXX' 속성 사용 유무만 있었다.(GA 4에서는 기존의 GA Universal Application('UA-xxxxxx')속성도 사용할 수 있었다.)
  
  ```
    코드1
    // src/main.js
    
    import VueAnalytics from "vue-analytics";
    
    Vue.use(VueAnalytics, {
      id: 'UA-XXXXXX',
      router // 원활한 트래킹을 위해서는 router를 반드시 바인딩 해야한다고 한다.
    });
  ```
  
  ```
    코드2
    // src/main.js
    
    import VueGtag from "vue-gtag";
    
    Vue.use(VueGtag, {
      config: { id: G-XXXXXX }
    });
  ```

  그런데,, 위 작업을 프로젝트에 붙여도 계속해서 발생하는 오류로 인해, 프로젝트를 vue가 아닌 vite으로 구성했다는 생각을 하게 됬고, 이 vite에서 지원하는 라이브러리인 vite-plugin-radar를 사용하게 되었다.

  이 라이브러리는 위 라이브러리들과는 다르게 main.js에서 라이브러리를 추가하지 않고, vite.config.js 파일에서 plugin 속성에 등록한 후 사용할 수 있었다.
  
  ```
   // vite.config.js
   
   import { defineConfig } from "vite";
   import vue from "@vitejs/plugin-vue";
   
   export default defineConfig({
    css: {
      preprocessorOptions: {
        scss: {          
        },
      },
    },
    plugins: [vue(), ViteRadar({ analytics: { id: "G-XXXXXX" } })],
    build: {
      rollupOptions: {
        plugins: [],
      },
    },
  });
  ```

  그리고 프로젝트에 GA가 붙여졌는지 확인하기 위해서는 위 사이트에서 말한 방법으로 확인할 수 있는데 크롬 extension( https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=ko )를 추가하여 확인할 수 있다.
