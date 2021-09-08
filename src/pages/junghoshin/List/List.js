/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import CoffeeCard from './CoffeeCard';
import '../TopNav/TopNav';
import './List.scss';

class List extends React.Component {
  render() {
    return (
      <div className="Container">
        <header className="ColdBrewBox" />
        <h4>콜드 브루 커피</h4>
        <div className="Nav2" />
        <img
          src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
          alt="커피 이모지"
          //style={(height = 15)}
        />
        <p>디카페인 에스프레스 샷 추가 가능(일부 음료 제외)</p>
        <div />
        <header />
        {/* 컴포넌트 */}
        <CoffeeCard />
      </div>
    );
  }
}

export default List;
