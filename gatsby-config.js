module.exports = {
  siteMetadata: {
    title: `RxJS.xyz`,
    author: `RxJS Community`,
    description: `RxJS Community Packages`,
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
    {
      resolve: `gatsby-plugin-lunr`,
      options: {
        languages: [{ name: `en` }],
        fields: [
          { name: `title`, attributes: { boost: 15 } },
          { name: `description`, attributes: { boost: 5 } },
          { name: `categories`, attributes: { boost: 10 } },
          { name: `keywords`, attributes: { boost: 10 } },
          { name: `author` },
          { name: `content` },
          { name: `slug`, store: true },
        ],
        resolvers: {
          MarkdownRemark: {
            title: (node) => node.frontmatter.title,
            description: (node) => node.frontmatter.description,
            categories: (node) => node.frontmatter.categories.join(" "),
            keywords: (node) => node.frontmatter.keywords.join(" "),
            author: (node) => node.frontmatter.author,
            content: (node) => node.rawMarkdownBody,
            slug: (node) => node.fields.slug,
          },
        },
        filename: `search-index.json`,
      },
    },
  ],
};
