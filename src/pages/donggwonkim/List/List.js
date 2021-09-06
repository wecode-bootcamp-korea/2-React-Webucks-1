import React, { Component } from 'react';
import './List.scss';
import { COLDBREW_COFFEE } from './ListCoffeeData';
import { BROOD_COFFEE } from './ListCoffeeData';
import ListCoffeeCard from './ListCoffeeCard';

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
            {COLDBREW_COFFEE.map(COLDBREW => {
              return (
                <ListCoffeeCard
                  key={COLDBREW.id}
                  src={COLDBREW.src}
                  alt={COLDBREW.alt}
                  name={COLDBREW.name}
                />
              );
            })}
          </div>
          <div className="coffeeInfo">
            <span className="coffeeInfoName">브루드 커피</span>
            <span className="coffeeInfoSelect">
              디카페인 에스프레소 샷 추가 가능
            </span>
          </div>
          <div>
            <div className="container">
              {BROOD_COFFEE.map(BROOD => {
                return (
                  <ListCoffeeCard
                    key={BROOD.id}
                    src={BROOD.src}
                    alt={BROOD.alt}
                    name={BROOD.name}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default List;
