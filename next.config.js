const withManifest = require('next-manifest');
const withSass = require('@zeit/next-sass');
const compose = require('next-compose');

const manifestConfig = {
  manifest: {
    output: './public/', // The folder where the manifest will be generated.
    name: 'PWA',
    icons: [
      {
        "src": "/public/icons/dp256x256.png",
        "sizes": "256x256",
        "type": "image/png"
      },
      {
        "src": "/public/icons/dp512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  }
};

const sassConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: "508b-[path][hash:base64:16]", //[name][local]
  }
};

module.exports = compose([
  [withManifest, manifestConfig],
  [withSass, sassConfig],
  {
    poweredByHeader: false,
    webpack: function(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })
      return config
    }
  }
]);