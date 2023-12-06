// next.config.js
const withSvgr = require('next-plugin-svgr');

module.exports = {
  ...withSvgr({
    // Ваши настройки для next-plugin-svgr
  }),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.figma.com',
      },
    ],
  },
  // Другие настройки...
};
