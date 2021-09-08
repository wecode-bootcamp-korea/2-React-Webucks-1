import React from 'react';

class CoffeeCard extends React.Component {
  render() {
    return (
      <div>
        <a>
          <img alt={this.props.alt} src={this.props.src} />
        </a>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
export default CoffeeCard;
