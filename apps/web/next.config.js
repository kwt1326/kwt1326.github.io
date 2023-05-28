module.exports = {
  output: process.env.NODE_ENV === 'production' ? 'export' : '',
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    domains: [
      'http://localhost:1337',
      'https://raw.githubusercontent.com',
      'res.cloudinary.com'
    ],
  },
  env: {
    NEXT_PUBLIC_STRAPI_REST_API_IMAGE_HOST_DEV: process.env.NEXT_PUBLIC_STRAPI_REST_API_IMAGE_HOST_DEV,
    NEXT_PUBLIC_STRAPI_REST_API_IMAGE_HOST: process.env.NEXT_PUBLIC_STRAPI_REST_API_IMAGE_HOST
  },
};
