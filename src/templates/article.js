/**
 * @file Article.
 * @copyright Simon Finney 2019
 */

import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../layout';

import Article from '../elements/article';
import Heading from '../elements/heading';
import Time from '../elements/time';

import Footer from '../components/footer';

export default ({ data, pageContext }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { date, title } = frontmatter;

  return (
    <Layout head={title}>
      <header>
        <Heading level="1" content={title} />
        <Time dateTime={date} />
      </header>
      <Article html={html} />
      <Footer data={pageContext} />
    </Layout>
  );
};

export const articleQuery = graphql`
  query ArticleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "D MMMM, YYYY")
        title
      }
    }
  }
`;
