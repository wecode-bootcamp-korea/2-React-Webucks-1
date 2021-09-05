import React from 'react';
import '../Detail/Detail.scss';

class HeartButton extends React.Component {
  constructor() {
    super();
    this.state = {
      isActiveHeart: 'far fa-heart defaultHeartButton',
    };
  }
  ActiveHeart = () => {
    return this.state.isActiveHeart === 'far fa-heart defaultHeartButton'
      ? this.setState({
          isActiveHeart: 'fas fa-heart activeHeartButton',
        })
      : this.setState({
          isActiveHeart: 'far fa-heart defaultHeartButton',
        });
  };
  render() {
    return <i class={this.state.isActiveHeart} onClick={this.ActiveHeart} />;
  }
}

export default HeartButton;
