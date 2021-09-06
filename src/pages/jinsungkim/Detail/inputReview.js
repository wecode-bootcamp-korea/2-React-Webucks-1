import React from 'react';
import './Detail.scss';

class InputReview extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: [],
    };
  }

  comment = e => {
    this.setState({
      input: e.target.value,
    });
  };

  inputComment = () => {
    this.state.list.push(this.state.input);
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
            <li>💞&nbsp;&nbsp; {el}</li>
          ))}
        </ul>
        <div class="inputReviewFlex">
          <textarea
            onChange={this.comment}
            class="inputReview"
            name="review"
            cols="60"
            rows="1"
            value={this.state.input}
            placeholder="리뷰를 입력해 주세요"
          />
          <button onClick={this.inputComment} class="reviewInputButton">
            입력
          </button>
        </div>
      </>
    );
  }
}

export default InputReview;
