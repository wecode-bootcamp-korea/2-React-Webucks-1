import React from 'react';
import SECOND_DATA from '../../pages/yoonjinkim/List/SecondData';
import './CoffeeCard.scss';

class SecondCoffeeCard extends React.Component {
  render() {
    return (
      <div>
        {SECOND_DATA.map(listdata => {
          return (
            <section className="item">
              <img src={listdata.src} alt={listdata.alt} />
              <p>{listdata.name}</p>
            </section>
          );
        })}
      </div>
    );
  }
}

export default SecondCoffeeCard;
