/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './TopNav.scss';

class TopNav extends React.Component {
  render() {
    return (
      <header>
        <h1>WeBucks</h1>
        <nav nav className="Nav-right">
          <ul>
            <li>
              <a href="#!">COFFEE</a>
            </li>
            <li>
              <a href="#!">MENU</a>
            </li>
            <li>
              <a href="#!">STORE</a>
            </li>
            <li>
              <a href="#!">WHAT'S NEW</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default TopNav;
