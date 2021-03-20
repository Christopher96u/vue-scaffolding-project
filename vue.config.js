module.exports = {
  "pluginOptions": {
    "apollo": {
      "lintGQL": true
    }
  },
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000,
    },
    overlay: {
      warnings: true,
      errors: true
    },
  },
  productionSourceMap : false,
}
