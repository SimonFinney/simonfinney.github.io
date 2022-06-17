/** Copyright Simon Finney 2019, 2022 */

const { resolve } = require('path');
const path = resolve(__dirname, 'src');

module.exports = {
  siteMetadata: {
    name: require('./package.json').description,
    role: 'UX engineering',
    siteUrl: 'https://simonfinney.dev',
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
    'gatsby-plugin-eslint',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',

    {
      resolve: 'gatsby-plugin-google-fonts-v2',
      options: {
        fonts: [
          {
            family: 'Fira Sans',
            weights: ['400', '700'],
          },
          {
            family: 'JetBrains Mono',
            weights: ['400', '700'],
          },
        ],
      },
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: resolve(path, 'favicon.png'),
      },
    },

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: resolve(path, 'layout'),
        },
        gatsbyRemarkPlugins: [
          'gatsby-remark-images',

          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              elements: ['h3'],
              icon: false,
            },
          },

          {
            resolve: 'gatsby-remark-external-links',
            options: {
              rel: 'noopener noreferrer',
              target: '_blank',
            },
          },
        ],
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: resolve(path, 'pages'),
      },
    },
  ],
};
