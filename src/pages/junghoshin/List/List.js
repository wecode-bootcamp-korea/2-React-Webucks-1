import React from 'react';
import { Link } from 'react-router-dom';
//import Link from 'react-dom';
import Lists from './List'

class List extends React.Component {
  render(){
    return (
        <div>
            <section className="Container" />
            <header>
                <div className="Nav">
                    <div className="Nav-left">
                        <h1>
                            WeBucks
                        </h1>
                    </div>
                    <nav className = "Nav-right">
                        <ul>
                            <li><Link to="#" />COFFEE</li>
                            <li><Link to="#" />MENU</li>
                            <li><Link to="#" />STORE</li>
                            <li><Link to="#" />WHAT'S NEW</li>           
                        </ul>
                    </nav>
                </div>
            </header>

            <header className="ColdBrewBox" />
                <h4>콜드 브루 커피</h4>
                <div className='Nav2' />
                    <img src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png" alt="커피 이모지" style="height: 15" /> 
                    <p>디카페인 에스프레스 샷 추가 가능(일부 음료 제외)</p>
                <div />
            <header/> 
            <section className='KindOfColdBrew'/>
                <ul className='ColdBrew' />
                    <li>                        
                        <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346176.jpg" alt="시그니처 더 블랙 콜드 브루" />  
                        <p>시그니처 더 블랙 콜드 브루</p>                           
                    </li>
                    <li><img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg" alt="아이스크림 블렌딩 콜드 브루" />  
                        <p>아이스크림 블렌딩 콜드 브루</p>
                    </li>
                    <li><img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg" alt="나이트로 바닐라 크림" />  
                        <p>나이트로 바닐라 크림</p>                           
                    </li>
                    <li/>
                    <li><img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg" alt="나이트로 콜드 브루" />  
                        <p>나이트로 콜드 브루</p>
                    </li>
                    <li><img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg" alt="돌체 콜드 브루" />   
                        <p>돌체 콜드 브루</p>
                    </li>
                    <li><img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg" alt="바닐라 크림 콜드 브루" />  
                        <p>바닐라 크림 콜드 브루</p>
                    </li>
                    <li><img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg" alt="바닐라 크림 콜드 브루" />  
                        <p>바닐라 크림 콜드 브루</p>
                    </li>
                    <li><img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg" alt="벨벳 다크 모카 나이트로" />  
                        <p>벨벳 다크 모카 나이트로</p>
                    </li>                            
                    <li><img src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg" alt="제주 비자림 콜드 브루" />  
                        <p>제주 비자림 콜드 브루</p></li>                                          
                    <ul />
            <section />
        </div>    
    )
}
}
export default List;