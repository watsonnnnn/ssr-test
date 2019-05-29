const Vue = require('vue');
const App = require('./App.vue');
const createRouter = require('./router');
const createStore = require('./store');
const { sync } = require('vuex-router-sync');

module.exports = function createApp(context){
  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = new Vue({
    data: {
      url: context.url
    },
    router, 
    store,
    // template: `<div>访问的 URL 是： {{ url }}123<router-view></router-view></div>`
    render: h=>h(App)
  })

  return {app, router, store};
}
