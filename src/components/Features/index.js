/**
 * @file Features.
 * @copyright Simon Finney 2020
 */

import { node, string } from 'prop-types';
import React from 'react';

const Features = ({ children, title }) => (
  <>
    <h3>{title}</h3>
    <section className="features">{children}</section>
  </>
);

Features.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
};

export default Features;
