import React, { Component } from 'react';
// import Link from 'react-router-dom';
import '../Login/Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      idValid: '',
      pwValid: '',
    };
  }

  handleIdInput = event => this.setState({ idValid: event.target.value });
  handlePwInput = event => this.setState({ pwValid: event.target.value });

  handleChangeBtn = () =>
    this.state.idValid.includes('@') && this.state.pwValid.length > 4;

  render() {
    let loginBtnActive = this.handleChangeBtn();

    return (
      <div className="Login">
        <section className="loginPage">
          <div className="header">
            <h1 id="loginPageLogo">WeBucks</h1>
          </div>
          <div className="middle">
            <form
              id="loginForm"
              className="loginPageInfoInput"
              action="./list.html"
            >
              <input
                type="text"
                className="inputId"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.handleIdInput}
              />
              <input
                type="password"
                className="inputPw"
                placeholder="비밀번호"
                onChange={this.handlePwInput}
              />
              <button
                className={loginBtnActive ? 'active' : 'deactive'}
                form="loginForm"
                disabled
              >
                로그인
              </button>
            </form>
          </div>
          <div className="footer">
            <a href="#!">비밀번호를 잊으셨나요?</a>
          </div>
        </section>
      </div>
    );
  }
}
export default Login;
