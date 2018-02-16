/**
 * @file Article.
 * @author Simon Finney <simonjfinney@gmail.com>
 * @copyright Simon Finney 2018
 */

import React from 'react';

export default ({ html }) => (
  <article dangerouslySetInnerHTML={{ __html: html }} />
);
