import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import './heartBtnFill.scss';

class HeartBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      changeHeart: false,
    };
  }

  changeHeartBtn = () => {
    this.setState({
      changeHeart: !this.state.changeHeart,
    });
  };

  render() {
    return (
      <i>
        {this.state.changeHeart ? (
          <BsHeartFill className="heartBtnFill" onClick={this.changeHeartBtn} />
        ) : (
          <BsHeart className="heartBtnNoneFill" onclick={this.changeHeartBtn} />
        )}
        )
      </i>
    );
  }
}

export default HeartBtn;
