import React from 'react';

class TopNav extends React.Component {
  render() {
    return (
      <section className="TopNav">
        <p className="logo">WeBucks</p>
        <div className="menu">
          <a href="#" className="menubtn">
            WHAT'S NEW
          </a>
          <a href="#" className="menubtn">
            STORE
          </a>
          <a href="#" className="menubtn">
            MENU
          </a>
          <a href="#" className="menubtn">
            COFFEE
          </a>
        </div>
      </section>
    );
  }
}
export default TopNav;
