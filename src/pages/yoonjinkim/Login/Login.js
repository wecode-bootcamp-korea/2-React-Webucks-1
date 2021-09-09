import React from 'react';
import Subject from './Subject';
import Form from './Form';
import './Login.scss';

class Loginyoonjin extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInput = event => {
    // const { name, value } = event.target; 으로 묶기 전
    const name = event.target.name;
    const value = event.target.value;
    // 바로 위에서 변수(상수?)에 담아준 걸로, 이렇게 짧게 표현 (아래)
    this.setState({ [name]: value });
    //[] 안에 name 써준 건, '계산된 속성명'이란 거임...
    //id,pw이런 걸 실제 렌더되는부분에 name(속성명)=속성값으로 적어주고 저렇게 적어준다고 함
    //실제 렌더되는 부분이 자식컴포넌트로 분리되더라도 저렇게만 적어줘도 되는건지 모르겠음...props로 안넘겨두되나
  };

  isValidIdPwInput = () => {
    return this.state.id.includes('@') && this.state.pw > 4;
  };

  render() {
    return (
      <div className="Loginyoonjin">
        <div className="Login-innerwrap">
          <Subject />
          <Form
            handleInput={this.handleInput}
            isValidIdPwInput={this.isValidIdPwInput}
          />
        </div>
      </div>
    );
  }
}

export default Loginyoonjin;
