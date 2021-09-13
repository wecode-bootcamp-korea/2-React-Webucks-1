import React from 'react';
import Nav from '../../../components/Nav/Nav';
// import LikeBtn from '../../../components/Icon/LikeBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as FasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as FarHeart } from '@fortawesome/free-regular-svg-icons';

import './Detail.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Detailyoonjin extends React.Component {
  constructor() {
    super();
    this.state = {
      icon: FarHeart,
      liked: true,
    };
  }

  clickHandler = () => {
    this.setState = {
      icon: FasHeart,
      liked: false,
    };
  };

  render() {
    console.log('렌더됨');
    return (
      <div className="Detailyoonjin">
        <Nav />
        <h2 className="detail_category">콜드 브루</h2>
        <p className="detail_breadcrumb">
          홈 MENU 음료 에스프레소 화이트 초콜릿 모카
        </p>

        <article className="detail_info-wrap">
          <div className="detail_info-wrap_title">
            <h3 className="detail_item-name_kor">화이트 초콜릿 모카</h3>
            <h4 className="detail_item-name_eng">White Chocolate Mocha</h4>
            <FontAwesomeIcon
              icon={this.state.icon}
              onClick={this.clickHandler}
            />
            {/* <LikeBtn changeColor={this.changeColor} icon={this.state.icon} /> */}
          </div>
        </article>
      </div>
    );
  }
}

export default Detailyoonjin;
