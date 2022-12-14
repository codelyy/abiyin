const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  webpack: {
    alias: {
      '@': resolve('./src'),
      component: resolve('./src/component'),
    },
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
