const { path } = require('@vuepress/shared-utils')

const defaultConfig = {
  open: true,
  key: undefined,
  dev: false
}

module.exports = (options = {}, context) => ({
  define () {
    const BAIDU_ID = options.key
    if (!BAIDU_ID) {
      console.warn('warn: vuepress-plugin-baidu-tongji-analytics: config key is empty,the statistical data will not take effect')
    }
    return {
      BAIDU_TONG_JI_CONFIG: Object.assign(defaultConfig, options)
    }
  },
  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
})
