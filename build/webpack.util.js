const path = require('path')
const fs = require('fs')
const { PAGES_DIR } = require('./const')
const { entry } = require('../hkx.config')
// const cwd = process.cwd()

// 获取文件夹名称
function getPages() {
  let pages
  if (entry) {
    if (Array.isArray(entry)) {
      pages = entry
    } else {
      pages = [entry]
    }
  } else {
    pages = fs.readdirSync(PAGES_DIR).filter(dir => {
      console.log('*******')
      console.log(path.join(PAGES_DIR, dir, 'main.js'))
      console.log('*******')
      let filePath = path.join(PAGES_DIR, dir, 'main.js')
      if (!fs.existsSync(filePath)) {
        filePath = `${filePath}x`
      }
      if (!fs.existsSync(filePath)) {
        return false
      }
      return true
    })
  }
  return pages
}
module.exports = {
  getPages
}
