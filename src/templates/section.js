/**
 * @file Section.
 * @copyright Simon Finney 2019
 */

import { graphql } from 'gatsby';
import { shape, string } from 'prop-types';
import React from 'react';

import Layout from '../layout';

import Article from '../elements/article';
import Heading from '../elements/heading';

const Section = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <header>
        <Heading level="1" content={frontmatter.title} />
      </header>
      <Article html={html} />
    </Layout>
  );
};

Section.propTypes = {
  data: shape({
    markdownRemark: shape({
      frontmatter: shape({
        title: string.isRequired,
      }).isRequired,
      html: string.isRequired,
    }).isRequired,
  }).isRequired,
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
