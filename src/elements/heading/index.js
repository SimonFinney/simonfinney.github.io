/**
 * @file Heading.
 * @copyright Simon Finney 2018
 */

import React from 'react';

export default ({ content, level }) => {
  const Tag = `h${level}`;
  return <Tag>{content}</Tag>;
};
