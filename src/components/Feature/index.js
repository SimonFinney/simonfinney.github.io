/** Copyright Simon Finney 2019, 2022 */

import { string } from 'prop-types';
import React from 'react';

import ExternalLinkIcon from '../../images/icons/external-link.inline.svg';

const namespace = 'feature';

const Feature = ({ description, href, src, title }) => (
  <a
    className={namespace}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {src && <img className={`${namespace}__image`} alt={title} src={src} />}
    <div className={`${namespace}__content`}>
      <h4>{title}</h4>
      {description && <p>{description}</p>}
    </div>
    <ExternalLinkIcon className={`${namespace}__icon`} />
  </a>
);

Feature.propTypes = {
  href: string.isRequired,
  title: string.isRequired,
  src: string,
  description: string,
};

Feature.defaultProps = {
  src: null,
  description: null,
};

export default Feature;
