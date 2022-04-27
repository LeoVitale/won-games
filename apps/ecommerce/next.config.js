/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withNx = require('@nrwl/next/plugins/with-nx');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = withPWA(
  withNx({
    nx: {
      // Set this to true if you would like to to use SVGR
      // See: https://github.com/gregberge/svgr
      svgr: false
    },
    pwa: {
      disable: !isProduction,
      dest: 'public',
      runtimeCaching
    },
    swcMinify: true,
    compiler: {
      styledComponents: true
    }
  })
);
