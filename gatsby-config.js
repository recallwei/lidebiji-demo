/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: '里德笔记'
  },
  trailingSlash: 'never',
  flags: {
    DEV_SSR: true
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-root-import',

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/favicon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#2878FC',
        showSpinner: false
      }
    }
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/`
    //   }
    // },
  ]
}
