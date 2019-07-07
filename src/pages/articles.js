/**
 * @file Articles.
 * @copyright Simon Finney 2019
 */

import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';

import Layout from '../layout';

import Heading from '../elements/heading';
import Paragraph from '../elements/paragraph';
import Time from '../elements/time';

const title = 'Articles';

export default ({ data }) => (
  <Layout head={title}>
    <Heading level="1" content={title} />
    <ul className="articles">
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
  </Layout>
);

export const articlesQuery = graphql`
  query ArticlesQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/articles/" } }
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
