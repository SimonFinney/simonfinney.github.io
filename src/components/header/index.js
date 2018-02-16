/**
 * @file Header.
 * @author Simon Finney <simonjfinney@gmail.com>
 * @copyright Simon Finney 2017
 */

import Link from 'gatsby-link';
import React from 'react';

const ListItem = ({ href, title }) => (
  <li className="header__li">
    <Link activeClassName="header__a--active" className="header__a" to={href}>
      {title}
    </Link>
  </li>
);

export default ({ title }) => (
  <header className="header" role="banner">
    <Link className="header__title" to="/">
      {title}
    </Link>
    <nav role="navigation">
      <ul className="header__ul">
        <ListItem href="/posts" title="Posts" />
      </ul>
    </nav>
  </header>
);
