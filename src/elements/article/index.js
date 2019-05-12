/**
 * @file Article.
 * @copyright Simon Finney 2019
 */

import React from 'react';

export default ({ html }) => (
  <article dangerouslySetInnerHTML={{ __html: html }} />
);
