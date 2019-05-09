const { px2rem } = require('./hkx.config.js')
const plugins = [require('autoprefixer')]
if (px2rem) {
  plugins.push(
    require('postcss-pxtorem')(
      Object.assign(
        {
          propList: ['*']
        },
        px2rem,
        { rootValue: 37.5 }
      )
    )
  )
}
module.exports = {
  plugins
}
