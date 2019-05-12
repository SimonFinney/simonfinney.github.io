/**
 * @file Gatsby node configuration.
 * @copyright Simon Finney 2019
 */

const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

const blogQuery = `
query {
  allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/blog/" } }
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

  graphql(blogQuery).then(result => {
    const posts = result.data.allMarkdownRemark.edges;
    posts.map(({ node }, index) =>
      createPage({
        component: path.resolve('./src/templates/post.js'),
        context: {
          previous: index === posts.length - 1 ? null : posts[index + 1].node,
          next: index === 0 ? null : posts[index - 1].node,
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
    const value = node.fileAbsolutePath.includes('blog')
      ? `/${new Date(node.frontmatter.date).getFullYear()}${filePath}`
      : filePath;

    createNodeField({ name: 'slug', node, value });
  }
};
