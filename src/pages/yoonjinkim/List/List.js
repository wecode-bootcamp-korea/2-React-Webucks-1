import React from 'react';
import Nav from '../../../components/Nav/Nav';
import FirstCoffeeCard from './CoffeeCard/FirstCoffeeCard';
import SecondCoffeeCard from './CoffeeCard/SecondCoffeeCard';
import './List.scss';

class Listyoonjin extends React.Component {
  constructor() {
    super();
    this.state = {
      firstProducts: [],
      secondProducts: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/Data/ListCoffeeCardData.json')
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          firstProducts: jsonData.Coldbrew,
          secondProducts: jsonData.Brewed,
        });
      });
  }

  render() {
    console.log(this.state.products, 'vdfadsa');
    return (
      <div className="listpage-wrap">
        <Nav />
        <h2 className="list--head__coldbrew">☕️콜드 브루 커피☕️</h2>
        <div className="coffeecard-list-wrap">
          {this.state.firstProducts.map(jsonFirstData => {
            return (
              <FirstCoffeeCard
                key={jsonFirstData.key}
                src={jsonFirstData.src}
                alt={jsonFirstData.alt}
                name={jsonFirstData.name}
              />
            );
          })}
          }
        </div>
        <h2 className="list--head__brewed">☕️브루드 커피☕️</h2>
        <div className="coffeecard-list-wrap">
          {this.state.secondProducts.map(jsonSecondData => {
            return (
              <SecondCoffeeCard
                key={jsonSecondData.key}
                src={jsonSecondData.src}
                alt={jsonSecondData.alt}
                name={jsonSecondData.name}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Listyoonjin;
