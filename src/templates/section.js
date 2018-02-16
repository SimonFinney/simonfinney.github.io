/**
 * @file Section.
 * @author Simon Finney <simonjfinney@gmail.com>
 * @copyright Simon Finney 2018
 */

import React from 'react';

import Article from '../elements/article';
import Heading from '../elements/heading';

const { Fragment } = React;

export default ({ data }) => (
  <Fragment>
    <header>
      <Heading level="1" content={data.markdownRemark.frontmatter.title} />
    </header>
    <Article html={data.markdownRemark.html} />
  </Fragment>
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
