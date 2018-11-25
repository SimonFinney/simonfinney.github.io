/**
 * @file Section.
 * @copyright Simon Finney 2018
 */

import { graphql } from 'gatsby';

import React from 'react';

import Layout from '../layout';

import Article from '../elements/article';
import Heading from '../elements/heading';

export default ({ data }) => (
  <Layout>
    <header>
      <Heading level="1" content={data.markdownRemark.frontmatter.title} />
    </header>
    <Article html={data.markdownRemark.html} />
  </Layout>
);

export const postQuery = graphql`
  query SectionQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
