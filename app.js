import Vue from 'vue';
// import App from './App.vue';
import {createRouter} from './router';

export default function createApp(context){
  const router = createRouter();
  const app = new Vue({
    data: {
      url: context.url
    },
    router, 
    template: `<div>访问的 URL 是： {{ url }}123<router-view></router-view></div>`
    // render: h=>h(App)
  })

  return {app, router};
}
