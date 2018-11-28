module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/my-project/' : '/',
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

