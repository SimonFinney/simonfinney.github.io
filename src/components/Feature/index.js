/**
 * @file Feature.
 * @copyright Simon Finney 2020
 */

import { string } from 'prop-types';
import React from 'react';

const Feature = ({ description, href, title }) => (
  <a className="feature" href={href} rel="noopener noreferrer" target="_blank">
    <h4>{title}</h4>
    {description && <p>{description}</p>}
  </a>
);

Feature.propTypes = {
  description: string,
  href: string.isRequired,
  title: string.isRequired,
};

export default Feature;
