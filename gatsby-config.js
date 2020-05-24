/**
 * @file Gatsby configuration.
 * @copyright Simon Finney 2019 - 2020
 */

const { resolve } = require('path');
const { description } = require('./package.json');

module.exports = {
  siteMetadata: {
    description,
    contact: [
      {
        content: 'hello@simonﬁnney.dev',
        href: 'mailto:hello@simonfinney.dev',
      },
      {
        content: 'LinkedIn',
        href: 'https://www.linkedin.com/in/simonfinney',
      },
      {
        content: 'GitHub',
        href: 'https://github.com/simonfinney',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-favicon',

    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        display: 'swap',
        fonts: ['Fira Code', 'Fira Sans'],
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: resolve('src/layout'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              elements: ['h3'],
              isIconAfterHeader: true,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              rel: 'noopener noreferrer',
              target: '_blank',
            },
          },
          {
            resolve: 'gatsby-remark-classes',
            options: {
              classMap: {
                'list[ordered=false]': 'ul',
              },
            },
          },

          'gatsby-remark-images',
        ],
      },
    },

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
  ],
};
