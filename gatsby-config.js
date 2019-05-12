/**
 * @file Gatsby configuration.
 * @copyright Simon Finney 2019
 */

module.exports = {
  siteMetadata: {
    title: 'Simon Finney',
    subtitle: 'Front End Specialist',
    contact: [
      {
        text: 'simonjfinney@gmail.com',
        href: 'mailto:simonjfinney@gmail.com',
        icon: 'email',
      },
      {
        text: 'GitHub',
        href: 'http://github.com/simonfinney',
        icon: 'github',
      },
      {
        text: 'CodePen',
        href: 'http://codepen.io/simonfinney',
        icon: 'codepen',
      },
      {
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/simonfinney',
        icon: 'linkedin',
      },
      {
        text: 'Medium',
        href: 'http://medium.com/@simonfinney',
        icon: 'medium',
      },
      {
        text: 'Instagram',
        href: 'https://www.instagram.com/simonfinney',
        icon: 'instagram',
      },
    ],
  },
  plugins: [
    ...['blog', 'images', 'sections'].map(name => ({
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
