/**
 * @file Layout.
 * @copyright Simon Finney 2019 - 2020
 */

import { graphql, StaticQuery } from 'gatsby';
import Link from 'gatsby-link';
import { node } from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Typist from 'react-typist';

import '../index.scss';

const Layout = ({
  children,
  pageContext: {
    frontmatter: { display, title },
  },
}) => (
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
    }) => {
      const { items, text } = display;

      return (
        <>
          <Helmet title={`${title} | ${description}`} />

          <header>
            <h1>{description}</h1>

            <nav>
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
                ].map((props, index) => {
                  const key = `header__li--${index}`;

                  return (
                    <li key={key}>
                      <Link activeClassName="a--active" {...props} />
                    </li>
                  );
                })}
              </ul>
            </nav>
          </header>

          <main>
            <Typist cursor={{ show: false }}>
              <h2>
                {text ? (
                  <span>
                    {text}
                    {items.map((item, index) => {
                      const key = `display--${index}`;

                      return (
                        <span key={key} className={key}>
                          {item}

                          {index < items.length - 1 ? (
                            <Typist.Backspace count={item.length} />
                          ) : (
                            ''
                          )}
                        </span>
                      );
                    })}
                    .
                  </span>
                ) : (
                  display
                )}
              </h2>
            </Typist>

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
      );
    }}
  />
);

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
