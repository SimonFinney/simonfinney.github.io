/** Copyright Simon Finney 2019, 2022 */

const { resolve } = require('path');
const src = resolve(__dirname, 'src');

const { description: name, homepage: siteUrl } = require('./package.json');

const role = 'UX engineering';
const meta = `${name} — ${role}`;

module.exports = {
  siteMetadata: {
    meta,
    name,
    role,
    siteUrl,
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: meta,
        icon: resolve(src, 'favicon.png'),
      },
    },

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: resolve(src, 'layout'),
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
        path: resolve(src, 'pages'),
      },
    },
  ],
};
