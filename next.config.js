/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// next.config.js
const withSvgr = require('next-plugin-svgr');

module.exports = {
  ...withSvgr({
  }),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.figma.com',
      },
      {
        protocol: 'http',
        hostname: 'admin.zagorod-style.ru',
      },
      {
        protocol: 'http',
        hostname: 'zagorod-style.ru',
      },
    ],
  },
};
