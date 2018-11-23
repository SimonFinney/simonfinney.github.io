/**
 * @file Gatsby configuration.
 * @author Simon Finney <simonjfinney@gmail.com>
 * @copyright Simon Finney 2017
 */

const autoprefixer = require('autoprefixer');

const content = `${__dirname}/content/`;

module.exports = {
  siteMetadata: {
    title: 'Simon Finney — Front End Specialist',
    contact: [
      {
        label: 'simonjfinney@gmail.com',
        url: 'mailto:',
        handle: 'simonjfinney@gmail.com',
        icon: 'email',
      },
      {
        label: 'GitHub',
        url: 'http://github.com/',
        handle: 'simonfinney',
        icon: 'github',
      },
      {
        label: 'CodePen',
        url: 'http://codepen.io/',
        handle: 'simonfinney',
        icon: 'codepen',
      },
      {
        label: 'Medium',
        url: 'http://medium.com/@',
        handle: 'simonfinney',
        icon: 'medium',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/',
        handle: 'simonfinney',
        icon: 'linkedin',
      },
      {
        label: 'Instagram',
        url: 'https://www.instagram.com/',
        handle: 'simonfinney',
        icon: 'instagram',
      },
    ],
    skills: [
      'Front end architecture',
      'Performance',
      'Accessibility',
      'Build optimisation',
      'Responsive design',
      'Design thinking',
      'User experience',
      'User research',
    ],
    technology: ['HTML', 'Sass', 'ES.Next', 'Node.js', 'gulp.js', 'webpack'],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [autoprefixer()],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'section',
        path: `${content}sections/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${content}blog/`,
      },
    },
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
          {
            resolve: 'gatsby-remark-images',
            options: {
              // This plugin uses this as the base for generating different widths of each image.
              maxWidth: 640,

              // Analyse images' pixel density to make decisions about target image size.
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
  ],
};
