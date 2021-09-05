import React from 'react';
import './Detail/Detail.scss';

class TopNav extends React.Component {
  render() {
    return (
      <div>
        <div class="topBar">
          <span class="webucksLogo">Webucks</span>
          <nav class="topMenu">
            <a class="coffeeTap" href="new" target="_blank">
              COFFEE
            </a>
            <a class="menuTap" href="new" target="_blank">
              MENU
            </a>
            <a class="storeTap" href="new" target="_blank">
              STORE
            </a>
            <a class="whatsNewTap" href="new" target="_blank">
              WHAT'S NEW
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default TopNav;
