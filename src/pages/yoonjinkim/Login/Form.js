import React from 'react';
import { Link } from 'react-router-dom';
import './Form.scss';

class Form extends React.Component {
  render() {
    console.log(this.props.givenIdValue);
    return (
      <form className="Form">
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
            this.props.isValidIdPwInput() ? 'button-active' : 'button-inactive'
          }
          type="button"
          name="로그인"
          value="로그인"
        />
        <Link to="/accounts/login/?source=auth_switcher" className="findLink">
          비밀번호를 잊으셨나요?
        </Link>
      </form>
    );
  }
}

export default Form;
