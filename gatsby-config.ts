/** Copyright Simon Finney 2019, 2022 */

import type { GatsbyConfig } from 'gatsby';
import { resolve } from 'path';

import { description as name } from './package.json';

import { maxWidth } from './src/breakpoint';
import { background } from './src/color';

const _src = resolve(__dirname, 'src');

function src(path) {
  return resolve(_src, path);
}

const role = 'UX engineering';
const meta = `${name} — ${role}`;

export default {
  siteMetadata: {
    meta,
    name,
    role,
    contact: [
      {
        children: 'hello@simonﬁnney.dev',
        href: 'mailto:hello@simonfinney.dev',
      },

      {
        children: 'LinkedIn',
        href: 'https://www.linkedin.com/in/simonfinney',
      },

      {
        children: 'GitHub',
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
        icon: src('icon.png'),

        icon_options: {
          purpose: 'any maskable',
        },
      },
    },

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: src('layout.tsx'),
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
              withAvif: true,
              withWebp: true,
            },
          },
        ],
      },
    },

    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: [
          ['color-background', background],
          ['max-inline-size', maxWidth],
        ].reduce(
          (variables, [variable, value]) =>
            `${variables}$-${variable}: ${value}; `,
          ''
        ),
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: src('pages'),
      },
    },
  ],
} as GatsbyConfig;
