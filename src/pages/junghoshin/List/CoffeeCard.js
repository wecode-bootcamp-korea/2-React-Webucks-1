/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import ColdBrewMockList from './ListMockData';
import './List.scss';

class CoffeeCard extends React.Component {
  render() {
    return (
      <div>
        <section className="KindOfColdBrew">
          <ul className="ColdBrew">
            {ColdBrewMockList.map(CoffeeDate => {
              <li>
                <img src={CoffeeDate.src} alt={CoffeeDate.alt} />
                <p>{CoffeeDate.title}</p>
              </li>;
              // console.log(CoffeeDate);
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default CoffeeCard;
