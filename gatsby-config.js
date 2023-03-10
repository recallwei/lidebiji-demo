const path = require("path")
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Gatsby Demo",
    siteUrl: "https://gatsby-template.vercel.app/"
  },
  trailingSlash: "never",
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-root-import",
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "blue",
        showSpinner: false
      }
    }
  ]
}
