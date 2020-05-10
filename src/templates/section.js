/**
 * @file Section.
 * @copyright Simon Finney 2019 - 2020
 */

import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../layout';

import Archive from '../elements/archive';
import Heading from '../elements/heading';

const Section = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title } = frontmatter.title;

  return (
    <Layout head={title}>
      {title && (
        <header>
          <Heading level="1" content={title} />
        </header>
      )}
      <Archive html={html} />
    </Layout>
  );
};

export const sectionQuery = graphql`
  query SectionQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Section;
