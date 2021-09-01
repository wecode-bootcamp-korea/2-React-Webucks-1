import React, { Component } from 'react';
import './Login.scss';

class Subject extends Component {
  render() {
    return (
      <div classNameName="logo-wrap">
        <img alt="logo" src=".svg" />
      </div>
    );
  }
}

class Form extends Component {
  render() {
    return (
      <form className="form-wrap">
        <div className="useraccount-wrap">
          <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
        </div>
        <div className="password-wrap">
          <input type="password" placeholder="비밀번호" />
        </div>
        <div className="button-wrap">
          <input type="button" name="로그인" value="로그인" />
        </div>
      </form>
    );
  }
}

class Login extends Component {
  render() {
    return (
      <div classNameName="Login">
        <Subject></Subject>
        <Form></Form>
      </div>
    );
  }
}

export default Login;
