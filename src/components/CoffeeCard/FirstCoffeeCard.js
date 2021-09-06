import React from 'react';
import FIRST_DATA from '../../pages/yoonjinkim/List/FirstData';
import './CoffeeCard.scss';

class FirstCoffeeCard extends React.Component {
  render() {
    return (
      <div>
        {FIRST_DATA.map(listdata => {
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

export default FirstCoffeeCard;
