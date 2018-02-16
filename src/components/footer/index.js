/**
 * @file Footer.
 * @author Simon Finney <simonjfinney@gmail.com>
 * @copyright Simon Finney 2017
 */

import Link from 'gatsby-link';
import React from 'react';

const Section = ({ data, modifier }) => (
  <section className={`footer__section--${modifier}`}>
    <Link to={data.fields.slug}>{data.frontmatter.title}</Link>
  </section>
);

export default ({ data }) => (
  <footer>
    {data.previous && <Section data={data.previous} modifier="previous" />}
    {data.next && <Section data={data.next} modifier="next" />}
  </footer>
);
