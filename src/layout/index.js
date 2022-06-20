/** Copyright Simon Finney 2019, 2021 */

import { graphql, StaticQuery } from 'gatsby';
import Link from 'gatsby-link';

import { arrayOf, node, shape, string } from 'prop-types';

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Typist from 'react-typist';

import '../index.scss';

export default function Layout({
  children,
  pageContext: {
    frontmatter: { description, display, title },
  },
}) {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => setIsTyping(true));

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              contact {
                content
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
          <Helmet>
            <html lang="en" />

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
                {isTyping && (
                  <Typist
                    avgTypingDelay={50}
                    cursor={{ element: '_' }}
                    onTypingDone={setIsTyping}
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
                {contact.map(({ content, href }) => (
                  <li key={`footer__li--${content}`}>
                    <a href={href} rel="noopener noreferrer" target="_blank">
                      {content}
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

Layout.propTypes = {
  children: node.isRequired,
  pageContext: shape({
    frontmatter: shape({
      description: string.isRequired,
      display: arrayOf(string).isRequired,
      title: string.isRequired,
    }),
  }).isRequired,
};
