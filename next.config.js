const withManifest = require('next-manifest');

module.exports = withManifest({
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
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
});