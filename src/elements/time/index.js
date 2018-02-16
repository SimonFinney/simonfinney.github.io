/**
 * @file Time.
 * @author Simon Finney <simonjfinney@gmail.com>
 * @copyright Simon Finney 2018
 */

import React from 'react';

export default ({ dateTime, label = dateTime }) => (
  <time dateTime={dateTime}>{label}</time>
);
