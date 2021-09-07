import React from 'react';
import './List.scss';
import Nav from '../../../components/Nav/Nav';
import FirstCoffeeCard from './CoffeeCard/FirstCoffeeCard';
import SecondCoffeeCard from './CoffeeCard/SecondCoffeeCard';

class Listyoonjin extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'red',
      products: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/Data/ListCoffeeCardData.json')
      .then(res => res.json)
      .then(result => {
        this.setState({ products: result.Coldbrew });
        console.log(result.Coldbrew);
      });
  }

  render() {
    return (
      <div className="listpage-wrap">
        <Nav />
        <h2 className="list--head__coldbrew">☕️콜드 브루 커피☕️</h2>
        <div className="coffeecard-list-wrap">
          {/* {this.state.products.map((productData, index) => {
            return (
              <FirstCoffeeCard
                key={index}
                src={productData.src}
                alt={productData.alt}
                name={productData.name}
              />
            );
          })} */}
        </div>

        <h2 className="list--head__brewed">☕️브루드 커피☕️</h2>
        <div className="coffeecard-list-wrap">
          {/* {this.state.products.map((productData, index) => {
          return (
            <SecondCoffeeCard
              key={index}
              src={productData.src}
              alt={productData.alt}
              name={productData.name}
            />
          );
        })} */}
        </div>
      </div>
    );
  }
}

export default Listyoonjin;
