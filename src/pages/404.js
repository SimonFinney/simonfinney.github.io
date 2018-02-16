/**
 * @file 404.
 * @author Simon Finney <simonjfinney@gmail.com>
 * @copyright Simon Finney 2017
 */

import React from 'react';

import Heading from '../elements/heading';
import Paragraph from '../elements/paragraph';

const { Fragment } = React;

export default () => (
  <Fragment>
    <Heading level="1" content="Just where do you think you're going?" />
    <Paragraph content="Nothing to see here..." />
  </Fragment>
);
