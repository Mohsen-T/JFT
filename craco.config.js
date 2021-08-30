const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@groot': path.resolve(__dirname, 'src/app/'),
    },
  },
  plugins: [
    {
      plugin: require('craco-plugin-scoped-css'),
    },
  ],
};
