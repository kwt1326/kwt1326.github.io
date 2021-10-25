export const serverBaseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:5500' : 'https://kwt1326.github.io'
export const isProd = process.env.NODE_ENV === 'production';