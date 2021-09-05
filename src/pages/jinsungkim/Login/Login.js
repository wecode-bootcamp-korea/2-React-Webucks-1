import React, { Component } from 'react';
import ActiveButn from './ActiveButn';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <form className="Login">
        <div class="outLine">
          <div class="LoginBoxFlexCenter">
            <div class="LoginBox">
              <img
                class="logo"
                src="../images/jinsungkim/webucksLogo.png"
                alt="Webucks"
              />
              <ActiveButn />
              <a class="findPw" href="_blank">
                비밀번호를 잊으셨나요?
              </a>
            </div>
            <script type="text/javascript" src="/Login/Login.js"></script>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
