module.exports = {
  output: process.env.NODE_ENV === 'production' ? 'export' : '',
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    domains: ['localhost', 'kwt1326.github.io', 'res.cloudinary.com'],
  },
};
