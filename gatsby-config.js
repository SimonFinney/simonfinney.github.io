/** Copyright Simon Finney 2019, 2022 */

const { resolve } = require('path');
const src = resolve(__dirname, 'src');

const { description: name, homepage: siteUrl } = require('./package.json');

function path(path) {
  return resolve(src, path);
}

const role = 'UX engineering';
const meta = `${name} — ${role}`;

const { maxWidth } = require(path('breakpoint'));
const { background } = require(path('color'));

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
    'gatsby-plugin-sharp',

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: meta,
        start_url: '/',
        background_color: background,
        theme_color: background,
        display: 'standalone',
        icon: path('icon.png'),

        icon_options: {
          purpose: 'any maskable',
        },
      },
    },

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: path('layout'),
        },
        gatsbyRemarkPlugins: [
          'gatsby-remark-unwrap-images',

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

          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              maxWidth,
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
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: [
          ['color-background', background],
          ['max-width', maxWidth],
        ].reduce(
          (variables, [variable, value]) =>
            `${variables}$${variable}: ${value}; `,
          ''
        ),
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path('pages'),
      },
    },
  ],
};
