module.exports = {
  lintOnSave: true,
  configureWebpack: {
    plugins: [
      new PrerenderSpaPlugin(
        // Path to compiled app
        path.join(__dirname, '../dist'),
        // List of endpoints you wish to prerender
        ['/'],
      ),
    ],
  },
};
