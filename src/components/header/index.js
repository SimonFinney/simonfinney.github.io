/**
 * @file Header.
 * @copyright Simon Finney 2019
 */

import Link from 'gatsby-link';
import React from 'react';

const Header = ({ title, subtitle }) => (
  <header className="header" role="banner">
    <Link className="header__title" to="/">
      {title}
    </Link>
    <span className="header__subtitle">{subtitle}</span>
    <nav role="navigation">
      <ul className="header__ul">
        <li className="header__li">
          <Link
            activeClassName="header__a--active"
            className="header__a"
            to="/posts"
          >
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
