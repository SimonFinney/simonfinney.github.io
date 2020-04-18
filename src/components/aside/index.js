/**
 * @file Aside list.
 * @copyright Simon Finney 2019 - 2020
 */

import React from 'react';

import Heading from '../../elements/heading';

export default ({ className, listItems, title }) => (
  <section className={className}>
    <Heading level="3" content={title} />
    <ol className="aside__list">{listItems}</ol>
  </section>
);
