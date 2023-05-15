/** @type {import('next-sitemap').IConfig} */

const host = process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "https://kwt1326.github.io"

module.exports = {
  siteUrl: host,
  generateRobotsTxt: true,
  sitemapSize: 7000, // per sitemap maximum item count, overflows to next sitemap file(s)
  changefreq: "daily", // always, daily, hourly, monthly, never, weekly, yearly
  priority: 1, // 페이지 주소 우선순위 (검색엔진에 제공됨, 우선순위가 높은 순서대로 크롤링함)
  exclude: [
    "/about",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/about"
        ],
      },
    ],
  },
};