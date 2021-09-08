import React from 'react';
import './CoffeeCard.scss';

class FirstCoffeeCard extends React.Component {
  render() {
    return (
      <div className="list_coffeecard_item">
        <img src={this.props.src} alt={this.props.alt}></img>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default FirstCoffeeCard;
