import React from 'react';
import './Detail.scss';

class Review extends React.Component {
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
    if (this.state.input.length > 0) {
      this.setState({
        list: this.state.list.concat(this.state.input),
        input: '',
      });
    }
  };

  removeComment = comment => {
    this.setState({
      list: this.state.list.filter(x => x !== comment),
    });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.list.map(comment => (
            <li class="removeButtonFlex">
              {comment}
              <i
                onClick={() => this.removeComment(comment)}
                class="far fa-trash-alt removeButton"
              ></i>
            </li>
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
            리뷰등록
          </button>
        </div>
      </>
    );
  }
}

export default Review;
