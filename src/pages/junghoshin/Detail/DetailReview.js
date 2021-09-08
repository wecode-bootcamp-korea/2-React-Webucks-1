import React from 'react';
import './Detail.scss';

class DetailReview extends React {
  constructor() {
    super();
    this.state = {
      review: '',
      list: [],
    };
  }

  comment = e => {
    this.setState({ review: e.target.value });
  };

  addComment = () => {
    this.state.list.push(this.state.review);
    this.setState({
      list: this.state.list,
      input: '',
    });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.list.map(el => (
            <li>{el}</li>
          ))}
        </ul>
        <div class="ReviewCss">
          <textarea
            onChange={this.comment}
            class="addReview"
            cols="55"
            rows="3"
            value={this.state.input}
            placeholder="리뷰를 입력해주세요."
          />
          <button onClick={this.addComment} class="inputReviewBtn">
            입력
          </button>
        </div>
      </>
    );
  }
}

export default DetailReview;
