import React from 'react';
import './Login.scss';

class ActiveButn extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      type: 'text',
      class: 'defaultButton',
    };
  }
  handleIdInput = event => {
    if (event.target.type === 'text') {
      this.setState({
        id: event.target.value,
      });
    } else if (event.target.type === 'password') {
      this.setState({
        pw: event.target.value,
      });
    }
  };
  render() {
    return (
      <div class="innerBox">
        <input
          onChange={this.handleIdInput}
          value={this.state.id}
          class="inputBox"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={this.handleIdInput}
          value={this.state.pw}
          class="inputBox"
          type="password"
          placeholder="비밀번호"
        />
        <button class="defaultButton" disabled>
          로그인
        </button>
      </div>
    );
  }
}

export default ActiveButn;
