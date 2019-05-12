/**
 * @file 404.
 * @copyright Simon Finney 2019
 */

import React from 'react';

import Layout from '../layout';

import Heading from '../elements/heading';
import Paragraph from '../elements/paragraph';

export default () => (
  <Layout>
    <Heading level="1" content="Just where do you think you're going?" />
    <Paragraph content="Nothing to see here..." />
  </Layout>
);
