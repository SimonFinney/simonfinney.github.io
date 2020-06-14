/**
 * @file Features.
 * @copyright Simon Finney 2020
 */

import { node } from 'prop-types';
import React from 'react';

const Features = ({ children }) => (
  <section className="features">{children}</section>
);

Features.propTypes = {
  children: node.isRequired,
};

export default Features;
