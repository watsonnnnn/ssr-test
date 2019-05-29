// const Vue = require('vue')
// const server = require('express')()
const Vue = require('vue');
const express = require('express');
const createApp = require('./entry-server');

const server = express();
const { createBundleRenderer } = require('vue-server-renderer');
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(serverBundle, {
  template: require('fs').readFileSync('./template.html', 'utf-8'),
  clientManifest
})

server.get('*', (req, res) => {
  if(req.url == '/favicon.ico' || req.url.indexOf('.js')>-1){
    res.end();
    return;
  }
  const context = { url: req.url }
  
  createApp(context).then(app => {
    res.set('Content-Type', 'text/html;charset=utf8');
    renderer.renderToString(app, (err, html) => {
      if (err) {
        console.log(err)
        if (err.code === 404) {
          res.status(404).end('Page not found');
        } else {
          res.status(500).end('Internal Server Error 500 中文');
        }
        return
      }
      res.end(html)
    })

  })
})

server.listen(8088, ()=>{
  console.log('server is listening on 8088')
})