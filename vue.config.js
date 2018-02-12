module.exports = {
  lintOnSave: true,
  configureWebpack: {
    plugins: [
      new PrerenderSpaPlugin(
        path.join(__dirname, '../dist'),
        ['/'],
      ),
    ],
  },
};
