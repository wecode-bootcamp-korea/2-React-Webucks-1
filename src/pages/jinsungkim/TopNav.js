import React from 'react';
import './Detail/Detail.scss';

class TopNav extends React.Component {
  render() {
    return (
      <div>
        <div class="topNav">
          <span class="webucksLogo">Webucks</span>
          <nav class="topMenu">
            <a class="coffee" href="new" target="_blank">
              COFFEE
            </a>
            <a class="menu" href="new" target="_blank">
              MENU
            </a>
            <a class="store" href="new" target="_blank">
              STORE
            </a>
            <a class="whatsNew" href="new" target="_blank">
              WHAT'S NEW
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default TopNav;
