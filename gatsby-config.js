const path = require(`path`)

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  // collectionTypes: ['universal'],
  collectionTypes: [{
    singularName: 'universal',
    pluginOptions: {
      i18n: {
        locale: 'all', // Fetch all localizations
      },
    },
    queryParams: {
      populate: {
        ogImage: {
          populate: '*',
        },
        'slices': {
          populate: {
            titleVideo: {
              populate: '*',
            },
            titleParagraph: {
              populate: '*',
            },
            titleParagraphImage: {
              populate: '*',
            },
            titleMarkdown: {
              populate: '*',
            },
            titleMarkdownImage: {
              populate: '*',
            },
            unorderedList: {
              populate: '*',
            },
            reviewOneItem: {
              populate: '*',
            },
            accordionItems: {
              populate: '*',
              item: {
                populate: '*',
              }
            },
            imageGrid: {
              populate: '*',
            },
            basicImage: {
              populate: '*',
            },
            promotion: {
              populate: '*',
            },
          }
        },
        ogImage: {
          populate: '*',
        },
        jsonLD: {
          populate: '*',
        },
      },
    },
  }],
  singleTypes: [
    {
      singularName: 'main-menu',
      pluginOptions: {
        i18n: {
          locale: 'all', // Fetch all localizations
        },
      },
      queryParams: {
        populate: '*',
      },
    },
    {
      singularName: 'nav-bar-two',
      pluginOptions: {
        i18n: {
          locale: 'all', // Fetch all localizations
        },
      },
      queryParams: {
        populate: {
          sections: {
            populate: {
              dropdown: {
                populate: '*',
              },
              dropdownItems: {
                populate: '*',
              },
            }
          }
        },
      },
    }],
};

const siteUrl = process.env.SITE_URL || 'https://temp.deviitor.com'

module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: process.env.SITE_URL,
  },
  flags: {
    // PRESERVE_FILE_DOWNLOAD_CACHE: true,
    // PRESERVE_WEBPACK_CACHE: true,
    // THE_FLAG: false,
    // DEV_SSR: true,
    // FAST_REFRESH: true,
    // DETECT_NODE_MUTATIONS: true,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `image`),
        // `${__dirname}/src/assets/image`
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        configFile: 'robots-txt.config.js'
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
              pageContext
            }
          }
        }
        `,
        excludes: [
          `/temp/*`,
          `/ga/*`,
          '/new-page/*'
        ],
        resolveSiteUrl: () => siteUrl,
        serialize: ({ path, pageContext: { updatedAt } }) => {
          return {
            url: path,
            lastmod: updatedAt,
          }
        },
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Website Title`,
        short_name: `Title`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/assets/image/favicon-512.png`,
      },
    },
  ],
}
