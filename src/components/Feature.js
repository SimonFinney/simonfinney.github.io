/** Copyright Simon Finney 2019, 2022 */

import { node, string } from 'prop-types';
import React, { cloneElement } from 'react';

import ExternalLink20 from '../images/icons/external-link.inline.svg';

const namespace = 'feature';

export function Feature({ children, description, href, title }) {
  return (
    <a
      className={namespace}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children && cloneElement(children, { className: `${namespace}__image` })}

      <div className={`${namespace}__content`}>
        <h4>{title}</h4>

        {description && <p>{description}</p>}
      </div>

      <ExternalLink20 className={`${namespace}__icon`} />
    </a>
  );
}

Feature.propTypes = {
  children: node,
  description: string,
  href: string.isRequired,
  title: string.isRequired,
};
