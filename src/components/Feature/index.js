/**
 * @file Feature.
 * @copyright Simon Finney 2020
 */

import { string } from 'prop-types';
import React from 'react';

const Feature = ({ description, title }) => (
  <article className="feature">
    <h3>{title}</h3>
    <p>{description}</p>
  </article>
);

Feature.propTypes = {
  description: string.isRequired,
  title: string.isRequired,
};

export default Feature;
