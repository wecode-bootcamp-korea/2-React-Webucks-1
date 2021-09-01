import React from 'react';
import '../List/List.scss';

class List extends React.Component {
  render() {
    return (
      <>
        <nav>
          <div className="menuBar">
            <h4 id="menuBarLogo">WeBucks</h4>
            <ul className="menuBarName">
              <li>COFFEE</li>
              <li>MENU</li>
              <li>STORE</li>
              <li>WHATS'NEW</li>
            </ul>
          </div>
        </nav>

        <section>
          <div className="coffeeInfo">
            <span className="coffeeInfoName">콜드 브루 커피</span>
            <span className="coffeeInfoSelect">
              디카페인 에스프레소 샷 추가 가능
            </span>
          </div>
          <div className="container">
            <div className="menu">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg"
                alt="아이스크림 블렌딩 콜드 브루"
              />
              <p>아이스크림 블렌딩 콜드 브루</p>
            </div>
            <div className="menu">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
                alt="나이트로 바닐라 크림"
              />
              <p>나이트로 바닐라 크림</p>
            </div>
            <div className="menu">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg"
                alt="나이트로 콜드 브루"
              />
              <p>나이트로 콜드 브루</p>
            </div>
            <div className="menu">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
                alt="돌체 콜드 브루"
              />
              <p>돌체 콜드 브루</p>
            </div>
            <div className="menu">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg"
                alt="바닐라 크림 콜드 브루"
              />
              <p>바닐라 크림 콜드 브루</p>
            </div>
            <div className="menu">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg"
                alt="벨벳 다크 모카 나이트로"
              />
              <p>벨벳 다크 모카 나이트로</p>
            </div>
            <div className="menu">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
                alt="제주 비자림 콜드 브루"
              />
              <p>제주 비자림 콜드 브루</p>
            </div>
            <div className="menu">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg"
                alt="콜드 브루"
              />
              <p>콜드 브루</p>
            </div>
            <div className="menu">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg"
                alt="콜드 브루 몰트"
              />
              <p>콜드 브루 몰트</p>
            </div>
            <div className="menu">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236748.jpg"
                alt="콜드 브루 플로트"
              />
              <p>콜드 브루 플로트</p>
            </div>
          </div>
          <div className="coffeeInfo">
            <span className="coffeeInfoName">브루드 커피</span>
            <span className="coffeeInfoSelect">
              디카페인 에스프레소 샷 추가 가능
            </span>
          </div>
          <div className="container">
            <div className="menu">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg"
                alt="아이스커피"
              />
              <p>아이스커피</p>
            </div>
            <div className="menu">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg"
                alt="오늘의 커피"
              />
              <p>오늘의 커피</p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default List;
