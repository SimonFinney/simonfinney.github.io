/**
 * @file Layout.
 * @copyright Simon Finney 2019 - 2020
 */

import classnames from 'classnames';
import { graphql, StaticQuery } from 'gatsby';
import Link from 'gatsby-link';
import { arrayOf, node, oneOfType, shape, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Typist from 'react-typist';

import '../index.scss';

const Layout = ({
  children,
  pageContext: {
    frontmatter: { display, title },
  },
}) => {
  const { items, text } = display;
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => setIsTyping(true));

  return (
    <StaticQuery
      query={graphql`
        query DefaultQuery {
          site {
            siteMetadata {
              contact {
                content
                href
              }
              description
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { contact, description },
        },
      }) => (
        <>
          <Helmet>
            <title>{`${title} | ${description}`}</title>
          </Helmet>

          <header>
            <h1>{description}</h1>

            <nav>
              <ul>
                {[
                  {
                    content: 'About',
                    to: '/',
                  },
                  {
                    content: 'Work',
                    to: '/work',
                  },
                ].map(({ content, to }, index) => {
                  const key = `header__li--${index}`;

                  return (
                    <li key={key}>
                      <Link activeClassName="a--active" to={to}>
                        {content}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </header>

          <main>
            <section className={classnames({ section: text })}>
              <h2>
                {text ? (
                  <>
                    {text}
                    {isTyping && (
                      <Typist
                        cursor={{ element: '_' }}
                        onTypingDone={setIsTyping}
                      >
                        {items.map((item, index) => {
                          const key = `display--${index}`;

                          return (
                            <span key={key} className={key}>
                              {item}
                              <Typist.Backspace
                                count={item.length}
                                delay={500}
                              />
                            </span>
                          );
                        })}
                      </Typist>
                    )}
                  </>
                ) : (
                  display
                )}
              </h2>
            </section>

            {children}
          </main>

          <footer>
            <nav>
              <ul>
                {contact.map(({ content, href }, index) => {
                  const key = `footer__li--${index}`;
                  return (
                    <li key={key}>
                      <a href={href} rel="noopener noreferrer" target="_blank">
                        {content}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </footer>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: node.isRequired,
  pageContext: shape({
    frontmatter: shape({
      display: oneOfType([
        shape({ items: arrayOf(string).isRequired, text: string.isRequired }),
        string,
      ]).isRequired,
      title: string.isRequired,
    }),
  }).isRequired,
};

export default Layout;
