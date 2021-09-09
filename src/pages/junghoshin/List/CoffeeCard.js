/* eslint-disable array-callback-return */
import React from 'react';
import ColdBrewMockList from './ListMockData';
import './List.scss';

class CoffeeCard extends React.Component {
  render() {
    return (
      <div>
        <section className="KindOfColdBrew">
          <ul className="ColdBrew">
            {ColdBrewMockList.map(coffeeDate => {
              <li>
                <img
                  src={coffeeDate.scr}
                  alt={coffeeDate.alt}
                  title={coffeeDate.title}
                />
                <p>{coffeeDate.title}</p>
              </li>;
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default CoffeeCard;
