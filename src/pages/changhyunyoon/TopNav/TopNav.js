import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component {
  render() {
    return (
      <section className="TopNav">
        <p className="logo">WeBucks</p>
        <Link href="#" className="menu">
          WHAT'S NEW
        </Link>
        <Link href="#" className="menu">
          STORE
        </Link>
        <Link href="#" className="menu">
          MENU
        </Link>
        <Link href="#" className="menu">
          COFFEE
        </Link>
      </section>
    );
  }
}
export default TopNav;
