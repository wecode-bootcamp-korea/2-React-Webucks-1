import React from 'react';
import './List.scss';
import Nav from '../../../components/Nav/Nav';
import FirstCoffeeCard from '../../../components/CoffeeCard/FirstCoffeeCard';
import SecondCoffeeCard from '../../../components/CoffeeCard/SecondCoffeeCard';

class Listyoonjin extends React.Component {
  render() {
    console.log('List page');
    return (
      <>
        <Nav />
        <h2 className="list--head__coldbrew">☕️콜드 브루 커피☕️</h2>
        <FirstCoffeeCard />
        <h2 className="list--head__brewed">☕️브루드 커피☕️</h2>
        <SecondCoffeeCard />
      </>
    );
  }
}

export default Listyoonjin;
