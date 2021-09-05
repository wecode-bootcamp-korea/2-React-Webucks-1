import React, { Component } from 'react';
import TopNav from '../TopNav';
import { BREWED_COFFEE } from './.CoffeeCard';
import { COLDBREW_COFFEE } from './.CoffeeCard';
import '../../../styles/reset.scss';
import '../List/List.scss';

class List extends Component {
  render() {
    return (
      <div className="List">
        <div className="TopNavi">
          <TopNav class="webucksLogo" />
        </div>
        <div className="CoffeeCard">
          <p class="coldbrewListBar">
            콜드브루 Coffe ☕️{' '}
            <small>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</small>
          </p>
          <div class="coffeeCardFlex">
            {COLDBREW_COFFEE.map(coldbrew => {
              return (
                <div>
                  <img src={coldbrew.src} alt={coldbrew.alt} />
                  <span> {coldbrew.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="CoffeeCard">
          <p class="brewedListBar">
            브루드 Coffe ☕️{' '}
            <small>디카페인 에스프레소 샷추가 가능 (일부 음료 제외)</small>
          </p>
          <div class="coffeeCardFlex">
            {BREWED_COFFEE.map(brewed => {
              return (
                <div>
                  <img src={brewed.src} alt={brewed.alt} />
                  <span>{brewed.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
