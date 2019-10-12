/**
 * 使用node api跑webapck
 */

const express = require('express')
const webpack = require('webpack')
const webpackDevConfig = require('./webpack.dev')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const path = require('path')
const {success,error,info} = require('./webpack.util.js')

const port = webpackDevConfig.devServer.prort||3000
const app = express()
info('正在启动。。。')
const compiler = webpack(webpackDevConfig)
const devMiddleware = webpackDevMiddleware(compiler,{
  publicPath: '/',
  noInfo: true,
  hot: true,
  quiet: true,
  // stats: { colors: true }
  stats: 'minimal'
})
const hotMiddleware = webpackHotMiddleware(compiler,{
  noInfo: true,
  log: false
})
const staticPath = path.posix.join('/', 'static') 

app.use(staticPath,express.static(path.posix.join(__dirname,'../static')))
app.use(devMiddleware)
app.use(hotMiddleware)
app.listen(port, err => {
  err && error(err)
  success('http://localhost:' + port)
})