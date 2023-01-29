module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  env: {
    STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN
  }
};
