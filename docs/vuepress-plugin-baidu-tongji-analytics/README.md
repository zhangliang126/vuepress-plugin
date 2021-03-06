# vuepress-plugin-baidu-tongji-analytics 百度统计


[![GitHub issues](https://img.shields.io/github/issues/zq99299/vuepress-plugin.svg)](https://github.com/zq99299/vuepress-plugin/issues) [![GitHub issues](https://img.shields.io/github/issues-closed/zq99299/vuepress-plugin.svg)](https://github.com/zq99299/vuepress-plugin/issues?q=is%3Aissue+is%3Aclosed) [![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://raw.githubusercontent.com/zq99299/vuepress-plugin/master/LICENSE) [![npm](https://img.shields.io/npm/v/vuepress-plugin-baidu-tongji-analytics.svg)](https://www.npmjs.com/package/vuepress-plugin-baidu-tongji-analytics) [![npm](https://img.shields.io/npm/dt/vuepress-plugin-baidu-tongji-analytics.svg)](https://www.npmjs.com/package/vuepress-plugin-baidu-tongji-analytics)

适用于 [vuepress](https://vuepress.vuejs.org/zh/plugin/using-a-plugin.html) 的百度统计分析插件

## Install

```bash
yarn add vuepress-plugin-baidu-tongji-analytics
# OR 
npm install vuepress-plugin-baidu-tongji-analytics
```

> open npm : https://www.npmjs.com/package/vuepress-plugin-baidu-tongji-analytics

## Usage

```javascript
module.exports = {
  plugins: [
    ['vuepress-plugin-baidu-tongji-analytics', {
      key: 'xxxxx'
    }]
  ]
}
```

## Options
- key: 在百度统计中心申请的 key
    - Type: string
    - Default: undefined
    
    ![image-baidukey](https://github.com/zq99299/vuepress-plugin/blob/master/vuepress-plugin-baidu-tongji-analytics/docs/assets/image-baidukey.png?raw=true)

- open: 是否打开统计功能
    - Type: boolean
    - Default: true
    
- dev: 是否在开发模式下生效
    - Type: boolean
    - Default: false
    
    想在你本地预览笔记的时候也生效统计功能，则设置为 true

## FAQ
- 百度统计中心，检查代码安装失败？

  这个原因很多种，常见的如下：
  1. 亲测，`**.github.io` 域名会检测失败，原因应该是限制了程序的抓取
  
  如果是部署在自己服务器上，出现这种问题，请提交 issues，我会帮你解决
