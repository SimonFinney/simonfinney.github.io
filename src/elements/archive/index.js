/**
 * @file Archive.
 * @copyright Simon Finney 2019 - 2020
 */

import React from 'react';

export default ({ html }) => (
  <article dangerouslySetInnerHTML={{ __html: html }} />
);
