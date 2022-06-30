/** Copyright Simon Finney 2019, 2021 */

import { graphql, StaticQuery } from 'gatsby';
import type { PageProps } from 'gatsby';

import Link from 'gatsby-link';

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Typist from 'react-typist';

import './index.scss';

type Props = {
  /** Provide a description for the page */
  description: string;

  /** Provide a description for the page */
  display: Array<string>;

  /** Provide a title for the page */
  title: string;
};

const DEFAULT_TYPING = false;

export default function Layout({
  children,
  pageContext: {
    frontmatter: { description, display, title },
  },
}: PageProps & { pageContext: { frontmatter: Props } }) {
  const [typing, setTyping] = useState(DEFAULT_TYPING);

  function onTypingDone() {
    setTyping(DEFAULT_TYPING);
  }

  useEffect(() => setTyping(true));

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              contact {
                children
                href
              }
              meta
              name
              role
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { contact, meta, name, role },
        },
      }) => (
        <>
          <Helmet htmlAttributes={{ lang: 'en' }}>
            <meta name="description" content={description} />
            <title>{`${title} | ${meta}`}</title>
          </Helmet>

          <header>
            <h1>
              {name}

              <div className="role">{role}</div>
            </h1>

            <nav aria-label="Website">
              <ul>
                {[
                  {
                    children: 'About',
                    to: '/',
                  },
                  {
                    children: 'Work',
                    to: '/work',
                  },
                ].map(({ children, to }) => (
                  <li key={`header__li--${to}`}>
                    <Link activeClassName="a--active" to={to}>
                      {children}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          <main>
            <section className="hero">
              <h2>
                {typing && (
                  <Typist
                    avgTypingDelay={50}
                    cursor={{ element: '_' }}
                    onTypingDone={onTypingDone}
                  >
                    {display.map((item, index) => (
                      <span
                        key={`display--${item}`}
                        className={`display--${index % 2 ? 'odd' : 'even'}`}
                      >
                        {item}

                        <Typist.Backspace count={item.length} delay={500} />
                      </span>
                    ))}
                  </Typist>
                )}
              </h2>

              <p className="description">{description}</p>
            </section>

            {children}
          </main>

          <footer>
            <nav aria-label="Contact">
              <ul>
                {contact.map(({ children, href }, index) => (
                  <li key={`footer__li--${index}`}>
                    <a href={href} rel="noopener noreferrer" target="_blank">
                      {children}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </footer>
        </>
      )}
    />
  );
}
