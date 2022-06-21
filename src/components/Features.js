/** Copyright Simon Finney 2019, 2022 */

import { node, string } from 'prop-types';
import React from 'react';

export function Features({ children, title }) {
  return (
    <>
      <h3>{title}</h3>

      <section className="features">{children}</section>
    </>
  );
}

Features.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
};
