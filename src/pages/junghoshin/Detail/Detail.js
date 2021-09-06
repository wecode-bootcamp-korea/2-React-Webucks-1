// eslint-disable-line no-unused-vars
import { Component } from 'react';
import './DetailMockData';
import '../Detail/Detail.scss';
import '../TopNav/TopNav';
import '../List/List';

class Detail extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="webucks">
            <a href="list.html">WeBucks</a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#!">COFFEE</a>
              </li>
              <li>
                <a href="#!">MENU</a>
              </li>
              <li>
                <a href="#!">STORE</a>
              </li>
              <li>
                <a href="#!">WHAT'S NEW</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="DetailMenu">
          {/* <article> */}
          <div className="DetailMenuCategory">
            <h2>Cold Brew</h2>
            <ul>
              <li>
                <img
                  src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
                  alt=" >"
                />
                <a href="#!" className="SideMenu">
                  홈
                </a>
              </li>
              <li>
                <img
                  src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
                  alt=" >"
                />
                <a href="#!" className="SideMenu">
                  MENU
                </a>
              </li>
              <li>
                <img
                  src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
                  alt=" >"
                />
                <a href="#!" className="SideMenu">
                  음료
                </a>
              </li>
              <li>
                <img
                  src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
                  alt=" >"
                />
                <a href="#!" className="SideMenu">
                  콜드 브루
                </a>
              </li>
            </ul>
          </div>
          <div className="DetailContent">
            <div className="MenuImage">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202595.jpg"
                alt="Cold Brew"
              />
            </div>
            <div className="TotalMenuInfo">
              <div className="MenuTopInfo">
                <h3>콜드 브루</h3>
                <span className="EngName">Cold Brew</span>
                <br />
                <div className="HeartBtnPack">
                  <button className="HeartBtn"></button>
                </div>
                <p>
                  스타벅스 바리스타의 정성으로 탄생한 콜드 브루! 콜드 브루 전용
                  원두를 차가운 물로 14시간 동안 추출하여 한정된 양만
                  제공됩니다. 깊은 풍미의 새로운 커피 경험을 즐겨보세요.
                </p>
              </div>
              <div className="MenuInfo">
                <div className="MenuNutriInfo">
                  <p>제품 영양 정보</p>
                  <p>Tall (톨) / 355ml (12 fl oz)</p>
                </div>
                <div class="MenuContentInfo">
                  <ul>
                    <li>
                      <dl>
                        <dt>1회 제공량 (kcal)</dt>
                        <dd>5</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>포화지방 (g)</dt>
                        <dd>0</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>단백질 (g)</dt>
                        <dd>0</dd>
                      </dl>
                    </li>
                  </ul>
                  <div className="border">
                    <ul className="RightLine">
                      <li>
                        <dl>
                          <dt>나트륨 (mg)</dt>
                          <dd>11</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>당류 (g)</dt>
                          <dd>0</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>카페인 (mg)</dt>
                          <dd>150</dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="WarningMessage">
                  <p>알레르기 유발 요인 : 없음</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ReviewSection">
            <h2>Review</h2>
            <ul className="ReviewComment">
              <li>
                <dl>
                  <dt>coffee_lover</dt>
                  <dd>너무 맛있어요!</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>CHOCO7</dt>
                  <dd>오늘도 화이트 초콜릿 모카를 마시러 갑니다.</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>legend_dec</dt>
                  <dd>
                    진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿
                    모카는 전설이다.
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
          {/* <article/> */}
        </section>
        <footer>
          <div className="FooterMenu">
            <ul>
              <li className="FooterMenuTitle">COMPANY</li>
              <li className="FooterMenuCont">
                <a href="#!">한눈에 보기</a>
              </li>
              <li className="FooterMenuCont">
                <a href="#!">위벅스 사명</a>
              </li>
              <li className="FooterMenuCont">
                <a href="#!">위벅스 소개</a>
              </li>
              <li className="FooterMenuCont">
                <a href="#!">국내 뉴스룸</a>
              </li>
              <li className="FooterMenuCont">
                <a href="#!">세계의 위벅스</a>
              </li>
              <li className="FooterMenuCont">
                <a href="#!">글로벌 뉴스룸</a>
              </li>
            </ul>
            <ul>
              <li className="FooterMenuTitle">CORPORATE SALES</li>
              <li className="FooterMenuCont">
                <a href="#!">단체 및 기업 구매 안내</a>
              </li>
            </ul>
            <ul>
              <li className="FooterMeniuTitle">PARTERSHIP</li>
              <li className="FooterMenuCont">
                <a href="#!">신규 입점 제의</a>
              </li>
              <li className="FooterMenuCont">
                <a href="#!">협력 고객사 등록 신청</a>
              </li>
            </ul>
            <ul>
              <li className="FooterMeniuTitle">ONLINE COMMUNITY</li>
              <li className="FooterMenuCont">
                <a href="#!">페이스 북</a>
              </li>
              <li className="FooterMenuCont">
                <a href="#!">트위터</a>
              </li>
              <li className="FooterMenuCont">
                <a href="#!">유튜브</a>
              </li>
              <li className="FooterMenuCont">
                <a href="#!">블로그</a>
              </li>
              <li className="FooterMenuCont">
                <a href="#!">인스타그램</a>
              </li>
            </ul>
            <ul>
              <li className="FooterMeniuTitle">RECRUIT</li>
              <li className="FooterMenuCont">
                <a href="#!">채용 소개</a>
              </li>
              <li className="FooterMenuCont">
                <a href="#!">채용 지원하기</a>
              </li>
            </ul>
            <ul>
              <li className="FooterMeniuTitle">WEBUCKS</li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Detail;
