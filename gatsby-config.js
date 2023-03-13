/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "里德笔记"
  },
  trailingSlash: "never",
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-root-import",
    {
      resolve: "gatsby-plugin-prettier-eslint",
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            "**/*.{css,scss,less}",
            "**/*.{json,json5}",
            "**/*.{graphql}",
            "**/*.{md,mdx}",
            "**/*.{html}",
            "**/*.{yaml,yml}"
          ]
        },
        eslint: {
          patterns: "**/*.{js,jsx,ts,tsx}",
          customOptions: {
            fix: true,
            cache: true
          }
        }
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/favicon.png"
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "tomato",
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
