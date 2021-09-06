import React, { Component } from 'react';
import TopNav from '../TopNav';
import { DOLCHE_COLDBREW } from './.CooffeeMockData';
import HeartButton from './HeartButton';
import InputReview from './inputReview';
import '../../../styles/reset.scss';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <main className="Detail">
        <TopNav />
        <div className="TapNav">
          <nav class="coldbrewSection">
            <p class="Hfont" type="text">
              {DOLCHE_COLDBREW[0].coldbrew}
            </p>
            <span class="pagePath">
              <div>
                <a target="_blank" href="new">
                  홈
                </a>
                〉
                <a target="_blank" href="new">
                  MENU
                </a>
                〉
                <a target="_blank" href="new">
                  음료
                </a>
                〉
                <a target="_blank" href="new">
                  에스프레소
                </a>
                〉
                <a target="_blank" href="new">
                  돌체 콜드 브루
                </a>
              </div>
            </span>
          </nav>
        </div>
        <section class="informationSection">
          <img
            class="dolcheColdbrew"
            src="../Images/starbucksColdbrewPicture/돌체 콜드 브루.jpeg"
            alt=""
          />
          <div class="information">
            <div class="coldbrewNameUnderbar">
              <p class="heartButton Hfont">
                {DOLCHE_COLDBREW[0].coldbrewName} <HeartButton />
              </p>
              {DOLCHE_COLDBREW[0].coldbrewEngName}
            </div>
            <div class="explanation">{DOLCHE_COLDBREW[0].intro}</div>
            <div class="nutrition">
              <p class="Hfont">
                <small>제품 영양 정보</small>
              </p>
              <p class="Hfont">
                <small>Tall(톨) / 355ml (12 fl oz)</small>
              </p>
            </div>
            <div class="nutritionInformationFlex">
              <div class="nutritionInformationFlex nutritionInformationBorder">
                <div class="nutritionInformationColumn nutritionInformationFlex2">
                  <span>1회 제공량 (kcal)</span>
                  <span>포화지방 (g)</span>
                  <span>단백질 (g)</span>
                </div>
                <div class="nutritionInformationColumn nutritionInformationStyle">
                  <span>{DOLCHE_COLDBREW[0].kcal}</span>
                  <span>{DOLCHE_COLDBREW[0].fat}</span>
                  <span>{DOLCHE_COLDBREW[0].protein}</span>
                </div>
              </div>
              <div class="nutritionInformationFlex">
                <div class="nutritionInformationColumn nutritionInformationFlex2">
                  <span>나트륨 (mg)</span>
                  <span>당류 (g)</span>
                  <span>카페인 (mg)</span>
                </div>
                <div class="nutritionInformationColumn nutritionInformationStyle">
                  <span>{DOLCHE_COLDBREW[0].Na}</span>
                  <span>{DOLCHE_COLDBREW[0].sugar}</span>
                  <span>{DOLCHE_COLDBREW[0].Caffeine}</span>
                </div>
              </div>
            </div>
            <div class="allergyNav">알레르기 유발요인: 우유</div>
            <div>
              <p class="reviewNav Hfont">
                <small>리뷰</small>
              </p>
              <div class=" reviewBox">
                <InputReview />
              </div>
            </div>
          </div>
        </section>
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
