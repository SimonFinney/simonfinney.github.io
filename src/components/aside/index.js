/**
 * @file Aside list.
 * @author Simon Finney <simonjfinney@gmail.com>
 * @copyright Simon Finney 2017
 */

import React from 'react';

import Heading from '../../elements/heading';

export default ({ title, listItems }) => (
  <section>
    <Heading level="3" content={title} />
    <ol className="aside__list">{listItems}</ol>
  </section>
);
