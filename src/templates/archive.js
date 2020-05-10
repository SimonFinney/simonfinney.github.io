/**
 * @file Archive.
 * @copyright Simon Finney 2019 - 2020
 */

import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../layout';

import Archive from '../elements/archive';
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
      <Archive html={html} />
      <Footer data={pageContext} />
    </Layout>
  );
};

export const archiveQuery = graphql`
  query ArchiveQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "D MMMM, YYYY")
        title
      }
    }
  }
`;
