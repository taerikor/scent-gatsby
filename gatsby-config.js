module.exports = {
  siteMetadata: {
    title: `scent`,
    description: `checking release and contacting`,
    author: `Taeri Kor`,
    keywords: [`music`, `electronic`, `scent`, `ocean he`],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "cover",
        path: `${__dirname}/src/assets/cover/`,
      },
      __key: "cover",
    },
  ],
}
require("dotenv").config({
  path: `.env`,
})
