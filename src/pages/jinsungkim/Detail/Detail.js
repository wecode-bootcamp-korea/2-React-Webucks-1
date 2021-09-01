import React, { Component } from 'react';
import TopNav from '../TopNav/TopNav.js';
import '../Detail/Detail.scss';

class Detail extends Component {
  render() {
    return (
      <main className="Detail">
        <TopNav />
        <nav class="coldbrewSection">
          <p type="text">콜드 브루</p>
          <span class="pagePath">
            홈 〉 MENU 〉 음료 〉 에스프레소 〉 돌체 콜드 브루
          </span>
        </nav>
        <section class="informationSection">
          <img
            class="dolcheColdbrew"
            src="../images/jinsungkim/starbucks_ColdBrew_PIcture/돌체 콜드 브루.jpeg"
            alt="돌체 콜드 브루"
          />
          <div class="information">
            <div>
              <p>돌체 콜드 브루</p>Dolche Coldbrew
            </div>
            <div class="explanation">
              무더운 여름철, 동남아 휴가지에서 즐기는 커피를 떠오르게 하는
              <br />
              스타벅스 음료의 베스트 x 베스트 조합인 돌체 콜드 브루를
              만나보세요!
            </div>
            <div class="nutrition">
              <p>
                <small>제품 영양 정보</small>
              </p>
              <p>
                <small>Tall(톨) / 355ml (12 fl oz)</small>
              </p>
            </div>
            <div class="nutritionInformationFlex">
              <div class="nutritionInformationColumn">
                <span>1회 제공량 (kcal)</span>
                <span>포화지방 (g)</span>
                <span>단백질 (g)</span>
              </div>
              <div class="nutritionInformationColumn nutritionInformationStyle3">
                <span>345</span>
                <span>11</span>
                <span>11</span>
              </div>
              <div class="nutritionInformationColumn nutritionInformationStyle nutritionInformationStyle2">
                <span>나트륨 (mg)</span>
                <span>당류 (g)</span>
                <span>카페인 (mg)</span>
              </div>
              <div class="nutritionInformationColumn nutritionInformationStyle">
                <span>150</span>
                <span>35</span>
                <span>75</span>
              </div>
            </div>
            <div class="allergyNav">
              <p>
                <small>알레르기 유발요인: 우유</small>
              </p>
            </div>
            <div>
              <p class="reviewNav">
                <small>리뷰</small>
              </p>
            </div>
          </div>
        </section>
        <div class="reviewBox"></div>
        <textarea
          class="inputReview"
          name="review"
          cols="65"
          rows="1"
          placeholder="리뷰를 입력해 주세요"
        ></textarea>
        <footer class="footerTap footerBox">
          <ul>
            <li>
              <h4>COMPANY</h4>
            </li>
            <li>한눈에 보기</li>
            <li>스타벅스 사명</li>
            <li>스타벅스 소개</li>
            <li>국내 뉴스룸</li>
            <li>세계의 스타벅스</li>
            <li>글로벌 뉴스룸</li>
          </ul>
          <ul>
            <li>
              <h4>CORPORATE SALES</h4>
            </li>
            <li>단체 및 기업 구매 안내</li>
          </ul>
          <ul>
            <li>
              <h4>PARTNERSHIP</h4>
            </li>
            <li>신규 입점 제의</li>
            <li>협력 고객사 등록 신청</li>
          </ul>
          <ul>
            <li>
              <h4>ONLY CUMMUNITY</h4>
            </li>
            <li>페이스북</li>
            <li>트위터</li>
            <li>유튜브</li>
            <li>블로그</li>
            <li>인스타그램</li>
          </ul>
          <ul>
            <li>
              <h4>RECRUIT</h4>
            </li>
            <li>채용 소개</li>
            <li>채용 지원하기</li>
          </ul>
          <ul>
            <li>
              <h4>WEBUCKS</h4>
            </li>
          </ul>
        </footer>
      </main>
    );
  }
}

export default Detail;
