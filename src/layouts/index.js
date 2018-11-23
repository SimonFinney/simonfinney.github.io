/**
 * @file Layout.
 * @author Simon Finney <simonjfinney@gmail.com>
 * @copyright Simon Finney 2017
 */

import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

import Header from '../components/header';
import Aside from '../components/aside';

import '../index.scss';

const { Fragment } = React;

const Template = ({ children, data }) => {
  const postsListItems = data.allMarkdownRemark.edges.map(({ node }) => (
    <li key={node.id}>
      <Link to={node.fields.slug} title={node.frontmatter.date}>
        {node.frontmatter.title}
      </Link>
    </li>
  ));

  const contactListItems = data.site.siteMetadata.contact.map(item => (
    <li key={item.icon}>
      <a
        href={`${item.url}${item.handle}`}
        rel="noopener noreferrer"
        target="_blank"
        data-icon={item.icon}
      >
        {item.label}
      </a>
    </li>
  ));

  return (
    <Fragment>
      <Helmet title={data.site.siteMetadata.title}>
        <html dir="ltr" lang="en" />
        <meta name="description" content="" />
      </Helmet>

      <Header title={data.site.siteMetadata.title} />
      <main role="main">{children()}</main>
      <aside>
        <Aside title="Posts" listItems={postsListItems} />
        <Aside title="Contact" listItems={contactListItems} />
      </aside>
    </Fragment>
  );
};

Template.propTypes = {
  children: PropTypes.func,
};

export default Template;

export const query = graphql`
  query DefaultQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
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
        title
        contact {
          label
          url
          handle
          icon
        }
      }
    }
  }
`;
