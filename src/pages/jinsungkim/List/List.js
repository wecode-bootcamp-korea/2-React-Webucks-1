import React, { Component } from 'react';
import TopNav from '../TopNav/TopNav';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div className="List">
        <TopNav />
        <p class="coldbrewListBar">
          콜드브루 Coffe ☕️{' '}
          <small>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</small>
        </p>
        <div>
          <ul>
            <li>
              <img
                src="../images/jinsungkim/starBucks_ColdBrew_Picture/나이트로 바닐라 크림.jpeg"
                alt="나이트로 바닐라 크림"
              />
              <span>나이트로 바닐라 크림❣️</span>
            </li>
            <li>
              <img
                src="../images/jinsungkim/starBucks_ColdBrew_Picture/나이트로 콜드 브루.jpeg"
                alt="나이트로 콜드 브루"
              />
              <span>나이트로 콜드 브루❣️</span>
            </li>
            <li>
              <img
                src="../images/jinsungkim/starBucks_ColdBrew_Picture/돌체 콜드 브루.jpeg"
                alt="돌체 콜드 브루"
              />
              <span>돌체 콜드 브루❣️</span>
            </li>
            <li>
              <img
                src="../images/jinsungkim/starBucks_ColdBrew_Picture/바닐라 크림 콜드 브루.jpeg"
                alt="바닐라 크림 콜드 브루"
              />
              <span>바닐라 크림 콜드 브루❣️</span>
            </li>
            <li>
              <img
                src="../images/jinsungkim/starBucks_ColdBrew_Picture/벨벳 다크 모카 나이트로.jpeg"
                alt="벨벳 다크 모카 나이트로.jpeg"
              />
              <span>벨벳 다크 모카 나이트로❣️</span>
            </li>
            <li>
              <img
                src="../images/jinsungkim/starBucks_ColdBrew_Picture/시그니처 더 블랙 콜드 브루.jpeg"
                alt="시그니처 더 블랙 콜드 브루"
              />
              <span>시그니처 더 블랙 콜드 브루❣️</span>
            </li>
            <li>
              <img
                src="../images/jinsungkim/starBucks_ColdBrew_Picture/아이스크림 블렌딩 콜드 브루.jpeg"
                alt="아이스크림 블렌딩 콜드 브루"
              />
              <span>아이스크림 블렌딩 콜드 브루❣️</span>
            </li>
            <li>
              <img
                src="../images/jinsungkim/starBucks_ColdBrew_Picture/제주 비자림 콜드 브루.jpeg"
                alt="제주 비자림 콜드 브루"
              />
              <span>제주 비자림 콜드 브루❣️</span>
            </li>
            <li>
              <img
                src="../images/jinsungkim/starBucks_ColdBrew_Picture/콜드 브루 몰트.jpeg"
                alt="콜드 브루 몰트"
              />
              <span>콜드 브루 몰트❣️</span>
            </li>
            <li>
              <img
                src="../images/jinsungkim/starBucks_ColdBrew_Picture/콜드 브루 오트 라떼.jpeg"
                alt="콜드 브루 오트 라떼"
              />
              <span>콜드 브루 오트 라떼❣️</span>
            </li>
            <li>
              <img
                src="../images/jinsungkim/starBucks_ColdBrew_Picture/콜드 브루 플로트.jpeg"
                alt="콜드 브루 플로트"
              />
              <span>콜드 브루 플로트❣️</span>
            </li>
            <li>
              <img
                src="../images/jinsungkim/starBucks_ColdBrew_Picture/콜드 브루.jpeg"
                alt="콜드 브루"
              />
              <span>콜드 브루❣️</span>
            </li>
            <li>
              <img
                src="../images/jinsungkim/starBucks_ColdBrew_Picture/프렌치 애플 타르트 나이트로.jpeg"
                alt="프렌치 애플 타르트 나이트로"
              />
              <span>프렌치 애플 타르트 나이트로❣️</span>
            </li>
          </ul>
        </div>
        <p class="brewedListBar">
          브루드 Coffe ☕️{' '}
          <small>디카페인 에스프레소 샷추가 가능 (일부 음료 제외)</small>
        </p>
        <div>
          <ul>
            <li>
              <img
                src="../images/jinsungkim/starBucks_Brewed_Picture/아이스 커피.jpeg"
                alt="아이스 커피"
              />
              <span>아이스 커피❣️</span>
            </li>
            <li>
              <img
                src="../images/jinsungkim/starBucks_Brewed_Picture/오늘의 커피.jpeg"
                alt="오늘의 커피"
              />
              <span>오늘의 커피❣️</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
