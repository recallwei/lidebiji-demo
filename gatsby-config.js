/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Gatsby Demo",
    siteUrl: "https://gatsby-template.vercel.app/"
  },
  plugins: [
    "gatsby-plugin-postcss",
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
  ]
}
