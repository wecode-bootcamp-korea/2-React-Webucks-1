import React from 'react';
import '../Detail/Detail.scss';

class TopNav extends React.Component {
  render() {
    return (
      <div class="topBar">
        <img
          class="webucksLogo"
          src="../images/jinsungkim/webucksLogo.png"
          alt="Webucks"
        />
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
    );
  }
}

export default TopNav;
