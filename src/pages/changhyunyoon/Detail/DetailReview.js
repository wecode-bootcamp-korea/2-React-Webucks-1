import React from 'react';

class DetailReview extends React.Component {
  constructor() {
    super();
    this.state = {
      review: '',
      list: [{ text: '' }],
    };
  }

  textChange = e => {
    this.setState({ review: e.target.value });
  };

  cleanReview = () => {
    let arr = this.state.list;
    arr = arr.concat({ text: this.state.review });
    this.setState({ review: '', list: arr });
  };

  pressEnter = e => {
    if (e.key === 'Enter') {
      this.cleanReview((e.target.value = ''));
    }
  };

  render() {
    return (
      <>
        <ul className="textBox">
          {this.state.list.map(e => (
            <li>{e.text}</li>
          ))}
        </ul>
        <input
          id="reviewInput"
          type="text"
          placeholder="리뷰를 입력해주세요"
          onChange={this.textChange}
          onKeyPress={this.pressEnter}
        />
      </>
    );
  }
}
export default DetailReview;
