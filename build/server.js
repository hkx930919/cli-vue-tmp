/**
 * 使用node api跑webapck
 */

const express = require('express')
const webpack = require('webpack')
const Merge = require('webpack-merge')
const webpackDevConfig = require('./webpack.dev')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const path = require('path')
const OpenBrowserPlugin = require('open-browser-webpack-plugin') // 打开浏览器
const portfinder = require('portfinder') // 自动寻找可用端口
const { success, error, info, getPages } = require('./webpack.util.js')

let port = 3001
portfinder.basePort = port
portfinder.getPort((err, p) => {
  if (err) {
    error(err)
  } else {
    // 在进程中存储下当前最新端口
    port = p
    success(p)
    // 把 module.exports 中逻辑放在里面来
    const app = express()
    info('正在启动。。。')
    const compiler = webpack(
      Merge(webpackDevConfig, {
        plugins: [
          new OpenBrowserPlugin({
            url: `http://localhost:${port}/${getPages()[0]}.html`
          })
        ]
      })
    )
    const devMiddleware = webpackDevMiddleware(compiler, {
      publicPath: '/',
      noInfo: true,
      hot: true,
      quiet: true,
      // stats: { colors: true }
      stats: 'minimal'
    })
    const hotMiddleware = webpackHotMiddleware(compiler, {
      noInfo: true,
      log: false
    })
    const staticPath = path.posix.join('/', 'static')

    app.use(staticPath, express.static(path.posix.join(__dirname, '../static')))
    app.use(devMiddleware)
    app.use(hotMiddleware)
    app.listen(port, err => {
      err && error(err)
      success(`http://localhost:${port}`)
    })
  }
})
