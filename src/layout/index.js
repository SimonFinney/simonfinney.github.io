/**
 * @file Layout.
 * @copyright Simon Finney 2019 - 2020
 */

import { graphql, StaticQuery } from 'gatsby';
import Link from 'gatsby-link';
import { string } from 'prop-types';
import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Aside from '../components/aside';

import '../index.scss';

const query = graphql`
  query DefaultQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/articles/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "D MMMM, YYYY")
            description
          }
          id
        }
      }
    }
    site {
      siteMetadata {
        description
        subtitle
        title
        contact {
          text
          href
          icon
        }
      }
    }
  }
`;

const Layout = ({ children, head }) => (
  <StaticQuery
    query={query}
    render={data => {
      const { allMarkdownRemark, site } = data;
      const { contact, description, subtitle, title } = site.siteMetadata;

      const articlesListItems = allMarkdownRemark.edges.map(({ node }) => {
        const { fields, frontmatter, id } = node;
        const { date, title } = frontmatter;

        return (
          <li key={id}>
            <Link to={fields.slug} title={date}>
              {title}
            </Link>
          </li>
        );
      });

      const contactListItems = contact.map(({ href, icon, text }) => (
        <li key={icon}>
          <a
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            data-icon={icon}
          >
            {text}
          </a>
        </li>
      ));

      return (
        <Fragment>
          <Helmet title={head ? `${head} — ${title}` : description}>
            <html dir="ltr" lang="en" />
            <meta name="description" content="" />
          </Helmet>

          <Header subtitle={subtitle} title={title} />
          <main role="main">{children}</main>
          <aside>
            <Aside
              className="aside--articles"
              title="Articles"
              listItems={articlesListItems}
            />
            <Aside title="Contact" listItems={contactListItems} />
          </aside>
        </Fragment>
      );
    }}
  />
);

Layout.defaultProps = {
  head: null,
};

Layout.propTypes = {
  head: string,
};

export default Layout;
