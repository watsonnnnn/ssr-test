// const Vue = require('vue')
// const server = require('express')()
import Vue from 'vue';
import express from 'express';
import createApp from './entry-server';

const server = express();
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./template.html', 'utf-8')
})

server.get('*', (req, res) => {
  const context = { url: req.url }
  
  createApp(context).then(app => {

    renderer.renderToString(app, (err, html) => {
      if (err) {
        res.status(500).end('Internal Server Error 500')
        return
      }
      res.set('Content-Type', 'text/html;charset=utf8').end(html)
    })

  })
})

server.listen(8088, ()=>{
  console.log('server is listening on 8088')
})