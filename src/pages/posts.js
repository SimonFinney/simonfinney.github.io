/**
 * @file Posts.
 * @author Simon Finney <simonjfinney@gmail.com>
 * @copyright Simon Finney 2017
 */

import Link from 'gatsby-link';
import React from 'react';

import Heading from '../elements/heading';
import Paragraph from '../elements/paragraph';
import Time from '../elements/time';

const { Fragment } = React;

export default ({ data }) => (
  <Fragment>
    <Heading level="1" content="Posts" />
    <ul className="posts">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <header>
            <Link to={node.fields.slug}>
              <Heading level="2" content={node.frontmatter.title} />
            </Link>
            <Time dateTime={node.frontmatter.date} />
          </header>
          <Paragraph content={node.excerpt} />
        </li>
      ))}
    </ul>
  </Fragment>
);

export const postsQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "D MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
