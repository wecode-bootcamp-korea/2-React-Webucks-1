import React from 'react';
import Nav from '../../../components/Nav/Nav';
import LIST_DATA from './ListData';

class List extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <section className="menu1">
          {LIST_DATA.map(listData => {
            return (
              <List
                key={listData.id}
                imgsrc={listData.img}
                name={listData.name}
              />
            );
          })}
        </section>
      </>
    );
  }
}

export default List;
