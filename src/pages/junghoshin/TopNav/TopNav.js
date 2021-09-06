import React, { Component } from 'react';
import './TopNav.scss';

class TopNav extends React.Component{
    render() {
        return(
            <header>
                    <h1>WeBucks</h1>
                    <nav nav className = "Nav-right">
                        <ul>
                            <li><Link to="#" />COFFEE</li>
                            <li><Link to="#" />MENU</li>
                            <li><Link to="#" />STORE</li>
                            <li><Link to="#" />WHAT'S NEW</li>           
                        </ul>
                    </nav>
            </header>
        );
    }
}

export default TopNav;
