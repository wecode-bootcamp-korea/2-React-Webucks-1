/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import ColdBrewMockList from './ListMockData';
import './List.scss';

class CoffeeCard extends React.Component {
  render() {
    return (
      <div>
        <ul className="ColdBrew">
          {ColdBrewMockList.map(CoffeeDate => {
            <li>
              <img src={CoffeeDate.src} alt={CoffeeDate.alt} />
              <p>{CoffeeDate.title}</p>
            </li>;
            console.log(CoffeeDate);
          })}
        </ul>
      </div>
    );
  }
}

export default CoffeeCard;
