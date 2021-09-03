import React from 'react';
// import { Link } from 'react-router-dom';
import '../Login/Login.scss';

class Login extends React.Component {
  render() {
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
              />
              <input
                type="password"
                className="inputPw"
                placeholder="비밀번호"
              />
              <button className="loginBtn" form="loginForm" disabled>
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
