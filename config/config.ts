// const adaptive = require('postcss-adaptive')
// const postcss = require('postcss')
export default {
  publicPath: '/static/',
  hash: true,
  history: {
    type: 'hash'
  },
  //配置代理
  proxy: {
    '/ump': {
      // target: "http://dip.cnsuning.com/service/1554195603164/2020.05.13",
      target: 'http://cmpppre.cnsuning.com', //pre环境
      changeOrigin: true,
      pathRewrite: { '^/ump': '' }
    },
    '/authStatus': {
      target: 'http://cmpppre.cnsuning.com', //sit环境
      changeOrigin: true
    }
  },

  cssLoader: {
    localsConvention: 'camelCase'
  }

  // routes: [
  //   { path: '/', component: './TestPage/index.tsx' },
  //   { path: '/TestPage', component: './TestPage/index.tsx' },
  //   { path: '/404', component: '404' }
  // ]
}
