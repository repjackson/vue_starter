module.exports = {
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

