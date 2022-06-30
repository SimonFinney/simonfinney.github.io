/** Copyright Simon Finney 2019, 2022 */

import React, { PropsWithChildren } from 'react';

type Props = {
  /** Provide a title for the layout */
  title: string;
};

export function Layout({ children, title }: PropsWithChildren<Props>) {
  return (
    <>
      <h3>{title}</h3>

      <section className="layout">{children}</section>
    </>
  );
}
