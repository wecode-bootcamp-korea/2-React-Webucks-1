import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav className="coffee--nav">
        <h1 className="nav__logo">WeBucks</h1>
        <ul className="nav__menu">
          <li>COFFEE</li>
          <li>MENU</li>
          <li>STORE</li>
          <li>WHAT'S NEW</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
