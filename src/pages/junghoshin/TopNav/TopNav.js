import React from 'react';
import '../Detail/Detail.scss';

class TopNav extends React.Component{
    render() {
        return(
            <header>
                <div className="Nav">
                    <div className="Nav-left">
                        <h1>
                            WeBucks
                        </h1>
                    </div>
                    <nav className = "Nav-right">
                        <ul>
                            <li><Link to="#" />COFFEE</li>
                            <li><Link to="#" />MENU</li>
                            <li><Link to="#" />STORE</li>
                            <li><Link to="#" />WHAT'S NEW</li>           
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default TopNav;
