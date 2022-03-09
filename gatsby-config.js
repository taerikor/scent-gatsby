module.exports = {
  siteMetadata: {
    title: `scent`,
    description: `checking release and contacting`,
    siteUrl: `https://scentofficial.com`,
    author: `Taeri Kor`,
    keywords: [`music`, `electronic`, `scent`, `ocean`, `hertz`, `ape`, `reel`],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "cover",
        path: `${__dirname}/src/assets/cover/`,
      },
      __key: "cover",
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-NE3EWNGL5R`,
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Scent`,
        short_name: `Scent`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6b37bf`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`,
      },
    },
    "gatsby-plugin-offline",
  ],
}
require("dotenv").config({
  path: `.env`,
})
