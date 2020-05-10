/**
 * @file Header.
 * @copyright Simon Finney 2019 - 2020
 */

import Link from 'gatsby-link';
import React from 'react';

const navigation = [
  {
    children: 'Work',
    to: '/work',
  },
  {
    children: 'Archive',
    to: '/archive',
  },
];

const Header = ({ title, subtitle }) => (
  <header className="header" role="banner">
    <Link className="header__title" to="/">
      {title}
    </Link>
    <span className="header__subtitle">{subtitle}</span>
    <nav role="navigation">
      <ul className="header__ul">
        {navigation.map((navigationItemProps, index) => (
          <li key={`header__li--${index}`} className="header__li">
            <Link
              activeClassName="header__a--active"
              className="header__a"
              {...navigationItemProps}
            />
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
