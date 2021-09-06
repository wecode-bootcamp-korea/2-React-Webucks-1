//List.js
//coffeecard 컴포넌트를 파일 분리 없이, list.js 파일 내에서 반복시키기

import React from 'react';
import './List.scss';
import Nav from '../../../components/Nav/Nav';
import FIRST_DATA from './FirstData';
import SECOND_DATA from './SecondData';

class Listyoonjin extends React.Component {
  render() {
    return (
      <div className="listpage-wrap">
        <Nav />
        <h2 className="list--head__coldbrew">☕️콜드 브루 커피☕️</h2>
        <FirstCoffeeCard />
        <h2 className="list--head__brewed">☕️브루드 커피☕️</h2>
        <SecondCoffeeCard />
      </div>
    );
  }
}

class FirstCoffeeCard extends React.Component {
  render() {
    return (
      <div className="coffeecard-list-wrap">
        {FIRST_DATA.map(firstData => {
          return (
            <div className="coffeecard-wrap">
              <img src={firstData.src} alt={firstData.alt}></img>
              <p>{firstData.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

class SecondCoffeeCard extends React.Component {
  render() {
    return (
      <div className="coffeecard-list-wrap">
        {SECOND_DATA.map(secondData => {
          return (
            <div className="coffeecard-wrap">
              <img src={secondData.src} alt={secondData.alt}></img>
              <p>{secondData.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Listyoonjin;
