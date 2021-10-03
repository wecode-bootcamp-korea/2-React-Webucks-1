import React from 'react';

class DetailReview extends React.Component {
  constructor() {
    super();
    this.state = {
      review: '',
      list: [],
    };
  }

  textChange = e => {
    const { value } = e.target;
    this.setState({ review: value });
  };

  cleanReview = () => {
    const { list, review } = this.state;
    this.setState({
      list: list.concat(review),
      review: '',
    });
  };

  pressEnter = putReview => {
    if (putReview.key === 'Enter' && putReview.target.value !== '') {
      this.cleanReview((putReview.target.value = ''));
    }
  };

  render() {
    const { textChange, pressEnter } = this;
    const { list } = this.state;
    return (
      <>
        <ul className="textBox">
          {list.map((e, id) => (
            <li key={id}>{e}</li>
          ))}
        </ul>
        <input
          id="reviewInput"
          type="text"
          placeholder="리뷰를 입력해주세요"
          onChange={textChange}
          onKeyPress={pressEnter}
        />
      </>
    );
  }
}
export default DetailReview;
