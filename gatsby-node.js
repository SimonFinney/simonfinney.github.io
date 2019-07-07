/**
 * @file Gatsby node configuration.
 * @copyright Simon Finney 2019
 */

const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

const articleQuery = `
query {
  allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/articles/" } }
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
}
`;

const sectionsQuery = `
query {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/sections/"}}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
}
`;

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  graphql(articleQuery).then(result => {
    const articles = result.data.allMarkdownRemark.edges;

    articles.map(({ node }, index) =>
      createPage({
        component: path.resolve('./src/templates/article.js'),
        context: {
          previous:
            index === articles.length - 1 ? null : articles[index + 1].node,
          next: index === 0 ? null : articles[index - 1].node,
          slug: node.fields.slug,
        },
        path: node.fields.slug,
      })
    );
  });
  graphql(sectionsQuery).then(result =>
    result.data.allMarkdownRemark.edges.map(({ node }) =>
      createPage({
        component: path.resolve('./src/templates/section.js'),
        context: { slug: node.fields.slug },
        path: node.fields.slug,
      })
    )
  );
};

exports.onCreateNode = ({ actions, getNode, node }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const filePath = createFilePath({ basePath: 'pages', getNode, node });
    const value = node.fileAbsolutePath.includes('articles')
      ? `/${new Date(node.frontmatter.date).getFullYear()}${filePath}`
      : filePath;

    createNodeField({ name: 'slug', node, value });
  }
};
