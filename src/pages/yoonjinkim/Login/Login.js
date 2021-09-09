import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Loginyoonjin extends React.Component {
  constructor() {
    super();
    this.state = {
      givenIdValue: '',
      givenPwValue: '',
    };
  }

  setStateWhenInputId = event => {
    this.setState({ givenIdValue: event.target.value });
  };

  setStateWhenInputPw = event => {
    this.setState({ givenPwValue: event.target.value });
  };

  // 비슷한 거를 합치기
  // handleInput = event => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };

  isValidIdPwInput = () => {
    return this.state.givenIdValue.contains('@') && this.state.givenPwValue > 4;
  };

  render() {
    console.log(this.state);
    console.log(this.isValidIdPwInput);
    return (
      <div className="Loginyoonjin">
        <div className="Login-innerwrap">
          <Subject />
          <Form
            setStateWhenInputId={this.setStateWhenInputId}
            setStateWhenInputPw={this.setStateWhenInputPw}
            isValidIdPwInput={this.isValidIdPwInput}
          />
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
        <input
          className="user-account"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={this.props.setStateWhenInputId}
        />
        <input
          className="password"
          type="password"
          placeholder="비밀번호"
          onChange={this.props.setStateWhenInputPw}
        />
        <input
          className={
            this.isValidIdPwInput ? 'button-active' : 'button-inactive'
          }
          type="button"
          name="로그인"
          value="로그인"
        />
        <Link to="/accounts/login/?source=auth_switcher">
          비밀번호를 잊으셨나요?
        </Link>
      </form>
    );
  }
}

export default Loginyoonjin;
