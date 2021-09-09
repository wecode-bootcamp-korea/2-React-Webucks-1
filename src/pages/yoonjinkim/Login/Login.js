import React from 'react';
import Subject from './Subject';
import Form from './Form';
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
    return this.state.givenIdValue.includes('@') && this.state.givenPwValue > 4;
  };

  render() {
    console.log(this.state.givenIdValue);
    return (
      <div className="Loginyoonjin">
        <div className="Login-innerwrap">
          <Subject />
          <Form
            givenIdValue={this.state.givenIdValue}
            setStateWhenInputId={this.setStateWhenInputId}
            setStateWhenInputPw={this.setStateWhenInputPw}
            isValidIdPwInput={this.isValidIdPwInput}
          />
        </div>
      </div>
    );
  }
}

export default Loginyoonjin;
