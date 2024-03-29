module.exports = {
  siteMetadata: {
    title: `Sproglærerne`,
    description: `Privat undervisning i Tysk og Fransk`,
    author: `Sproglærerne`,
    siteUrl: `https://xn--sproglrerne-f9a.dk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
//    {
//      resolve: `gatsby-plugin-sitemap`,
//      options: {
//        exclude: [`/success/*`],
//      },
//    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        //  background_color: `#663399`,
        //  theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/chalkboard-teacher-solid.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
