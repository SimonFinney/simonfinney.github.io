/**
 * @file Post.
 * @copyright Simon Finney 2019
 */

import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../layout';

import Article from '../elements/article';
import Heading from '../elements/heading';
import Time from '../elements/time';

import Footer from '../components/footer';

export default ({ data, pageContext }) => (
  <Layout>
    <header>
      <Heading level="1" content={data.markdownRemark.frontmatter.title} />
      <Time dateTime={data.markdownRemark.frontmatter.date} />
    </header>
    <Article html={data.markdownRemark.html} />
    <Footer data={pageContext} />
  </Layout>
);

export const postQuery = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "D MMMM, YYYY")
        title
      }
    }
  }
`;
