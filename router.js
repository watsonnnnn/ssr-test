const Vue = require('vue')
const Router = require('vue-router')

Vue.use(Router)

export function createRouter(){
  const router = new Router({
    mode: 'history',
    routes: [{
      path: '/home',
      component: {
        template: '<div>home</div>'
      }
    },{
      path: '/login',
      component: {
        template: '<div>login</div>'
      }
    }]
  })

  return router;
}