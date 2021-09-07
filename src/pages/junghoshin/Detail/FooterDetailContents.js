import React from 'react';
import FooterDetailMockData from './FooterDetailMockData';
import './Detail.scss';

class FooterNews extends React.Component {
  render() {
    return (
      <div>
        {FooterNews.map(footContents => {
          <ul>
            <li></li>
          </ul>;
        })}
      </div>
    );
  }
}

export default FooterNews;
