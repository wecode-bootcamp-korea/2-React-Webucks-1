import React, { Component } from 'react';
import LoginButton from './LoginButton';
import '../../../styles/reset.scss';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <form className="Login">
        <div className="Style">
          <div class="backgroundColor">
            <div class="loginBoxFlexCenter">
              <div class="loginBox">
                <img
                  class="logo"
                  src="/Images/jinsungkim/webucksLogo.png"
                  alt="Webucks"
                />
                <div className="Button">
                  <LoginButton />
                </div>
                <a class="findPw" href="_blank">
                  비밀번호를 잊으셨나요?
                </a>
              </div>
              <script type="text/javascript" src="/Login/Login.js"></script>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
