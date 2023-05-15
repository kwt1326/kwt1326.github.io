module.exports = {
  output: process.env.NODE_ENV === 'production' ? 'export' : '',
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    domains: ['res.cloudinary.com'],
  },
};
