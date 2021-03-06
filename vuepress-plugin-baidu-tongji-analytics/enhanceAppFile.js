export default ({ router }) => {
// baidu analytics integration
  if (!BAIDU_TONG_JI_CONFIG) {
    return
  }
  if (!BAIDU_TONG_JI_CONFIG.open) {
    return
  }
  if (!BAIDU_TONG_JI_CONFIG.key) {
    return
  }
  let install = false

  if (BAIDU_TONG_JI_CONFIG.dev) {
    install = true
  }

  if (process.env.NODE_ENV === 'production') {
    install = true
  }
  if (!install) {
    return
  }
  if (typeof window !== 'undefined') {
    (function (i, s, o, g, a, m) {
      a = s.createElement(o)
      m = s.getElementsByTagName(o)[0]
      // a.async = 1
      a.src = g
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://hm.baidu.com/hm.js?' + BAIDU_TONG_JI_CONFIG.key)

    router.afterEach(function (to) {
      if (typeof _hmt != 'undefined') {
        if (_hmt) {
          _hmt.push(['_trackPageview', to.fullPath])
        }
      }
    })
  }
}
