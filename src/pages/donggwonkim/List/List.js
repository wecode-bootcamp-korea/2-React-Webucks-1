import React, { Component } from 'react';
import '../List/List.scss';
import { COLDBREW } from './Listcoffeedata';
import { BROOD } from './Listcoffeedata';
// import { Listcoffeecard } from './Listcoffeecard';

class List extends Component {
  render() {
    return (
      <div className="List">
        <nav>
          <div className="menuBar">
            <h4 id="menuBarLogo">WeBucks</h4>
            <ul className="menuBarName">
              <li>COFFEE</li>
              <li>MENU</li>
              <li>STORE</li>
              <li>WHATS'NEW</li>
            </ul>
          </div>
        </nav>

        <section>
          <div className="coffeeInfo">
            <span className="coffeeInfoName">콜드 브루 커피</span>
            <span className="coffeeInfoSelect">
              디카페인 에스프레소 샷 추가 가능
            </span>
          </div>
          <div className="container">
            {COLDBREW.map((li, index) => {
              return (
                <div className="menu">
                  <div className="menuImgWrapper">
                    <img src={li.src} alt={li.alt} />
                  </div>
                  <p>{li.name}</p>
                </div>
              );
            })}
          </div>
          <div className="coffeeInfo">
            <span className="coffeeInfoName">브루드 커피</span>
            <span className="coffeeInfoSelect">
              디카페인 에스프레소 샷 추가 가능
            </span>
          </div>
          <div className="container">
            {BROOD.map(li => {
              return (
                <div className="menu">
                  <div className="menuImgWrapper">
                    <img src={li.src} alt={li.alt} />
                  </div>
                  <p>{li.name}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default List;
