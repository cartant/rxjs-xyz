module.exports = {
  siteMetadata: {
    title: `RxJS.xyz`,
    author: `Nicholas Jamieson`,
    description: `RxJS community packages`,
    siteUrl: `https://rxjs.xyz/`,
    social: {
      gitHub: `cartant/rxjs-xyz`,
      twitter: `ncjamieson`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/packages`,
        name: `packages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              markdownCaptions: false,
              maxWidth: 590,
              quality: 90,
              showCaptions: ["title"],
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-external-links`,
          `gatsby-remark-numbered-footnotes`,
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [],
              services: {},
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 95,
        stripMetadata: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-103034213-5`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RxJS community packages`,
        short_name: `rxjs.xyz`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#03a9f4`,
        display: `browser`,
        icon: `content/assets/reactivex.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-twitter`,
  ],
};
