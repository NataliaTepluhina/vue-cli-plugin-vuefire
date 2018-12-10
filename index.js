module.exports = (api) => {
  api.chainWebpack(config => {
    config.module
      .rule('firebaserc')
      .test(/\.firebaserc$/)
      .use('json-loader')
        .loader('json-loader')
        .end()
  })
 }