import React from 'react';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import Nav from '../../../components/Nav/Nav';
import './Detail.scss';

class Detailyoonjin extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <h2 className="detail_category">콜드 브루</h2>
        <p className="detail_breadcrumb">
          홈 MENU 음료 에스프레소 화이트 초콜릿 모카
        </p>
        <article class="detail_info-wrap">
          <div class="detail_info-wrap_title">
            <h3 className="detail_item-name_kor">화이트 초콜릿 모카</h3>
            <h4 className="detail_item-name_eng">White Chocolate Mocha</h4>
          </div>
        </article>
      </>
    );
  }
}

export default Detailyoonjin;
