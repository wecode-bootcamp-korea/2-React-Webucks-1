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

  render() {
    console.log(this.state);
    return (
      <div className="Login">
        <div className="Login-innerwrap">
          <Subject></Subject>
          <Form
            setStateWhenInputId={this.handleIdInput}
            setStateWhenInputPw={this.handlePwInput}
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
          <input type="button" name="로그인" value="로그인" />
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
