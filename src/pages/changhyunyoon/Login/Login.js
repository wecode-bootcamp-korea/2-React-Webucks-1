import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
      isActive: false,
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => this.handleBtn());
  };

  handleBtn = () => {
    const { id, password } = this.state;
    this.setState({ isActive: id.includes('@') && password.length >= 5 });
  };

  goToList = () => {
    if (this.state.isActive) {
      this.props.history.push('./list-changhyun');
    }
    fetch('users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  goToId = () => {
    fetch('users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  render() {
    const { isActive } = this.state;
    return (
      <section className="Login">
        <div className="logInBox">
          <p className="logInlogo">WeBucks</p>
          <form className="form" action="./list.html">
            <div>
              <input
                className="text"
                type="text"
                placeholder="아이디"
                name="id"
                onChange={this.handleInput}
                onKeyPress={this.handleBtn}
              />
            </div>
            <div>
              <input
                className="password"
                type="password"
                placeholder="비밀번호"
                name="password"
                onChange={this.handleInput}
                onKeyPress={this.handleBtn}
              />
            </div>
            <div>
              <button
                className={isActive ? 'loginBtn active' : 'loginBtn'}
                onClick={this.goToList}
              >
                로그인
              </button>
            </div>
          </form>
          <button className="makeId" onClick={this.goToId} type="button">
            회원가입
          </button>
          <a className="link" href="http://naver.com">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </section>
    );
  }
}

export default Login;
