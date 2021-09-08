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
  //실행되었을 때(자식컴포넌트 input태그에서 onChange일어났을 때에, props로 전달받은 부모컴포넌트내부에정의된함수 가 실행되는데, 그게 바로 이거) (팔레트처럼 일단 클래스에 담아놓은거인듯.. 당장 constructor-render-(comDiMount)- setState - render - (comDiUp?) 여기에 직접영향주진않는다..그과정에 쓰일뿐) (내용물로 써준 대로, constructor-render되는 과정에서 form이 렌더될때, onChange가 있으면 함수가 실행되면서, setState가 되도록 역할할 뿐...)
  handleIdInput = event => {
    this.setState({ givenIdValue: event.target.value });
  };

  handlePwInput = event => {
    this.setState({ givenPwValue: event.target.value });
  };

  render() {
    return (
      <div className="Login">
        <div className="Login-innerwrap">
          <Subject></Subject>
          <Form
            //여러 개 props 이렇게 막 전달해도 되나?... 자식컴포넌트로 나눴을 경우에, 여러 개 props로 전달하려 할 때 어떻게 해야 하지...? 이름 서로 다르니까 정상적으로 되겠지..?
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
            onChange={this.props.setStateWhenInputId} //Form 자식컴포넌트에서 render()안에서 이렇게 props로 받았으니, 화면에 표시될 수도 있겠지?? //그런데 사용자입력데이터 저장은 부모컴포넌트 constructor의 state에만 보관하고 굳이 props로 전달해서 render에 띄울 필요 없지 않나(괜히 전달했나)
          />
        </div>
        <div className="password-wrap">
          <input
            type="password"
            placeholder="비밀번호"
            onChange={this.props.setStateWhenInputPw} //Form 자식컴포넌트에서 render()안에서 이렇게 props로 받았으니, 화면에 표시될 수도 있겠지?? //그런데 사용자입력데이터 저장은 부모컴포넌트 constructor의 state에만 보관하고 굳이 props로 전달해서 render에 띄울 필요 없지 않나(괜히 전달했나)
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
