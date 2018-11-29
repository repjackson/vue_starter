module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
  disableHostCheck: true
  },

  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: true
    }
  }
}

