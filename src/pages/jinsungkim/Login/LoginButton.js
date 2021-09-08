import React from 'react';
import './Login.scss';

class LoginButton extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      butnVaild: 'defaultButton',
    };
  }

  handleInput = event => {
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

  isValid = () => {
    return this.state.id.includes('@') && this.state.pw.length >= 5
      ? this.setState({ butnVaild: 'activeButton' })
      : this.setState({ butnVaild: 'defaultButton' });
  };

  render() {
    return (
      <div class="innerBox">
        <input
          onChange={this.handleInput}
          onKeyUp={this.isValid}
          class="inputBox"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={this.handleInput}
          onKeyUp={this.isValid}
          class="inputBox"
          type="password"
          placeholder="비밀번호"
        />
        <button class={this.state.butnVaild}>로그인</button>
      </div>
    );
  }
}

export default LoginButton;
