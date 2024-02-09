/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
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
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        port: '',
        pathname: '/api/character/avatar/**',
      },
    ],
  },
  // Другие настройки...
};
