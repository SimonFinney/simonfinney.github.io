/**
 * @file Post.
 * @author Simon Finney <simonjfinney@gmail.com>
 * @copyright Simon Finney 2017
 */

import React from 'react';

import Article from '../elements/article';
import Heading from '../elements/heading';
import Time from '../elements/time';

import Footer from '../components/footer';

const { Fragment } = React;

export default ({ data, pathContext }) => (
  <Fragment>
    <header>
      <Heading level="1" content={data.markdownRemark.frontmatter.title} />
      <Time dateTime={data.markdownRemark.frontmatter.date} />
    </header>
    <Article html={data.markdownRemark.html} />
    <Footer data={pathContext} />
  </Fragment>
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
