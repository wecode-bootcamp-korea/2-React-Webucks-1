import React from 'react';
import TopNav from '../TopNav/TopNav';
import './List.scss';
import { Coldbrew } from './ListCoffeeCard';
import { Brewed } from './ListCoffeeCard';

class List extends React.Component {
  render() {
    return (
      <>
        <section className="List">
          <TopNav />
          <div className="coldbrew">
            <p className="cold">콜드 부르 커피</p>
            <img
              className="coffeeimg"
              src="../images/coffee.png"
              alt="위벅스"
            />
            <p className="dcafe">
              디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
            </p>
          </div>
          <section className="menu1">
            {Coldbrew.map(li => {
              return (
                <div>
                  <a>
                    <img alt={li.alt} src={li.src} />
                  </a>
                  <p>{li.name}</p>
                </div>
              );
            })}
          </section>
          <div className="coldbrew">
            <p className="cold">부르드 커피</p>
            <img
              className="coffeeimg"
              src="../images/coffee.png"
              width="3%"
              alt="위벅스"
            />
            <p className="dcafe">
              디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
            </p>
          </div>
          <section className="menu2">
            {Brewed.map(li => {
              return (
                <div>
                  <a>
                    <img alt={li.alt} src={li.src} />
                  </a>
                  <p>{li.name}</p>
                </div>
              );
            })}
          </section>
        </section>
      </>
    );
  }
}
export default List;
