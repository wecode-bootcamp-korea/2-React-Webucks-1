import React from 'react';
import './Login.scss';

class Loginyoonjin extends React.Component {
  constructor() {
    super();
    this.state = {
      givenIdValue: '',
      givenPwValue: '',
    };
  }

  handleIdInput = event => {
    this.setState({ givenIdValue: event.target.value });
  };

  handlePwInput = event => {
    this.setState({ givenPwValue: event.target.value });
  };

  isValidIdPwInput = () => {
    return this.state.givenIdValue.contains('@') && this.state.givenPwValue > 4;
  };

  returnClassNameToHandleColor = () => {
    if (isValidIdPwInput) {
      return 'active';
    } //미충족시 아무런 클래스명이 안 붙도록 하기 위함
  };

  render() {
    console.log(this.state);
    return (
      <div className="Login">
        <div className="Login-innerwrap">
          <Subject></Subject>
          <Form
            setStateWhenInputId={this.handleIdInput}
            setStateWhenInputPw={this.handlePwInput}
            returnClassNameToHandleColor={this.returnClassNameToHandleColor}
          ></Form>
        </div>
      </div>
    );
  }
}

class Subject extends React.Component {
  render() {
    return (
      <div className="logo-wrap">
        <p>Webucks</p>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <form className="form-wrap">
        <div className="useraccount-wrap">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.props.setStateWhenInputId}
          />
        </div>
        <div className="password-wrap">
          <input
            type="password"
            placeholder="비밀번호"
            onChange={this.props.setStateWhenInputPw}
          />
        </div>
        <div className="button-wrap">
          <input
            className={this.props.returnClassNameToHandleColor}
            type="button"
            name="로그인"
            value="로그인"
          />
        </div>
        <div className="find-wrap">
          <a href="/accounts/login/?source=auth_switcher">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </form>
    );
  }
}

export default Loginyoonjin;
