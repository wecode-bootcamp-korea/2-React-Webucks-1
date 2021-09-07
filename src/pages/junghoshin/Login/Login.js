import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="loginBox">
        <span className="logo">WeBucks</span>

        <input
          id="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={this.inputId}
          name="inputId"
          onChange={this.handleIdInput}
        />

        <input
          id="pw"
          type="password"
          placeholder="비밀번호"
          value={this.inputPw}
          name="inputPw"
          onChange={this.handlePwInput}
        />

        <button
          type="button"
          id="loginBtn"
          style={{ opacity: this.state.opacity }}
          onClick={this.goToList}
        >
          로그인
        </button>

        <span id="forgotPw">비밀번호를 잊으셨나요?</span>
      </div>
    );
  }
}

export default Login;
