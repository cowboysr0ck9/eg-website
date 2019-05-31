module.exports = {
  siteMetadata: {
    title: `EadsGraphic`,
    description: `EadsGraphic is a creative technology agency operating in the greater Philadelphia area specializing in web development, graphic design, and digitial marketing.`,
    author: `@eadsgraphic`,
    siteUrl: `https://www.eadsgraphic.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EadsGraphic`,
        short_name: `EadsGraphic`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3C83E9`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-78811458-1",
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
