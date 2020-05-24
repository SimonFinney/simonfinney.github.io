/**
 * @file Layout.
 * @copyright Simon Finney 2019 - 2020
 */

import { graphql, StaticQuery } from 'gatsby';
import Link from 'gatsby-link';
import { node } from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import '../index.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query DefaultQuery {
        site {
          siteMetadata {
            title
            contact {
              content
              href
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { contact, title },
      },
    }) => (
      <>
        <Helmet title={title} />

        <header>
          <h1>{title}</h1>

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

        <main>{children}</main>

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

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
