import React from 'react';
import LIST_DATA from '../../pages/yoonjinkim/List/ListData';

class CoffeeCard extends React.Component {
  render() {
    return (
      <section className="menu1">
        {LIST_DATA.map(listData => {
          return (
            <CoffeeCard //???
              key={listData.id}
              imgsrc={listData.img}
              name={listData.name}
            />
          );
        })}
      </section>
    );
  }
}

export default CoffeeCard;
