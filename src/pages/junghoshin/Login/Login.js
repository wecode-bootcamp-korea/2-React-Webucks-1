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
          onChange={this.handleInput}
        />

        <input
          id="pw"
          type="password"
          placeholder="비밀번호"
          value={this.inputPw}
          name="inputPw"
          onChange={this.handleInput}
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

/*const userId = document.getElementById('id'); //id input
const userPw = document.getElementById('password'); //pw input
const logbtn = document.getElementsByClassName('login-btn')[0]; //login btn

console.log(userId);

userId.addEventListener('keyup', function () {
    const inputId = document.getElementById('id').value;
    const inputPw = document.getElementById('password').value;

    if (inputPw.includes('@') && inputPw.length >= 8) {
        console.log(123);

        logbtn.style.opacity = 10;
    }
    logbtn.addEventListener("click","list.html")

});*/

/*
userId.addEventListener('keyup',loginButtonColor)
// console.log(loginButtonColor)
userPw.addEventListener('keyup',loginButtonColor)
logbtn.addEventListener('keyup',loginButtonColor)
*/
