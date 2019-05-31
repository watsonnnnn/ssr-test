const Vue = require('vue');
const Router = require('vue-router');

Vue.use(Router);
module.exports = function createRouter(){
  const router = new Router({
    mode: 'history',
    routes: [{
      path: '/home',
      component: () => import('./components/Bar.vue')
    }, {
      path: '/login',
      component: {
        template: '<div>login</div>'
      }
    }, {
      path: '/item/:id',
      component: () => import('./components/Item.vue')
    }]
  })

  return router;
}