const PrerenderSpaPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    plugins: [
      new PrerenderSpaPlugin(path.join(__dirname, './dist'), ['/'], {
        indexPath: path.resolve('./dist/index.html'),
      }),
    ],
  },
};
