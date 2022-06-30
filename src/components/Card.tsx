/** Copyright Simon Finney 2019, 2022 */

import React, { cloneElement, isValidElement, PropsWithChildren } from 'react';

type Props = {
  /** Provide a description for the card */
  description: string;

  /** Provide a title for the card */
  title: string;
};

const namespace = 'card';

export function Card({
  children,
  description,
  title,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <a
      className={namespace}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {isValidElement(children) &&
        cloneElement(children, { className: `${namespace}__image` })}

      <div className={`${namespace}__content`}>
        <h4>{title}</h4>

        {description && <p>{description}</p>}
      </div>

      <svg className={`${namespace}__icon`} width="20" height="20">
        <path d="M14.2 10.8v5a.8.8 0 01-.9.9H4.2a.8.8 0 01-.9-.9V6.7c0-.3.1-.5.3-.6l.6-.3h5a.8.8 0 000-1.6h-5a2.5 2.5 0 00-2.5 2.5v9.1a2.5 2.5 0 002.5 2.5h9.1a2.5 2.5 0 002.5-2.5v-5a.8.8 0 00-1.6 0zm-5.3 1.5l7.8-7.8v3a.8.8 0 001.6 0v-5a.8.8 0 00-.2-.6.8.8 0 00-.6-.2h-5a.8.8 0 000 1.6h3l-7.8 7.8A.8.8 0 109 12.3z" />
      </svg>
    </a>
  );
}
