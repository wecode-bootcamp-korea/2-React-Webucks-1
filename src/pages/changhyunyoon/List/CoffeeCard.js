import React from 'react';

class CoffeeCard extends React.Component {
  render() {
    return (
      <div>
        <a>
          <img key={this.props.id} img={this.props.img} alt={this.props.alt} />
        </a>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
export default CoffeeCard;
