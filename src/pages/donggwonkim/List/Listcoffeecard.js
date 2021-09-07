import React, { Component } from 'react';
import './ListCoffeeCard.scss';
import './ListCoffeeData';

class ListCoffeeCard extends Component {
  render() {
    return (
      <div className="menu">
        <div className="listMenuImgWrapper">
          <img src={this.props.src} alt={this.props.alt} />
        </div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default ListCoffeeCard;
