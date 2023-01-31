module.exports = {
  reactStrictMode: false,
  experimental: {
    appDir: true
  },
  env: {
    STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN
  }
};
