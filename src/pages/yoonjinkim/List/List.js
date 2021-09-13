import React from 'react';
import Nav from '../../../components/Nav/Nav';
import CoffeeCard from './CoffeeCard/CoffeeCard';
import './List.scss';
import '../../../styles/common.scss';

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
      <div className="Listyoonjin">
        <Nav />
        <h2 className="list_head">☕️콜드 브루 커피☕️</h2>
        <div className="list_coffeecardwrap">
          {this.state.firstProducts.map(jsonFirstData => {
            return (
              <CoffeeCard
                className="list_coffeecard_item"
                key={jsonFirstData.key}
                src={jsonFirstData.src}
                alt={jsonFirstData.alt}
                name={jsonFirstData.name}
              />
            );
          })}
        </div>
        <h2 className="list_head">☕️브루드 커피☕️</h2>
        <div className="list_coffeecardwrap">
          {this.state.secondProducts.map(jsonSecondData => {
            return (
              <CoffeeCard
                className="list_coffeecard_item"
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
