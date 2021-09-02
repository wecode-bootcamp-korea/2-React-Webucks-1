import React from 'react';
import TopNav from '../TopNav/TopNav';
import './List.scss';

class List extends React.Component {
  render() {
    return (
      <>
        <TopNav />
        <div className="coldbrew">
          <p className="cold">콜드 부르 커피</p>
          <img className="coffeeimg" src="/images/coffee.png" alt="위벅스" />
          <p className="dcafe">
            디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
          </p>
        </div>
        <section className="menu1">
          <div>
            <a>
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346334.jpg"
                alt="시그니처 더 블랙 콜드부르"
              />
            </a>
            <p>시그니처 더 블랙 콜드브루</p>
          </div>
          <div>
            <a>
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238875.jpg"
                alt="아이스크림 블렌딩 콜드브루"
              />
            </a>
            <p>아이스크림 블렌딩 콜드브루</p>
          </div>
          <div>
            <a>
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452556.jpg"
                alt="벨벳 다크 모카 나이트로"
              />
            </a>
            <p>벨벳 다크 모카 나이트로</p>
          </div>
          <div>
            <a>
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319174.jpg"
                alt="바닐라 크림 콜드브루"
              />
            </a>
            <p>바닐라 크림 콜드브루</p>
          </div>
          <div>
            <a>
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223958.jpg"
                alt="제주 비자림 콜드브루"
              />
            </a>
            <p>제주 비자림 콜드브루</p>
          </div>
          <div>
            <a>
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236754.jpg"
                alt="콜드브루 플로토"
              />
            </a>
            <p>콜드브루 플로토</p>
          </div>
          <div>
            <a>
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202595.jpg"
                alt="콜드브루"
              />
            </a>
            <p>콜드브루</p>
          </div>
          <div>
            <a>
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600541.jpg"
                alt="콜드브루 몰트"
              />
            </a>
            <p>콜드브루 몰트</p>
          </div>
        </section>
        <div className="coldbrew">
          <p className="cold">부르드 커피</p>
          <img
            className="coffeeimg"
            src="/images/coffee.png"
            width="3%"
            alt="위벅스"
          />
          <p className="dcafe">
            디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
          </p>
        </div>
        <section className="menu2">
          <div>
            <a>
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852999.jpg"
                alt="아이스 커피"
              />
            </a>
            <p>아이스 커피</p>
          </div>
          <div>
            <a>
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934246.jpg"
                alt="오늘의 커피"
              />
            </a>
            <p>오늘의 커피</p>
          </div>
        </section>
      </>
    );
  }
}
export default List;
