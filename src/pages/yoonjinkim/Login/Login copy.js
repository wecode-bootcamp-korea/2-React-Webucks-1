//갈아엎기 전
import React from 'react';
import './Login.scss';

class Loginyoonjin extends React.Component {
  //부모 컴포넌트에서 constructor()에서 state설정하고, 그걸 자식컴포넌트에 넘겨주는 것인데
  //그러면, 로그인페이지 컴포넌트에서 state모아야겠다.
  constructor() {
    super();
    this.state = {
      givenIdValue: '',
      givenPwValue: '',
    };
  }

  // const changeStateAsGivenValues = () => {
  //   this.setState = {
  //     givenIdValue: document.getElementsByClassName('useraccount-wrap')[0].받은값

  //돔에서 가져온 아이디입력요소
  //document.getElementsByClassName('') 이런 걸로는 안 되나?
  //저거 썼던 거는, JS에서 html요소를 객체로 파악하는, DOM을 썼기 때문에 가능
  //여기는 리액트
  //리액트에서 html요소에 어떻게 접근하지?
  //리액트랑 JS랑 다른 점이 뭐지? 한방에 직관적으로 해결. virtual DOM의 활용. 이게뭔데? html요소접근법은 동일하다
  //console.log로 확인해보자.
  //어디에 찍어보지?
  //html요소를 가져와서 사용하기 이전에 찍으면 될듯.
  //어디에서 사용하려 했지?
  //아이디입력창을 가져오려 했고, 그걸 가져와서 매번 입력값 바뀔때마다 어떤 동작(?)을 추가해주려 했었음
  //하지만 render()함수 내에 찍어봐야 화면에 찍히려나? -> 해봄 -> 잘 출력됨 -> 오케이, 그럼 받은값 확인하자

  //받은값은, 요소.addEventListener('input', changeLoginButtonColor)
  //
  //   }
  // }
  //setState()써야하면 이쯤에 함수 또 만들어서 그 안에 써야할듯?
  //state 또 바꿔준다면 여기로 돌아오기

  render() {
    console.log(this.state.givenIdValue); //'' 안나옴.
    const loginElement = document.getElementsByClassName('useraccount-wrap')[0];
    console.log(loginElement);

    const getValueWhenInputted = el => {
      //이 콜백함수는, 인자를 언제나
    };
    const loginElementGivenValue = loginElement.addEventListener(
      'input',
      getValueWhenInputted
    );

    return (
      <div className="Login">
        <div className="Login-innerwrap">
          <Subject></Subject>
          <Form givenIdValue="this.state.givenIdValue"></Form>
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
      //{this.props.givenIdValue}
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
