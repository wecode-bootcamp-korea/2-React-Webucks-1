import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-regular-svg-icons';
import { Redirect } from 'react-router-dom';

class LikeBtn extends Component {
  constructor() {
    super();
    this.state = {
      icon: fasHeart,
    };
  }

  changeColor = () => {
    this.setState = {
      icon: farHeart,
    };
  };

  render() {
    return (
      <span className="LikeBtn">
        <FontAwesomeIcon
          onClick={this.changeColor}
          className={this.state.icon}
          icon={this.state.icon}
        />
      </span>
    );
  }
}

// export default () => <FontAwesomeIcon icon={faHeart} />;
export default LikeBtn;
