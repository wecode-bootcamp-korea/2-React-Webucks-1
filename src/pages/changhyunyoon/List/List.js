import React from 'react';
import TopNav from '../TopNav/TopNav';
import CoffeeCard from './CoffeeCard';
import { COLDBREW_DATA } from './COFFEELIST_MOCK_DATA';
import { BREWED_DATA } from './COFFEELIST_MOCK_DATA';
import coffeeImg from '../images/coffee.png';
import './List.scss';

class List extends React.Component {
  render() {
    return (
      <>
        <section className="List">
          <header>
            <TopNav />
          </header>
          <div className="coldBrew">
            <p className="cold">콜드 부르 커피</p>
            <img className="coffeeimg" src={coffeeImg} alt="위벅스" />
            <p className="dcafe">
              디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
            </p>
          </div>
          <section className="menu1">
            {COLDBREW_DATA.map(coffee => {
              return (
                <CoffeeCard
                  alt={coffee.alt}
                  src={coffee.src}
                  name={coffee.name}
                />
              );
            })}
          </section>
          <div className="coldBrew">
            <p className="cold">부르드 커피</p>
            <img className="coffeeimg" src={coffeeImg} alt="위벅스" />
            <p className="dcafe">
              디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
            </p>
          </div>
          <section className="menu2">
            {BREWED_DATA.map(coffee => {
              return (
                <CoffeeCard
                  alt={coffee.alt}
                  src={coffee.src}
                  name={coffee.name}
                />
              );
            })}
          </section>
        </section>
      </>
    );
  }
}
export default List;
