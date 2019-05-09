/**
 * 项目配置页
 */
module.exports = {
  /**entry 可以为string,数组,如果为false类型，那么读取项目目录
   *   entry: 'example'
   *   entry: ['example1','example2']
   */
  entry: 'example',
  px2rem: {}, //是否将px转成rem 可以配置成对象来配置postcss-pxtorem,
  H5: true //h5页面，引入rem
}
