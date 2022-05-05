/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
};

const { i18n } = require('./next-i18next.config');

module.exports = { ...nextConfig, i18n };
