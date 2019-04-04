const Vue = require('vue')
const server = require('express')()
// import Router from 'vue-router'
const Router = require('vue-router')

Vue.use(Router)

const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./template.html', 'utf-8')
})

server.get('*', (req, res) => {
  const router = new Router({
    mode: 'history',
    routes: [
    ]
  })

  const app = new Vue({
    data: {
      url: req.url
    },
    router,
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.set('Content-Type', 'text/html;charset=utf8').end(html)
  })
})

server.listen(8080, ()=>{
  console.log('server is listening on 8080')
})