/**
 * @file Gatsby configuration.
 * @copyright Simon Finney 2019 - 2020
 */

const { description } = require('./package.json');

module.exports = {
  siteMetadata: {
    title: 'Simon Finney',
    description,
    subtitle: 'Front End Specialist',
    contact: [
      {
        text: 'simonjfinney@gmail.com',
        href: 'mailto:simonjfinney@gmail.com',
        icon: 'email',
      },
      {
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/simonfinney',
        icon: 'linkedin',
      },
      {
        text: 'GitHub',
        href: 'https://github.com/simonfinney',
        icon: 'github',
      },
      {
        text: 'CodePen',
        href: 'https://codepen.io/simonfinney',
        icon: 'codepen',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/SimonJFinney',
        icon: 'twitter',
      },
    ],
  },
  plugins: [
    ...['articles', 'images', 'sections'].map(name => ({
      resolve: 'gatsby-source-filesystem',
      options: {
        name,
        path: `${__dirname}/content/${name}`,
      },
    })),

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              rel: 'noopener noreferrer',
              target: '_blank',
            },
          },
          'gatsby-remark-images',
        ],
      },
    },
  ],
};
