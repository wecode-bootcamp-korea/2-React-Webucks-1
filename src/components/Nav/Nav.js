import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <h1 className="nav__logo">WeBucks</h1>
        <ul className="nav__menu">
          <li class="nav__menu--list">COFFEE</li>
          <li class="nav__menu--list">MENU</li>
          <li class="nav__menu--list">STORE</li>
          <li class="nav__menu--list">WHAT'S NEW</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
