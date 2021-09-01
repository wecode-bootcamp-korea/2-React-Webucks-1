import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <body className="Login">
        <div class="outLine">
          <div class="LoginBoxFlexCenter">
            <div class="LoginBox">
              <img
                class="logo"
                src="../images/jinsungkim/webucksLogo.png"
                alt="Webucks"
              />
              <div class="innerBox">
                <input
                  id="id"
                  class="idBox"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <input
                  id="pw"
                  class="pwBox"
                  type="password"
                  placeholder="비밀번호"
                />
                <button
                  id="butn"
                  class="logButton"
                  onclick="/List/List.js'"
                  disabled
                >
                  로그인
                </button>
              </div>
              <a class="findPw" href="_blank">
                {' '}
                비밀번호를 잊으셨나요?
              </a>
            </div>
            <script type="text/javascript" src="/Login/Login.js"></script>
          </div>
        </div>
      </body>
    );
  }
}

export default Login;
